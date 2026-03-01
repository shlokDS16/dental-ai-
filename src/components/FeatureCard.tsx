import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/Card";
import { LucideIcon } from "lucide-react";
import { MouseEvent } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Card 
      className="relative overflow-hidden group border-white/5 bg-white/5 hover:border-sky-500/50 transition-colors duration-500"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors duration-300">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl text-white group-hover:text-sky-100 transition-colors">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <CardDescription className="text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
      
      {/* Border Beam Effect */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 group-hover:ring-sky-500/30 transition-all duration-500" />
    </Card>
  );
};
