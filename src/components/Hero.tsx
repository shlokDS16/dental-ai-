import { motion } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { ParticleField } from "@/src/components/ui/ParticleField";
import { GridBackground } from "@/src/components/ui/GridBackground";
import { Sparkles, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Dental Clinic Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        
        {/* Soft Animated Gradient */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),rgba(0,0,0,0))]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Light Field / Beam Texture */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-40 blur-3xl pointer-events-none"
          style={{
            backgroundImage: `
              conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%),
              radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)
            `
          }}
        />
        
        <GridBackground />
        <ParticleField count={30} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex-1 flex flex-col justify-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-sky-400 mr-2 animate-pulse"></span>
            Guaranteed Patient Acquisition System
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent max-w-5xl mx-auto">
            We'll Get You 20 New High-Value Patients In 30 Days, <br />
            <span className="text-sky-400/90">Or You Pay $0.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
            Frustrated by empty chairs despite working 60-hour weeks? Stop relying on unpredictable referrals and outdated marketing. We install a predictable, AI-driven system that runs in the background to fill your calendar with Implant and Invisalign cases.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="glow" className="w-full sm:w-auto text-base px-8 h-12">
              <a href="#calculator">
                Claim Your Area Now
                <Sparkles className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 h-12 border-white/10 bg-white/5 hover:bg-white/10 text-white">
              <a href="#how-it-works">
                See How It Works
                <ChevronDown className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Credibility Logos */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative z-10 w-full border-t border-white/5 bg-white/[0.02] backdrop-blur-sm py-8 mt-12"
      >
        <p className="text-center text-sm text-white/40 mb-6 uppercase tracking-widest font-semibold">Trusted by practices partnered with</p>
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
          <div className="text-xl font-bold font-sans tracking-tighter">Invisalign</div>
          <div className="text-xl font-serif italic">Straumann</div>
          <div className="text-xl font-bold tracking-widest">ZOOM!</div>
          <div className="text-xl font-medium tracking-tight">ClearCorrect</div>
          <div className="text-xl font-bold flex items-center gap-1">ADA <span className="font-light text-xs tracking-normal">Approved Tech</span></div>
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};
