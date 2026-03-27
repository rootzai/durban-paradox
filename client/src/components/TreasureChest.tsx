import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Lock, Unlock, Gem, Scroll, Leaf, Ruler } from "lucide-react";
import { toast } from "sonner";

interface Artifact {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  unlocked: boolean;
  clue: string;
}

export function TreasureChestContent() {
  const [artifacts, setArtifacts] = useState<Artifact[]>([
    {
      id: "tape_measure",
      name: "The Eighth Earl's Tape Measure",
      description: "A measuring tape that loops infinitely. Useful for measuring things that don't exist.",
      icon: <Ruler className="h-6 w-6 text-amber-500" />,
      unlocked: false,
      clue: "Find the loop in the portrait of the Earl.",
    },
    {
      id: "friction_stone",
      name: "The Friction Stone",
      description: "A smooth stone that removes all difficulty. Warning: May cause existential boredom.",
      icon: <Gem className="h-6 w-6 text-purple-500" />,
      unlocked: false,
      clue: "Look for the stone that giggles in the fire.",
    },
    {
      id: "green_leaf",
      name: "The Green Leaf",
      description: "A leaf that lets you see the code of the universe. Use responsibly.",
      icon: <Leaf className="h-6 w-6 text-green-500" />,
      unlocked: false,
      clue: "Find the binary smoke in the desert.",
    },
    {
      id: "recursive_shell",
      name: "The Recursive Shell",
      description: "A shell that contains the ocean, which contains the shell.",
      icon: <Scroll className="h-6 w-6 text-blue-500" />,
      unlocked: false,
      clue: "Find the letters G-E-B in the storm.",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  // Simulating unlocking logic (in a real app, this would be triggered by specific interactions)
  const unlockArtifact = (id: string) => {
    setArtifacts((prev) =>
      prev.map((art) =>
        art.id === id ? { ...art, unlocked: true } : art
      )
    );
    toast.success("New Artifact Discovered!", {
      description: `You found ${artifacts.find((a) => a.id === id)?.name}`,
    });
  };

  // Cheat code for testing: Click the logo 5 times to unlock all
  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    if (clickCount >= 5) {
      artifacts.forEach((a) => unlockArtifact(a.id));
      setClickCount(0);
    }
  }, [clickCount]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {artifacts.map((artifact) => (
        <div
          key={artifact.id}
          className={`p-4 rounded-lg border-2 ${
            artifact.unlocked
              ? "border-amber-500/50 bg-amber-900/20"
              : "border-gray-700 bg-gray-900/50 opacity-50"
          } transition-all duration-300`}
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-black/30">
              {artifact.unlocked ? artifact.icon : <Lock className="h-6 w-6 text-gray-500" />}
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-amber-200">
                {artifact.unlocked ? artifact.name : "???"}
              </h3>
              <p className="text-sm text-amber-100/70 mt-1">
                {artifact.unlocked ? artifact.description : artifact.clue}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
