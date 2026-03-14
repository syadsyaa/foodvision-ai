import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Clock, Image as ImageIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import EmptyStateCard from "@/components/EmptyStateCard";
import { Button } from "@/components/ui/button";
import { mockScans } from "@/lib/mock-data";

const HistoryPage = () => {
  const navigate = useNavigate();
  const scans = mockScans;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-display font-bold">Scan History</h1>
            <p className="text-sm text-muted-foreground mt-1">View all your past food scans</p>
          </div>

          {scans.length === 0 ? (
            <EmptyStateCard
              icon={Clock}
              title="No scans yet"
              description="Upload your first food image to see it here."
            />
          ) : (
            <div className="glass-panel rounded-2xl overflow-hidden">
              {/* Table Header */}
              <div className="hidden md:grid grid-cols-[auto_1fr_120px_160px_80px] gap-4 px-5 py-3 border-b border-border/50 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <span className="w-12">Image</span>
                <span>Filename</span>
                <span className="text-right">Calories</span>
                <span className="text-right">Scan Date</span>
                <span />
              </div>

              {/* Rows */}
              {scans.map((scan, i) => (
                <motion.div
                  key={scan.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => navigate(`/history/${scan.id}`)}
                  className="grid grid-cols-1 md:grid-cols-[auto_1fr_120px_160px_80px] gap-4 px-5 py-4 items-center border-b border-border/30 last:border-0 hover:bg-accent/50 cursor-pointer transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent border border-border flex items-center justify-center shrink-0">
                    <ImageIcon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{scan.imageName}</p>
                    <p className="text-xs text-muted-foreground md:hidden mt-0.5">
                      {scan.totalCalories} kcal · {new Date(scan.scanDate).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="hidden md:block text-sm text-right text-stat-calories font-semibold">
                    {scan.totalCalories} kcal
                  </span>
                  <span className="hidden md:block text-sm text-right text-muted-foreground">
                    {new Date(scan.scanDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <div className="hidden md:flex justify-end">
                    <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
                      <Eye className="h-3.5 w-3.5" />
                      View
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HistoryPage;
