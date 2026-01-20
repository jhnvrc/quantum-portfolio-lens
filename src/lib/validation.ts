/**
 * Input Validation & Sanitization Module
 * Following OWASP best practices for secure input handling
 */

import { z } from "zod";

// ============================================
// VALIDATION CONSTANTS
// ============================================

/** Maximum lengths to prevent DoS via large payloads */
export const INPUT_LIMITS = {
  NAME_MAX: 100,
  EMAIL_MAX: 255,
  MESSAGE_MAX: 2000,
  PHONE_MAX: 20,
  URL_MAX: 2048,
} as const;

/** Characters allowed in name fields (prevents injection) */
const NAME_REGEX = /^[a-zA-Z\s\-'.]+$/;

/** Safe URL protocols whitelist */
const SAFE_PROTOCOLS = ["https:", "mailto:", "tel:"];

// ============================================
// SANITIZATION UTILITIES
// ============================================

/**
 * Removes potentially dangerous characters while preserving readability
 * Prevents XSS, script injection, and HTML injection
 */
export function sanitizeText(input: string): string {
  return input
    .trim()
    // Remove null bytes and control characters
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    // Encode HTML entities to prevent XSS
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

/**
 * Validates and sanitizes URLs to prevent open redirects and javascript: injection
 */
export function sanitizeUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (!SAFE_PROTOCOLS.includes(parsed.protocol)) {
      console.warn("[Security] Blocked unsafe URL protocol:", parsed.protocol);
      return null;
    }
    return parsed.href;
  } catch {
    console.warn("[Security] Invalid URL format rejected");
    return null;
  }
}

/**
 * Normalizes email addresses for consistent storage and comparison
 */
export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

// ============================================
// ZOD SCHEMAS FOR FORM VALIDATION
// ============================================

/**
 * Contact form validation schema with strict rules
 * - Prevents empty/whitespace-only submissions
 * - Enforces length limits to prevent DoS
 * - Validates email format
 * - Rejects potentially malicious input patterns
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(INPUT_LIMITS.NAME_MAX, {
      message: `Name must be less than ${INPUT_LIMITS.NAME_MAX} characters`,
    })
    .refine(
      (val) => NAME_REGEX.test(val),
      { message: "Name contains invalid characters" }
    ),

  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .max(INPUT_LIMITS.EMAIL_MAX, {
      message: `Email must be less than ${INPUT_LIMITS.EMAIL_MAX} characters`,
    })
    .email({ message: "Please enter a valid email address" })
    .transform(normalizeEmail),

  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(INPUT_LIMITS.MESSAGE_MAX, {
      message: `Message must be less than ${INPUT_LIMITS.MESSAGE_MAX} characters`,
    })
    .refine(
      (val) => !/<script|javascript:|on\w+=/i.test(val),
      { message: "Message contains potentially unsafe content" }
    ),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// ============================================
// VALIDATION RESULT TYPES
// ============================================

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  errors?: Record<string, string>;
}

/**
 * Validates form data against a Zod schema and returns typed result
 */
export function validateFormData<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): ValidationResult<T> {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  // Convert Zod errors to simple field -> message map
  const errors: Record<string, string> = {};
  result.error.issues.forEach((issue) => {
    const field = issue.path[0]?.toString() || "form";
    if (!errors[field]) {
      errors[field] = issue.message;
    }
  });

  return { success: false, errors };
}
