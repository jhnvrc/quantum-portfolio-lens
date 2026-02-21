import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { navLinks } from "@/data/portfolioData";

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
      className="fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-2"
    >
      {/* Navigation - Always visible horizontal pill */}
      <div className="flex items-center gap-0 sm:gap-1 bg-[#2a2a2a] rounded-full px-1 sm:px-2 py-1 sm:py-2 shadow-xl">
        {navLinks.map((link) => (
          <motion.button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className={`px-2 sm:px-3 md:px-5 py-1 sm:py-1.5 md:py-2.5 text-[10px] sm:text-xs md:text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap ${
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
