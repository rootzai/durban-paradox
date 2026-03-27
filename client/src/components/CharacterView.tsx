import { motion } from "framer-motion";
import { Streamdown } from "streamdown";

interface CharacterViewProps {
  name: string;
  role: string;
  content: string;
  imagePrompt?: string; // Placeholder for future image generation
}

export function CharacterView({ name, role, content }: CharacterViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="relative mb-12 rounded-xl overflow-hidden bg-card border border-border shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 z-10"></div>
        <div className="h-64 md:h-80 bg-muted flex items-center justify-center relative overflow-hidden">
            {/* Placeholder for character portrait - using a subtle pattern for now */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <h1 className="text-9xl font-heading text-primary/10 absolute select-none">{name.charAt(0)}</h1>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
          <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase mb-3 shadow-sm">
            {role}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground drop-shadow-sm">
            {name}
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-12">
          <article className="prose prose-lg prose-stone dark:prose-invert max-w-none font-body bg-card/50 p-8 rounded-xl border border-border/50 shadow-sm">
             <Streamdown>{content}</Streamdown>
          </article>
        </div>
      </div>
    </motion.div>
  );
}
