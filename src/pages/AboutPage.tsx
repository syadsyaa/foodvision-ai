import { motion } from "framer-motion";
import { Leaf, Brain, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="pt-24 pb-16 px-4 flex-1">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-medium text-primary mb-6">
            <Leaf className="h-3 w-3" />
            About Nutrisi AI
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Making nutrition <span className="gradient-text-primary">accessible</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We believe understanding what you eat shouldn't require a degree in nutrition science. Our AI-powered scanner makes it effortless.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Brain, title: "AI-First", desc: "Built on state-of-the-art computer vision models" },
            { icon: Zap, title: "Instant", desc: "Get nutrition data in seconds, not minutes" },
            { icon: Shield, title: "Private", desc: "Your food images are never stored or shared" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-panel rounded-xl p-5 text-center hover-lift"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default AboutPage;
