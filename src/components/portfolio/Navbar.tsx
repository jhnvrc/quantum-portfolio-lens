import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificate", href: "#certificates" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
    >
      {/* Navigation - Always visible horizontal pill */}
      <div className="flex items-center gap-0.5 sm:gap-1 bg-[#2a2a2a] rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2 shadow-xl overflow-x-auto max-w-[95vw]">
        {navLinks.map((link) => (
          <motion.button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className={`px-2 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
              activeSection === link.href.substring(1)
                ? "bg-white text-black"
                : "text-gray-400 hover:text-white"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {link.label}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};
