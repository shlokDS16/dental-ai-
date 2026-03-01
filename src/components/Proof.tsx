import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/src/components/ui/Card";
import { Quote } from "lucide-react";

const caseStudies = [
  {
    clinic: "Premier Smiles",
    result: "+$85,000",
    metric: "in New Implant Revenue",
    timeframe: "in 45 Days",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  },
  {
    clinic: "Advanced Dental Care",
    result: "42",
    metric: "New Invisalign Starts",
    timeframe: "in 60 Days",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
  }
];

const testimonials = [
  {
    quote: "I was skeptical about another 'marketing agency'. But DentAI actually delivered. They filled our schedule with high-ticket cases, and their AI follow-up meant my front desk didn't have to lift a finger.",
    author: "Dr. Sarah Mitchell",
    role: "Owner, Mitchell Dental",
    image: "https://picsum.photos/seed/dentist1/100/100",
  },
  {
    quote: "The guarantee made it a no-brainer. Within 3 weeks, we had 18 new patients booked and deposits paid. The system works completely in the background.",
    author: "Dr. James Chen",
    role: "Lead Dentist, Chen Orthodontics",
    image: "https://picsum.photos/seed/dentist2/100/100",
  },
  {
    quote: "We were struggling to get implant patients. DentAI's targeted approach brought us patients who were actually ready to move forward with treatment.",
    author: "Dr. Emily Rodriguez",
    role: "Partner, Rodriguez & Associates",
    image: "https://picsum.photos/seed/dentist3/100/100",
  },
];

export const Proof = () => {
  return (
    <section id="case-studies" className="py-24 bg-black relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ y: -50 }}
        animate={{ y: 50 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Case Studies Section */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent"
            >
              The Numbers Speak For Themselves
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/60"
            >
              Real results from practices that stopped guessing and started scaling.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-500" />
                  <img 
                    src={study.image} 
                    alt={study.clinic} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="inline-flex items-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 text-sm text-white">
                      {study.clinic}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-sky-400">{study.result}</span>
                    <span className="text-xl text-white/80">{study.metric}</span>
                  </div>
                  <p className="text-white/50 font-medium">{study.timeframe}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent"
          >
            Trusted by Top Practices
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-white/5 border-white/10 hover:border-white/20 transition-colors h-full flex flex-col justify-between">
                <CardHeader>
                  <Quote className="h-8 w-8 text-sky-400 mb-4 opacity-50" />
                  <CardDescription className="text-lg text-white/80 italic leading-relaxed">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center gap-4 pt-6 mt-auto border-t border-white/5">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <CardTitle className="text-base font-medium text-white">{testimonial.author}</CardTitle>
                    <p className="text-sm text-white/40">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
