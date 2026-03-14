import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, Upload, Brain, BarChart3, Clock, PieChart, Scan } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import FoodResultCard from "@/components/FoodResultCard";
import LabelBadge from "@/components/LabelBadge";
import { mockFoods, mockLabels } from "@/lib/mock-data";
import heroImage from "@/assets/hero-food-scan.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-medium text-primary mb-6">
              <Sparkles className="h-3 w-3" />
              AI-Powered Nutrition Analysis
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6"
            >
              Understand Your Food{" "}
              <span className="gradient-text-primary">Instantly</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed"
            >
              Upload a photo of your meal and get an instant AI-powered nutrition estimate.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="gap-2 px-6">
                <Link to="/scan">
                  <Scan className="h-4 w-4" />
                  Try Food Scanner
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 px-6">
                <a href="#demo">
                  <Play className="h-4 w-4" />
                  View Demo
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden border border-border/50 glow-border"
          >
            <img src={heroImage} alt="Nutrisi AI analyzing a food plate" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">How It Works</h2>
            <p className="text-muted-foreground">Three simple steps to understand your nutrition</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", icon: Upload, title: "Upload a food image", desc: "Drag and drop or select a photo of your meal" },
              { step: "02", icon: Brain, title: "AI detects ingredients", desc: "Our model identifies each food item on the plate" },
              { step: "03", icon: BarChart3, title: "Nutrition estimate generated", desc: "Get a detailed breakdown of calories & macros" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-panel rounded-2xl p-6 hover-lift text-center"
              >
                <span className="text-xs font-mono text-primary font-semibold">{item.step}</span>
                <div className="h-12 w-12 rounded-xl bg-accent border border-border flex items-center justify-center mx-auto my-4">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Features</h2>
            <p className="text-muted-foreground">Everything you need to track your nutrition</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Brain, title: "AI Food Detection", desc: "Advanced computer vision identifies food items from any angle" },
              { icon: BarChart3, title: "Nutrition Estimation", desc: "Instant calorie & macro breakdown for each detected food" },
              { icon: Clock, title: "Scan History Tracking", desc: "Keep a complete log of all your scanned meals over time" },
              { icon: PieChart, title: "Visual Nutrition Breakdown", desc: "Beautiful charts and cards for easy nutritional understanding" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-xl p-5 hover-lift flex gap-4"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section id="demo" className="py-20 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">See It in Action</h2>
            <p className="text-muted-foreground">Real-time food analysis results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Detected Labels</h3>
              <div className="flex flex-wrap gap-2">
                {mockLabels.map((l, i) => <LabelBadge key={l} label={l} index={i} />)}
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mt-6 mb-3">Food Items</h3>
              <div className="space-y-2">
                {mockFoods.slice(0, 3).map((f, i) => <FoodResultCard key={f.name} food={f} index={i} />)}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Nutrition Summary</h3>
              <div className="grid grid-cols-2 gap-3">
                <StatCard label="Calories" value={520} unit="kcal" color="calories" index={0} />
                <StatCard label="Protein" value={35} unit="g" color="protein" index={1} />
                <StatCard label="Fat" value={18} unit="g" color="fat" index={2} />
                <StatCard label="Carbs" value={60} unit="g" color="carbs" index={3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to scan your food?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start analyzing your meals with AI-powered nutrition estimates.
            </p>
            <Button asChild size="lg" className="gap-2 px-8">
              <Link to="/scan">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
