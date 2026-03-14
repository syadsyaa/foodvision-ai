import { motion } from "framer-motion";

interface LabelBadgeProps {
  label: string;
  index?: number;
}

const LabelBadge = ({ label, index = 0 }: LabelBadgeProps) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    className="inline-flex items-center rounded-md bg-primary/10 border border-primary/20 px-2.5 py-1 text-xs font-medium text-primary"
  >
    {label}
  </motion.span>
);

export default LabelBadge;
