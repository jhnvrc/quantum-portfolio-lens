import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/portfolioData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Users, Heart } from "lucide-react";

const categoryConfig = {
  leadership: {
    icon: Crown,
    label: "Leadership",
    borderColor: "border-l-primary",
    dotColor: "bg-primary",
    glowClass: "border-primary/30",
  },
  committee: {
    icon: Users,
    label: "Committee",
    borderColor: "border-l-accent",
    dotColor: "bg-accent",
    glowClass: "border-accent/20",
  },
  social: {
    icon: Heart,
    label: "Social Project",
    borderColor: "border-l-neon-cyan",
    dotColor: "bg-neon-cyan",
    glowClass: "border-neon-cyan/20",
  },
};

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 section-title-underline">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Leadership & Organizational Involvement
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-8">
            {experience.organizational.map((exp, index) => {
              const config = categoryConfig[exp.category] || categoryConfig.committee;
              const Icon = config.icon;
              const isLeadership = exp.category === "leadership";

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full ${config.dotColor} ring-4 ring-background z-10`}
                  />

                  <Card
                    className={`glass border-l-4 ${config.borderColor} ${config.glowClass} ${
                      isLeadership ? "shadow-lg shadow-primary/5" : ""
                    }`}
                  >
                    <CardContent className="p-5 md:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div className="flex-1">
                          <h3
                            className={`font-display font-semibold text-foreground ${
                              isLeadership ? "text-xl" : "text-lg"
                            }`}
                          >
                            {exp.role}
                          </h3>
                          <p className="text-muted-foreground text-sm">{exp.organization}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Badge variant="outline" className="text-xs whitespace-nowrap">
                            {exp.period}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs flex items-center gap-1"
                          >
                            <Icon className="w-3 h-3" />
                            {config.label}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>

                      <ul className="space-y-1.5">
                        {exp.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
