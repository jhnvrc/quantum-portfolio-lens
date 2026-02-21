import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/portfolioData";
import { Card, CardContent } from "@/components/ui/card";

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 60 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut" }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 section-title-underline">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">My professional journey and contributions</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experience.organizational.map((exp, index) => (
            <motion.div key={exp.id} initial={{ opacity: 0, x: -60 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}>
              <Card className="glass border-primary/20">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-display font-semibold text-primary">{exp.role}</h3>
                      <p className="text-foreground font-medium">{exp.organization}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((a, i) => <span key={i} className="px-3 py-1 text-xs rounded-full bg-accent/20 text-accent-foreground">{a}</span>)}
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
