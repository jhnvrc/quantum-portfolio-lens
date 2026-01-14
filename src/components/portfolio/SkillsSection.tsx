import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code, Layout, Database, Settings } from "lucide-react";
import { skills } from "@/data/portfolioData";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const iconMap: Record<string, React.ComponentType<any>> = {
  Code,
  Layout,
  Database,
  Settings,
};

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
  isVisible: boolean;
}

const SkillBar = ({ name, level, delay, isVisible }: SkillBarProps) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => setWidth(level), delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, level, delay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-sm">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 lg:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 section-title-underline">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {skills.categories.map((category, categoryIndex) => {
            const IconComponent = iconMap[category.icon] || Code;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 h-full hover-lift">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-neon-gradient flex items-center justify-center glow-purple">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-display font-semibold">{category.name}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          delay={0.3 + categoryIndex * 0.1 + skillIndex * 0.05}
                          isVisible={isInView}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Tabs - Mobile/Tablet */}
        <div className="lg:hidden">
          <Tabs defaultValue={skills.categories[0].name} className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-muted/50 p-2 rounded-xl mb-6">
              {skills.categories.map((category) => {
                const IconComponent = iconMap[category.icon] || Code;
                return (
                  <TabsTrigger
                    key={category.name}
                    value={category.name}
                    className="flex-1 min-w-[120px] data-[state=active]:bg-neon-gradient data-[state=active]:text-white"
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">{category.name.split(' ')[0]}</span>
                    <span className="sm:hidden">{category.icon}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {skills.categories.map((category, categoryIndex) => (
              <TabsContent key={category.name} value={category.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass border-primary/20">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <SkillBar
                            key={skill.name}
                            name={skill.name}
                            level={skill.level}
                            delay={skillIndex * 0.1}
                            isVisible={true}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["REST APIs", "WebSockets", "OAuth", "JWT", "Agile", "TDD", "Microservices", "Serverless"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.05 }}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
