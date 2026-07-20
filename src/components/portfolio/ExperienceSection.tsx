import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/portfolioData";
import { Crown, Users, Briefcase, Star, Building2, ChevronRight } from "lucide-react";

const categoryConfig = {
  leadership: {
    icon: Crown,
    label: "Leadership",
    gradientFrom: "from-primary/20",
    gradientTo: "to-primary/5",
    borderColor: "border-primary/40",
    dotBg: "bg-primary",
    dotRing: "ring-primary/30",
    iconColor: "text-primary",
    badgeBg: "bg-primary/10 text-primary border-primary/20",
    lineColor: "bg-primary",
  },
  committee: {
    icon: Users,
    label: "Committee",
    gradientFrom: "from-accent/20",
    gradientTo: "to-accent/5",
    borderColor: "border-accent/40",
    dotBg: "bg-accent",
    dotRing: "ring-accent/30",
    iconColor: "text-accent",
    badgeBg: "bg-accent/10 text-accent border-accent/20",
    lineColor: "bg-accent",
  },
  social: {
    icon: Star,
    label: "Social Project",
    gradientFrom: "from-neon-cyan/20",
    gradientTo: "to-neon-cyan/5",
    borderColor: "border-neon-cyan/40",
    dotBg: "bg-neon-cyan",
    dotRing: "ring-neon-cyan/30",
    iconColor: "text-neon-cyan",
    badgeBg: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20",
    lineColor: "bg-neon-cyan",
  },
};

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Ambient background blobs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-5">
            <Building2 className="w-4 h-4" />
            Organizational Experience
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 section-title-underline">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-6 text-base">
            Leadership roles, committee involvement, and impactful contributions within PUMA Informatics.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/30 to-transparent" />

          <div className="space-y-6">
            {experience.organizational.map((exp, index) => {
              const config = categoryConfig[exp.category] || categoryConfig.committee;
              const Icon = config.icon;
              const isLeadership = exp.category === "leadership";

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
                  className="relative pl-16 md:pl-20 group"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-3 md:left-5 top-5 w-5 h-5 rounded-full ${config.dotBg} ring-4 ${config.dotRing} ring-offset-2 ring-offset-background z-10 transition-transform duration-300 group-hover:scale-125`}
                  />

                  {/* Card */}
                  <div
                    className={`relative rounded-xl border ${config.borderColor} bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo} backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5 ${isLeadership ? "shadow-md" : ""}`}
                  >
                    {/* Top accent bar */}
                    <div className={`h-0.5 w-full ${config.lineColor} opacity-60`} />

                    <div className="p-5 md:p-6">
                      {/* Header row */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          {/* Icon */}
                          <div className={`mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-background/60 border ${config.borderColor} flex items-center justify-center`}>
                            <Icon className={`w-4 h-4 ${config.iconColor}`} />
                          </div>
                          <div className="min-w-0">
                            <h3
                              className={`font-display font-semibold text-foreground leading-tight ${
                                isLeadership ? "text-[1.05rem]" : "text-base"
                              }`}
                            >
                              {exp.role}
                            </h3>
                            <p className="text-muted-foreground text-sm mt-0.5">{exp.organization}</p>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
                          <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${config.badgeBg}`}>
                            {config.label}
                          </span>
                          <span className="text-xs px-2.5 py-1 rounded-full border border-border/50 bg-background/40 text-muted-foreground font-medium whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed pl-12">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2 pl-12">
                        {exp.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2 group/item"
                          >
                            <ChevronRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${config.iconColor} opacity-70 transition-transform duration-200 group-hover/item:translate-x-0.5`} />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
