import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Brain, 
  Cpu, 
  BarChart3, 
  Globe, 
  Cloud,
  Sparkles
} from "lucide-react";
import { skills } from "@/data/portfolioData";

const categoryIcons: Record<string, React.ComponentType<any>> = {
  "Programming Languages": Code,
  "Artificial Intelligence": Brain,
  "Machine Learning": Cpu,
  "Data Science": BarChart3,
  "Web Development": Globe,
  "Cloud & DevOps": Cloud,
};

interface SkillBadgeProps {
  name: string;
  delay: number;
  isVisible: boolean;
}

const SkillBadge = ({ name, delay, isVisible }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-default"
    >
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-purple-500/30 transition-colors">
        <Sparkles className="w-4 h-4 text-primary" />
      </div>
      <span className="font-medium text-sm text-foreground">{name}</span>
    </motion.div>
  );
};

interface SkillCategoryProps {
  name: string;
  skillsList: string[];
  index: number;
  isVisible: boolean;
}

const SkillCategory = ({ name, skillsList, index, isVisible }: SkillCategoryProps) => {
  const IconComponent = categoryIcons[name] || Code;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-4"
    >
      {/* Category Header with Lines */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="flex items-center gap-2 text-muted-foreground">
          <IconComponent className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium tracking-wide">{name}</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      
      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-3">
        {skillsList.map((skill, skillIndex) => (
          <SkillBadge
            key={skill}
            name={skill}
            delay={0.2 + index * 0.05 + skillIndex * 0.03}
            isVisible={isVisible}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 lg:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />

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
            AI & Machine Learning technologies I use to build intelligent solutions
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {skills.categories.map((category, index) => (
            <SkillCategory
              key={category.name}
              name={category.name}
              skillsList={category.skills}
              index={index}
              isVisible={isInView}
            />
          ))}
        </div>

        {/* Additional Tech Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["LangChain", "RAG", "Transformers", "YOLO", "Stable Diffusion", "ChatGPT API", "Prompt Engineering", "MLOps"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:border-primary/50 hover:bg-primary/20 transition-all cursor-default"
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
