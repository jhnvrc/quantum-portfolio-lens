import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Linkedin, Github, Instagram, Mail, Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { 
  contactFormSchema, 
  validateFormData, 
  sanitizeUrl, 
  INPUT_LIMITS,
  type ContactFormData 
} from "@/lib/validation";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handles form submission with validation and sanitization
   * SECURITY: All inputs are validated against schema before processing
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    // Validate all form data using Zod schema
    const validation = validateFormData<ContactFormData>(contactFormSchema, formData);

    if (!validation.success) {
      setErrors(validation.errors || {});
      setIsSubmitting(false);
      toast({
        title: "Validation Error",
        description: "Please check the form for errors",
        variant: "destructive",
      });
      return;
    }

    // SECURITY: Use validated and sanitized data only
    const sanitizedData = validation.data!;

    try {
      // Send message to email via Web3Forms
      // TODO: Replace "YOUR_ACCESS_KEY_HERE" with your actual Web3Forms Access Key
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          name: sanitizedData.name,
          email: sanitizedData.email,
          message: sanitizedData.message,
          subject: `New Portfolio Message from ${sanitizedData.name}`,
          from_name: "Portfolio Contact Form"
        }),
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Handles input changes with real-time length validation
   */
  const handleInputChange = (field: keyof typeof formData, value: string) => {
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // SECURITY: Validate and sanitize all external URLs before use
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: sanitizeUrl(personalInfo.socialLinks.linkedin), 
      label: "LinkedIn", 
      color: "hover:text-blue-500" 
    },
    { 
      icon: Github, 
      href: sanitizeUrl(personalInfo.socialLinks.github), 
      label: "GitHub", 
      color: "hover:text-gray-400" 
    },
    { 
      icon: Instagram, 
      href: sanitizeUrl(personalInfo.socialLinks.instagram), 
      label: "Instagram", 
      color: "hover:text-pink-500" 
    },
    { 
      icon: MessageCircle, 
      href: sanitizeUrl(personalInfo.socialLinks.whatsapp), 
      label: "WhatsApp", 
      color: "hover:text-green-500" 
    },
    { 
      icon: Mail, 
      href: `mailto:${encodeURIComponent(personalInfo.email)}`, 
      label: "Email", 
      color: "hover:text-red-400" 
    },
  ].filter((link) => link.href !== null); // Remove invalid URLs

  return (
    <section id="contact" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 section-title-underline">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Interested in collaborating or have an internship opportunity? Let's connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <Card className="glass border-primary/20">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-display font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name">
                      Name
                      <span className="text-xs text-muted-foreground ml-2">
                        ({formData.name.length}/{INPUT_LIMITS.NAME_MAX})
                      </span>
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your name"
                      maxLength={INPUT_LIMITS.NAME_MAX}
                      className={`mt-1.5 bg-background/50 ${errors.name ? "border-destructive" : ""}`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-destructive mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email">
                      Email
                      <span className="text-xs text-muted-foreground ml-2">
                        ({formData.email.length}/{INPUT_LIMITS.EMAIL_MAX})
                      </span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      maxLength={INPUT_LIMITS.EMAIL_MAX}
                      className={`mt-1.5 bg-background/50 ${errors.email ? "border-destructive" : ""}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-destructive mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <Label htmlFor="message">
                      Message
                      <span className="text-xs text-muted-foreground ml-2">
                        ({formData.message.length}/{INPUT_LIMITS.MESSAGE_MAX})
                      </span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Your message..."
                      rows={5}
                      maxLength={INPUT_LIMITS.MESSAGE_MAX}
                      className={`mt-1.5 bg-background/50 ${errors.message ? "border-destructive" : ""}`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-destructive mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-neon-gradient hover:opacity-90 text-white glow-purple disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-xl font-display font-semibold mb-6">Connect With Me</h3>
            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${encodeURIComponent(personalInfo.email)}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${encodeURIComponent(personalInfo.phone)}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 rounded-full glass ${link.color} transition-colors`}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
