import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface EmptyStateCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const EmptyStateCard = ({ icon: Icon, title, description }: EmptyStateCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center justify-center py-20 text-center"
  >
    <div className="h-16 w-16 rounded-2xl bg-accent border border-border flex items-center justify-center mb-4">
      <Icon className="h-7 w-7 text-muted-foreground" />
    </div>
    <h3 className="font-display font-semibold mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground max-w-xs">{description}</p>
  </motion.div>
);

export default EmptyStateCard;
