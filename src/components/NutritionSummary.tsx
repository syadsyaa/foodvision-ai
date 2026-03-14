import StatCard from "./StatCard";

interface NutritionSummaryProps {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

const NutritionSummary = ({ calories, protein, fat, carbs }: NutritionSummaryProps) => (
  <div>
    <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
      Nutrition Summary
    </h3>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <StatCard label="Calories" value={calories} unit="kcal" color="calories" index={0} />
      <StatCard label="Protein" value={protein} unit="g" color="protein" index={1} />
      <StatCard label="Fat" value={fat} unit="g" color="fat" index={2} />
      <StatCard label="Carbs" value={carbs} unit="g" color="carbs" index={3} />
    </div>
    <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1.5">
      <span className="inline-block h-1 w-1 rounded-full bg-muted-foreground" />
      Nutrition values are AI estimates and may vary.
    </p>
  </div>
);

export default NutritionSummary;
