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

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: Github, href: personalInfo.socialLinks.github, label: "GitHub", color: "hover:text-gray-400" },
    { icon: Instagram, href: personalInfo.socialLinks.instagram, label: "Instagram", color: "hover:text-pink-500" },
    { icon: MessageCircle, href: personalInfo.socialLinks.whatsapp, label: "WhatsApp", color: "hover:text-green-500" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email", color: "hover:text-red-400" },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 section-title-underline">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">Have a project in mind? Let's connect!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
            <Card className="glass border-primary/20">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-display font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div><Label htmlFor="name">Name</Label><Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" required className="mt-1.5 bg-background/50" /></div>
                  <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" required className="mt-1.5 bg-background/50" /></div>
                  <div><Label htmlFor="message">Message</Label><Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Your message..." required rows={5} className="mt-1.5 bg-background/50" /></div>
                  <Button type="submit" className="w-full bg-neon-gradient hover:opacity-90 text-white glow-purple"><Send className="w-4 h-4 mr-2" />Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }} className="flex flex-col justify-center">
            <h3 className="text-xl font-display font-semibold mb-6">Connect With Me</h3>
            <div className="space-y-4 mb-8">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5" />{personalInfo.email}</a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"><Phone className="w-5 h-5" />{personalInfo.phone}</a>
            </div>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={`p-4 rounded-full glass ${link.color} transition-colors`}>
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
