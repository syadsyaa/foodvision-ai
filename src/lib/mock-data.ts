export interface DetectedFood {
  name: string;
  matchedName: string;
  portionGrams: number;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export interface ScanResult {
  id: string;
  imageName: string;
  imageUrl: string;
  labels: string[];
  foods: DetectedFood[];
  totalCalories: number;
  totalProtein: number;
  totalFat: number;
  totalCarbs: number;
  scanDate: string;
}

export const mockFoods: DetectedFood[] = [
  { name: "Grilled Chicken", matchedName: "Chicken Breast, Grilled", portionGrams: 150, calories: 248, protein: 46, fat: 5, carbs: 0 },
  { name: "White Rice", matchedName: "Rice, White, Cooked", portionGrams: 200, calories: 260, protein: 5, fat: 0.4, carbs: 57 },
  { name: "Fried Egg", matchedName: "Egg, Fried", portionGrams: 46, calories: 90, protein: 6, fat: 7, carbs: 0.4 },
  { name: "Cucumber", matchedName: "Cucumber, Raw, Sliced", portionGrams: 80, calories: 12, protein: 0.5, fat: 0.1, carbs: 2.6 },
  { name: "Tofu", matchedName: "Tofu, Firm", portionGrams: 100, calories: 76, protein: 8, fat: 4.8, carbs: 1.9 },
];

export const mockLabels = ["Food", "Meal", "Rice", "Chicken", "Protein", "Asian Cuisine", "Healthy", "Plate"];

export const mockScans: ScanResult[] = [
  {
    id: "scan-001",
    imageName: "lunch_plate.jpg",
    imageUrl: "",
    labels: mockLabels,
    foods: mockFoods,
    totalCalories: 520,
    totalProtein: 35,
    totalFat: 18,
    totalCarbs: 60,
    scanDate: "2026-03-14T10:30:00Z",
  },
  {
    id: "scan-002",
    imageName: "breakfast_bowl.jpg",
    imageUrl: "",
    labels: ["Food", "Breakfast", "Oatmeal", "Fruit", "Healthy"],
    foods: [
      { name: "Oatmeal", matchedName: "Oats, Cooked", portionGrams: 250, calories: 158, protein: 6, fat: 3, carbs: 27 },
      { name: "Banana", matchedName: "Banana, Raw", portionGrams: 120, calories: 107, protein: 1.3, fat: 0.4, carbs: 27 },
      { name: "Blueberries", matchedName: "Blueberries, Raw", portionGrams: 50, calories: 29, protein: 0.4, fat: 0.2, carbs: 7 },
    ],
    totalCalories: 294,
    totalProtein: 7.7,
    totalFat: 3.6,
    totalCarbs: 61,
    scanDate: "2026-03-13T08:15:00Z",
  },
  {
    id: "scan-003",
    imageName: "dinner_steak.jpg",
    imageUrl: "",
    labels: ["Food", "Steak", "Dinner", "Protein", "Vegetables"],
    foods: [
      { name: "Ribeye Steak", matchedName: "Beef, Ribeye, Grilled", portionGrams: 200, calories: 544, protein: 48, fat: 38, carbs: 0 },
      { name: "Broccoli", matchedName: "Broccoli, Steamed", portionGrams: 100, calories: 35, protein: 2.4, fat: 0.4, carbs: 7 },
      { name: "Mashed Potatoes", matchedName: "Potatoes, Mashed", portionGrams: 150, calories: 174, protein: 3, fat: 7, carbs: 24 },
    ],
    totalCalories: 753,
    totalProtein: 53.4,
    totalFat: 45.4,
    totalCarbs: 31,
    scanDate: "2026-03-12T19:45:00Z",
  },
];
