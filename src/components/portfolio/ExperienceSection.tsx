import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/portfolioData";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

        <Tabs defaultValue="professional" className="max-w-4xl mx-auto">
          <TabsList className="w-full mb-8 bg-muted/50">
            <TabsTrigger value="professional" className="flex-1"><Briefcase className="w-4 h-4 mr-2" />Professional</TabsTrigger>
            <TabsTrigger value="organizational" className="flex-1"><Users className="w-4 h-4 mr-2" />Organizational</TabsTrigger>
          </TabsList>

          <TabsContent value="professional">
            <div className="space-y-6">
              {experience.professional.map((exp, index) => (
                <motion.div key={exp.id} initial={{ opacity: 0, x: -60 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}>
                  <Card className="glass border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-display font-semibold text-primary">{exp.role}</h3>
                          <p className="text-foreground font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                        <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((r, i) => <li key={i} className="text-sm text-muted-foreground flex items-start gap-2"><span className="text-primary">•</span>{r}</li>)}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((a, i) => <span key={i} className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary">{a}</span>)}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="organizational">
            <div className="space-y-6">
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
