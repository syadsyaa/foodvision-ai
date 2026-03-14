import { motion } from "framer-motion";
import type { DetectedFood } from "@/lib/mock-data";

interface FoodResultCardProps {
  food: DetectedFood;
  index?: number;
}

const FoodResultCard = ({ food, index = 0 }: FoodResultCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: 12 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.08, duration: 0.4 }}
    className="glass-panel rounded-xl p-4 hover-lift"
  >
    <div className="flex items-start justify-between mb-3">
      <div>
        <h4 className="font-display font-semibold text-sm">{food.name}</h4>
        <p className="text-xs text-muted-foreground mt-0.5">{food.matchedName}</p>
      </div>
      <span className="text-xs text-muted-foreground bg-accent px-2 py-1 rounded-md">{food.portionGrams}g</span>
    </div>
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: "Cal", value: food.calories, color: "text-stat-calories" },
        { label: "Pro", value: `${food.protein}g`, color: "text-stat-protein" },
        { label: "Fat", value: `${food.fat}g`, color: "text-stat-fat" },
        { label: "Carb", value: `${food.carbs}g`, color: "text-stat-carbs" },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <p className={`text-sm font-semibold ${item.color}`}>{item.value}</p>
          <p className="text-[10px] text-muted-foreground uppercase">{item.label}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default FoodResultCard;
