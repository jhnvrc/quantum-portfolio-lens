import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Download, MapPin } from "lucide-react";
import { aboutMe, personalInfo } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 section-title-underline">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Get to know me, my background, and what drives my passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass border-primary/20 overflow-hidden">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    👤
                  </span>
                  Who I Am
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {aboutMe.introduction.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  {personalInfo.location}
                </div>

                <Button
                  className="mt-6 bg-neon-gradient hover:opacity-90 text-white"
                  asChild
                >
                  <a href={personalInfo.cvUrl} download>
                    <Download className="w-4 h-4 mr-2" />
                    Download My CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education & Goals */}
          <div className="space-y-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="glass border-primary/20">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-primary" />
                    </span>
                    Education
                  </h3>
                  <div className="space-y-6">
                    {aboutMe.education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="relative pl-6 border-l-2 border-primary/30"
                      >
                        <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary glow-purple" />
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span>{edu.year}</span>
                          <span className="px-2 py-0.5 rounded-full bg-accent/50 text-accent-foreground text-xs font-medium">
                            GPA: {edu.gpa}
                          </span>
                        </div>
                        <ul className="mt-2 space-y-1">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Goals */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="glass border-primary/20">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-display font-semibold mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Target className="w-4 h-4 text-primary" />
                    </span>
                    Goals & Aspirations
                  </h3>
                  <ul className="space-y-3">
                    {aboutMe.goals.map((goal, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-6 h-6 rounded-full bg-neon-gradient flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {index + 1}
                        </span>
                        {goal}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
