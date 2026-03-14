import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, FileText, Hash, Image as ImageIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import FoodResultCard from "@/components/FoodResultCard";
import NutritionSummary from "@/components/NutritionSummary";
import LabelBadge from "@/components/LabelBadge";
import { Button } from "@/components/ui/button";
import { mockScans } from "@/lib/mock-data";

const ScanDetailPage = () => {
  const { id } = useParams();
  const scan = mockScans.find((s) => s.id === id) ?? mockScans[0];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button asChild variant="ghost" size="sm" className="gap-1.5 mb-6 -ml-2">
            <Link to="/history">
              <ArrowLeft className="h-4 w-4" /> Back to History
            </Link>
          </Button>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            {/* Image Preview */}
            <div className="glass-panel rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <ImageIcon className="h-16 w-16" />
                <span className="text-sm">{scan.imageName}</span>
              </div>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Hash, label: "Scan ID", value: scan.id },
                { icon: FileText, label: "Image Name", value: scan.imageName },
                { icon: Calendar, label: "Scan Date", value: new Date(scan.scanDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) },
                { icon: ImageIcon, label: "Foods Found", value: `${scan.foods.length} items` },
              ].map((meta) => (
                <div key={meta.label} className="glass-panel rounded-xl p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <meta.icon className="h-3 w-3 text-muted-foreground" />
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{meta.label}</span>
                  </div>
                  <p className="text-sm font-medium truncate">{meta.value}</p>
                </div>
              ))}
            </div>

            {/* Labels */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Detected Labels</h3>
              <div className="flex flex-wrap gap-2">
                {scan.labels.map((l, i) => <LabelBadge key={l} label={l} index={i} />)}
              </div>
            </div>

            {/* Foods */}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Detected Foods</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {scan.foods.map((f, i) => <FoodResultCard key={f.name} food={f} index={i} />)}
              </div>
            </div>

            {/* Nutrition */}
            <NutritionSummary
              calories={scan.totalCalories}
              protein={scan.totalProtein}
              fat={scan.totalFat}
              carbs={scan.totalCarbs}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ScanDetailPage;
