import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import UploadCard from "@/components/UploadCard";
import FoodResultCard from "@/components/FoodResultCard";
import NutritionSummary from "@/components/NutritionSummary";
import LabelBadge from "@/components/LabelBadge";
import EmptyStateCard from "@/components/EmptyStateCard";
import { Scan as ScanIcon } from "lucide-react";
import { mockFoods, mockLabels } from "@/lib/mock-data";

const ScannerPage = () => {
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-display font-bold">Food Scanner</h1>
            <p className="text-sm text-muted-foreground mt-1">Upload a food image to get an AI nutrition estimate</p>
          </div>

          <div className="grid lg:grid-cols-[400px_1fr] gap-6">
            {/* Left — Upload */}
            <div>
              <UploadCard onAnalyze={() => setShowResults(true)} />
            </div>

            {/* Right — Results */}
            <div className="space-y-6">
              <AnimatePresence mode="wait">
                {!showResults ? (
                  <EmptyStateCard
                    key="empty"
                    icon={ScanIcon}
                    title="No results yet"
                    description="Upload a food image and click Analyze to see nutrition results."
                  />
                ) : (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    {/* Labels */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Detected Labels</h3>
                      <div className="flex flex-wrap gap-2">
                        {mockLabels.map((l, i) => <LabelBadge key={l} label={l} index={i} />)}
                      </div>
                    </div>

                    {/* Foods */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Detected Foods</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {mockFoods.map((f, i) => <FoodResultCard key={f.name} food={f} index={i} />)}
                      </div>
                    </div>

                    {/* Summary */}
                    <NutritionSummary calories={520} protein={35} fat={18} carbs={60} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScannerPage;
