import { motion } from "motion/react";
import { FeatureCard } from "@/src/components/FeatureCard";
import { Target, MessageSquare, CalendarCheck, ShieldAlert, Database, LineChart } from "lucide-react";

const features = [
  {
    title: "Hyper-Targeted Campaigns",
    description: "We don't just run ads. We use AI to identify and target local patients actively searching for high-ticket procedures like implants and veneers.",
    icon: Target,
  },
  {
    title: "24/7 AI Lead Nurturing",
    description: "When a lead comes in, our AI assistant engages them within 30 seconds via SMS, answering questions and qualifying them automatically.",
    icon: MessageSquare,
  },
  {
    title: "Direct Calendar Booking",
    description: "Qualified patients are booked directly into your PMS (Dentrix, Eaglesoft, OpenDental). You just show up and do the dentistry.",
    icon: CalendarCheck,
  },
  {
    title: "No-Show Elimination",
    description: "Our system automatically collects deposits and sends strategic reminders, dropping your no-show rate to near zero.",
    icon: ShieldAlert,
  },
  {
    title: "Database Reactivation",
    description: "We mine your existing patient database to reactivate dormant patients and fill immediate holes in your schedule.",
    icon: Database,
  },
  {
    title: "Transparent ROI Tracking",
    description: "Know exactly how much revenue every marketing dollar generates with our real-time, easy-to-read analytics dashboard.",
    icon: LineChart,
  },
];

export const ValueProps = () => {
  return (
    <section id="how-it-works" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent"
          >
            How We Work In The Background
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/60 leading-relaxed"
          >
            You didn't go to dental school to become a marketer. While you and your team focus on providing exceptional patient care, our proprietary AI infrastructure works silently in the background. We capture attention, nurture curiosity into commitment, and place financially qualified patients directly into your chair.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
