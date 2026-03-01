import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { Brain } from "lucide-react";

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-sky-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            DentAI
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#how-it-works" className="hover:text-white transition-colors">Features</a>
          <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
          <a href="#calculator" className="hover:text-white transition-colors">ROI Calculator</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-white/60 hover:text-white" onClick={() => alert('Client portal login coming soon!')}>
            Log in
          </Button>
          <Button asChild variant="glow" size="sm" className="bg-white/10 hover:bg-white/20 border-white/10">
            <a href="#calculator">Get Started</a>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};
