import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { achievements } from "@/data/portfolioData";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Star, GraduationCap } from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = { Trophy, Award, Star, GraduationCap };

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 lg:py-32 relative bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 section-title-underline">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">Recognition and accomplishments</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon] || Award;
            return (
              <motion.div key={achievement.id} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }}>
                <Card className="glass border-primary/20 h-full hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-neon-gradient flex items-center justify-center glow-purple">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs text-primary font-medium">{achievement.category}</span>
                    <h3 className="font-display font-semibold mt-2 mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                    <span className="text-xs text-muted-foreground">{achievement.year}</span>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
