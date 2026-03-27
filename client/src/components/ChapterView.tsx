import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Loader2, ChevronLeft, ChevronRight, X, ZoomIn, Lock, Unlock, Sparkles, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useInventory } from "@/contexts/InventoryContext";

interface ChapterViewProps {
  chapterNumber: number;
  title: string;
  content: string;
  prevChapter?: { number: number; title: string };
  nextChapter?: { number: number; title: string };
}

export function ChapterView({ chapterNumber, title, content, prevChapter, nextChapter }: ChapterViewProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt?: string } | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const { collectArtifact, isCollected } = useInventory();

  // Reset zoom when image changes
  useEffect(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [selectedImage]);

  const handleZoom = (delta: number) => {
    setZoomLevel(prev => Math.min(Math.max(1, prev + delta), 4));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCollect = () => {
    if (!selectedImage) return;
    
    // Generate a unique ID based on the image source
    const artifactId = selectedImage.src.split('/').pop()?.split('.')[0] || 'unknown';
    
    collectArtifact({
      id: artifactId,
      name: selectedImage.alt || "Unknown Artifact",
      description: `Discovered in Chapter ${chapterNumber}`,
      imageSrc: selectedImage.src,
      chapterFound: chapterNumber
    });
  };

  // Easter Egg: Six Seven
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '6') {
        const handleNextKey = (e2: KeyboardEvent) => {
          if (e2.key === '7') {
            toast.success("The Prophecy Fulfilled!", {
              description: "You have unlocked the secret of the Double Helix.",
              duration: 5000,
            });
            collectArtifact({
              id: 'six-seven-prophecy',
              name: "The Prophecy of Six Seven",
              description: "A sacred number destined to become a nonsense rhyme.",
              imageSrc: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030244666/KcSZPqt54GdjUXYoybyMfP/chapter1_monad_study-P68ge5oBj6EHoi84ma7hVc.webp", // Placeholder image
              chapterFound: 1
            });
          }
          window.removeEventListener('keydown', handleNextKey);
        };
        window.addEventListener('keydown', handleNextKey);
        // Remove listener after 2 seconds to reset sequence
        setTimeout(() => window.removeEventListener('keydown', handleNextKey), 2000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [collectArtifact]);

  const isCurrentArtifactCollected = selectedImage ? isCollected(selectedImage.src.split('/').pop()?.split('.')[0] || 'unknown') : false;

  return (
    <div className="animate-in fade-in duration-700 pb-20">
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 bg-black/95 border-primary/20 flex flex-col overflow-hidden">
           <VisuallyHidden.Root>
            <DialogTitle>Artifact Inspection</DialogTitle>
            <DialogDescription>
              {selectedImage?.alt || "Detailed view of the artifact"}
            </DialogDescription>
          </VisuallyHidden.Root>
          
          {/* Toolbar */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/50 backdrop-blur-md z-50">
            <div className="flex items-center gap-4">
              <h3 className="text-white font-heading text-lg truncate max-w-[120px] sm:max-w-[200px] md:max-w-md">
                {selectedImage?.alt || "Unknown Artifact"}
              </h3>
              {isCurrentArtifactCollected ? (
                <span className="flex items-center gap-1 text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
                  <Unlock className="w-3 h-3" /> COLLECTED
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs font-bold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full border border-yellow-400/20">
                  <Lock className="w-3 h-3" /> UNCOLLECTED
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-white/20 hover:bg-white/10"
                onClick={() => handleZoom(-0.5)}
                disabled={zoomLevel <= 1}
              >
                -
              </Button>
              <span className="text-white text-xs w-12 text-center">{Math.round(zoomLevel * 100)}%</span>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-white/20 hover:bg-white/10"
                onClick={() => handleZoom(0.5)}
                disabled={zoomLevel >= 4}
              >
                +
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 rounded-full ml-2"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Image Viewport */}
          <div 
            className="flex-1 relative overflow-hidden bg-neutral-900 flex items-center justify-center cursor-move"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {selectedImage && (
              <img
                ref={imageRef}
                src={selectedImage.src}
                alt={selectedImage.alt}
                style={{
                  transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                  transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
                className="select-none pointer-events-none"
              />
            )}
            
            {/* Overlay Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
              <Button 
                size="lg" 
                className={`font-heading tracking-wider shadow-xl transition-all duration-300 ${
                  isCurrentArtifactCollected 
                    ? "bg-green-600 hover:bg-green-700 text-white" 
                    : "bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse hover:animate-none"
                }`}
                onClick={handleCollect}
                disabled={isCurrentArtifactCollected}
              >
                {isCurrentArtifactCollected ? (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" /> Artifact Secured
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" /> Collect Artifact
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <header className="text-center space-y-4 mb-12 border-b border-border/50 pb-8">
        <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-heading tracking-widest uppercase mb-2">
          Chapter {chapterNumber}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
          {title}
        </h1>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full opacity-80"></div>
      </header>

      {/* Chapter Content */}
      <article className="prose prose-lg md:prose-xl prose-stone dark:prose-invert max-w-none font-body leading-relaxed">
        <ReactMarkdown
          components={{
            p: ({ children }) => {
              // Use div instead of p to avoid hydration errors when nesting block elements like figure
              return <div className="mb-6 leading-relaxed">{children}</div>;
            },
            a: (props) => {
              return <a {...props} className="text-primary underline hover:text-primary/80" />;
            },
            img: (props) => {
              const { src, alt } = props;
              if (!src) return null;
              
              // Ensure path starts with / if it's a local image
              const finalSrc = src.startsWith('images/') ? `/${src}` : src;
              const isChapterImage = finalSrc.startsWith('/images/');
              
              // Check if collected
              const artifactId = finalSrc.split('/').pop()?.split('.')[0] || 'unknown';
              const collected = isCollected(artifactId);
              
              return (
                <figure className="my-12 group cursor-pointer relative" onClick={() => setSelectedImage({ src: finalSrc, alt })}>
                  <div className={`relative overflow-hidden rounded-lg shadow-2xl border-4 border-double transition-all duration-300 ${collected ? 'border-green-500/50' : 'border-primary/20'} bg-black/5`}>
                    <img
                      src={finalSrc}
                      alt={alt}
                      className={`w-full h-auto transition-transform duration-700 group-hover:scale-105 ${isChapterImage ? 'chapter-image-thumbnail' : ''}`}
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Failed to load image: ${finalSrc}`);
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.classList.add('bg-red-100');
                          e.currentTarget.parentElement.innerHTML = `<span class="text-red-500 p-4 block text-center">Image not found: ${finalSrc}</span>`;
                        }
                      }}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                       <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex flex-col items-center gap-2">
                          <div className="bg-black/80 text-white px-6 py-3 rounded-full flex items-center gap-3 backdrop-blur-md border border-white/10 shadow-xl">
                            <Eye className="w-5 h-5 text-accent" />
                            <span className="font-heading tracking-wide text-sm uppercase">Inspect Artifact</span>
                          </div>
                          {collected && (
                            <span className="text-green-400 text-xs font-bold bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                              ✓ COLLECTED
                            </span>
                          )}
                       </div>
                    </div>
                  </div>
                  {/* Caption removed as per user request */}
                </figure>
              );
            },
          }}
        >
          {content || ""}
        </ReactMarkdown>
      </article>

      {/* Footer Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-border/50 mt-12">
        {prevChapter ? (
          <Link href={`/chapter/${prevChapter.number}`}>
            <div className="group flex flex-col items-start p-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card hover:shadow-md transition-all cursor-pointer text-left h-full">
              <span className="flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 group-hover:text-primary transition-colors">
                <ChevronLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" /> Previous Chapter
              </span>
              <span className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {prevChapter.title}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Link href={`/chapter/${nextChapter.number}`}>
            <div className="group flex flex-col items-end p-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card hover:shadow-md transition-all cursor-pointer text-right h-full">
              <span className="flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 group-hover:text-primary transition-colors">
                <ChevronLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" /> Next Chapter
              </span>
              <span className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {nextChapter.title}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
