import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string | number;
  unit?: string;
  color: "calories" | "protein" | "fat" | "carbs";
  index?: number;
}

const colorMap = {
  calories: "bg-stat-calories/10 border-stat-calories/20 text-stat-calories",
  protein: "bg-stat-protein/10 border-stat-protein/20 text-stat-protein",
  fat: "bg-stat-fat/10 border-stat-fat/20 text-stat-fat",
  carbs: "bg-stat-carbs/10 border-stat-carbs/20 text-stat-carbs",
};

const dotMap = {
  calories: "bg-stat-calories",
  protein: "bg-stat-protein",
  fat: "bg-stat-fat",
  carbs: "bg-stat-carbs",
};

const StatCard = ({ label, value, unit, color, index = 0 }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.08, duration: 0.4 }}
    className="glass-panel rounded-xl p-4 hover-lift"
  >
    <div className="flex items-center gap-2 mb-2">
      <div className={`h-2 w-2 rounded-full ${dotMap[color]}`} />
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</span>
    </div>
    <div className="flex items-baseline gap-1">
      <span className={`text-2xl font-display font-bold ${colorMap[color].split(' ').pop()}`}>{value}</span>
      {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
    </div>
  </motion.div>
);

export default StatCard;
