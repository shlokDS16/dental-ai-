import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { ArrowRight, Calendar } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-12 md:p-24 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Inner Beam */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] animate-[spin_10s_linear_infinite] opacity-30 pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent relative z-10">
            Ready to Scale Your Practice?
          </h2>
          
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto relative z-10">
            Join the future of dentistry. Automate your growth and focus on what matters most—your patients.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Button asChild size="lg" variant="glow" className="w-full sm:w-auto text-lg px-10 py-6 h-auto">
              <a href="#calculator">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="w-full sm:w-auto text-lg px-10 py-6 h-auto text-white/60 hover:text-white hover:bg-white/5">
              <a href="#calculator">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Demo
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
