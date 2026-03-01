import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/src/components/ui/Button";
import { Calculator, ArrowRight, DollarSign, PhoneCall } from "lucide-react";

export const ROIQuestionnaire = () => {
  const [step, setStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    leadValue: "",
    subscribers: "",
    emailsPerWeek: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateLoss = () => {
    setIsCalculating(true);
    
    // Simulate API call / calculation time
    setTimeout(() => {
      const subs = parseInt(formData.subscribers) || 0;
      const value = parseInt(formData.leadValue) || 0;
      const emails = parseInt(formData.emailsPerWeek) || 0;
      
      // Simple formula: Assume a healthy list converts 2% of subscribers per month if emailed 4x/month.
      // If they email less, they lose that potential.
      const potentialMonthlyConversions = subs * 0.02;
      const actualConversions = subs * (emails / 4) * 0.005; // Punish low frequency
      
      let lost = (potentialMonthlyConversions - actualConversions) * value;
      if (lost < 0) lost = 0;
      if (subs > 0 && emails === 0) lost = potentialMonthlyConversions * value;
      
      setResult(Math.round(lost));
      setIsCalculating(false);
      setStep(3);
    }, 1500);
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      calculateLoss();
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5" id="calculator">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sm text-sky-400 backdrop-blur-md mb-6">
              <Calculator className="w-4 h-4 mr-2" />
              Free Revenue Analysis
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
              How Much Money Are You Leaving On The Table?
            </h2>
            <p className="text-lg text-white/60">
              Find out exactly how much hidden revenue you're losing every month by not having an automated email reactivation system installed.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
            {/* Inner Beam */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] animate-[spin_15s_linear_infinite] opacity-50 pointer-events-none" />
            
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.form 
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={nextStep}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-6">Step 1: Contact Details</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm text-white/60">Full Name</label>
                          <input 
                            required
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
                            placeholder="Dr. John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-white/60">Phone Number</label>
                          <input 
                            required
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-white/60">Email Address</label>
                        <input 
                          required
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
                          placeholder="doctor@clinic.com"
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" variant="glow" className="w-full h-12 mt-8">
                      Continue to Practice Metrics <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.form>
                )}

                {step === 2 && (
                  <motion.form 
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={nextStep}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white mb-6">Step 2: Practice Metrics</h3>
                      
                      <div className="space-y-2">
                        <label className="text-sm text-white/60">Average Value Per Lead / New Patient ($)</label>
                        <div className="relative">
                          <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                          <input 
                            required
                            type="number" 
                            name="leadValue"
                            value={formData.leadValue}
                            onChange={handleInputChange}
                            className="w-full bg-black/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
                            placeholder="e.g. 1500"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm text-white/60">Total Email Subscribers</label>
                          <input 
                            required
                            type="number" 
                            name="subscribers"
                            value={formData.subscribers}
                            onChange={handleInputChange}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
                            placeholder="e.g. 2500"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-white/60">Emails Sent Per Week</label>
                          <input 
                            required
                            type="number" 
                            name="emailsPerWeek"
                            value={formData.emailsPerWeek}
                            onChange={handleInputChange}
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
                            placeholder="e.g. 0"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mt-8">
                      <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-1/3 h-12 bg-transparent border-white/10 text-white hover:bg-white/5">
                        Back
                      </Button>
                      <Button type="submit" variant="glow" className="w-2/3 h-12" disabled={isCalculating}>
                        {isCalculating ? "Analyzing Data..." : "Calculate Lost Revenue"}
                      </Button>
                    </div>
                  </motion.form>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="mb-6">
                      <p className="text-white/60 text-lg mb-2">Estimated Monthly Lost Revenue</p>
                      <h3 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-600 tracking-tighter">
                        ${result?.toLocaleString()}
                      </h3>
                    </div>
                    
                    <p className="text-white/80 max-w-lg mx-auto mb-10 leading-relaxed">
                      Based on your metrics, you are losing approximately <strong className="text-white">${result?.toLocaleString()} every single month</strong> by not consistently nurturing your existing patient list with automated email systems.
                    </p>
                    
                    <div className="p-6 rounded-xl bg-sky-500/10 border border-sky-500/20 mb-8">
                      <h4 className="text-sky-400 font-semibold mb-2">The Good News</h4>
                      <p className="text-sm text-white/70">
                        This is low-hanging fruit. We can install our automated reactivation system into your practice in less than 48 hours and start recovering this revenue immediately.
                      </p>
                    </div>
                    
                    <Button asChild variant="glow" className="w-full sm:w-auto px-10 h-14 text-lg">
                      <a href="mailto:hello@dentai.com?subject=I want to stop losing money">
                        <PhoneCall className="w-5 h-5 mr-2" />
                        Stop Losing Money - Book A Call
                      </a>
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
