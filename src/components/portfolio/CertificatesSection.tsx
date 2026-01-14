import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { certificates } from "@/data/portfolioData";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award } from "lucide-react";

export const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-20 lg:py-32 relative bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 section-title-underline">Certificates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">Professional certifications and credentials</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div key={cert.id} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }}>
              <Card className="glass border-primary/20 overflow-hidden hover-lift group h-full">
                <div className="relative h-32 overflow-hidden">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <Award className="absolute bottom-2 right-2 w-6 h-6 text-primary" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-primary">{cert.year}</span>
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
