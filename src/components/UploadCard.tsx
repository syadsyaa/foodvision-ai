import { useState, useCallback } from "react";
import { Upload, Image as ImageIcon, Loader2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

type UploadState = "empty" | "preview" | "loading";

interface UploadCardProps {
  onAnalyze?: () => void;
}

const UploadCard = ({ onAnalyze }: UploadCardProps) => {
  const [state, setState] = useState<UploadState>("empty");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFile = useCallback((file: File) => {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setState("preview");
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file?.type.startsWith("image/")) handleFile(file);
  }, [handleFile]);

  const handleSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const handleAnalyze = () => {
    setState("loading");
    setTimeout(() => {
      onAnalyze?.();
    }, 2000);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 h-full">
      <div className="flex items-center gap-2 mb-5">
        <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Upload className="h-4 w-4 text-primary" />
        </div>
        <h2 className="font-display font-semibold">Upload Food Image</h2>
      </div>

      <AnimatePresence mode="wait">
        {state === "empty" && (
          <motion.label
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-border/60 hover:border-primary/40 p-12 cursor-pointer transition-colors group"
          >
            <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <ImageIcon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium">Drop your food image here</p>
              <p className="text-xs text-muted-foreground mt-1">or click to browse · JPG, PNG, WebP</p>
            </div>
            <input type="file" accept="image/*" className="hidden" onChange={handleSelect} />
          </motion.label>
        )}

        {state === "preview" && previewUrl && (
          <motion.div
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="rounded-xl overflow-hidden border border-border bg-accent aspect-[4/3]">
              <img src={previewUrl} alt="Food preview" className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleAnalyze}
                className="flex-1 gap-2"
              >
                <Sparkles className="h-4 w-4" />
                Analyze Food
              </Button>
              <Button
                variant="outline"
                onClick={() => { setState("empty"); setPreviewUrl(null); }}
              >
                Clear
              </Button>
            </div>
          </motion.div>
        )}

        {state === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center gap-4 py-16"
          >
            <div className="relative">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
              <div className="absolute inset-0 h-8 w-8 rounded-full bg-primary/20 animate-ping" />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium">Analyzing your food...</p>
              <p className="text-xs text-muted-foreground mt-1">AI is detecting ingredients</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UploadCard;
