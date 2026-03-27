import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

export interface Artifact {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  dateCollected: number;
  chapterFound: number;
}

interface InventoryContextType {
  collectedArtifacts: Artifact[];
  collectArtifact: (artifact: Omit<Artifact, 'dateCollected'>) => void;
  isCollected: (id: string) => boolean;
  totalArtifacts: number;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export function InventoryProvider({ children }: { children: React.ReactNode }) {
  const [collectedArtifacts, setCollectedArtifacts] = useState<Artifact[]>(() => {
    const saved = localStorage.getItem('durban_inventory');
    return saved ? JSON.parse(saved) : [
      {
        id: "jonatins-journal",
        name: "Jonatin's Journal",
        description: "The private writings of the Eighth Earl, detailing the 1439 Weights and Measures Act.",
        imageSrc: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030244666/KcSZPqt54GdjUXYoybyMfP/chapter1_journal_smoke-4yW6cLMUP8466GKGS7RYsy.webp",
        chapterFound: 1,
        dateCollected: Date.now()
      },
      {
        id: "glassworthy-seal",
        name: "The Glassworthy Seal",
        description: "A wax seal featuring the 'Contest of Numbers' monogram. J, C, and G wrestle for dominance over the VIII.",
        imageSrc: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030244666/KcSZPqt54GdjUXYoybyMfP/artifact_glassworthy_seal-n4LiF44YoVnuXUdDakJnck.webp",
        chapterFound: 1,
        dateCollected: Date.now()
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('durban_inventory', JSON.stringify(collectedArtifacts));
  }, [collectedArtifacts]);

  const collectArtifact = (artifact: Omit<Artifact, 'dateCollected'>) => {
    if (collectedArtifacts.some(a => a.id === artifact.id)) {
      toast.info("Already Collected", {
        description: `You have already collected ${artifact.name}.`
      });
      return;
    }

    const newArtifact = {
      ...artifact,
      dateCollected: Date.now()
    };

    setCollectedArtifacts(prev => [...prev, newArtifact]);
    
    toast.success("Artifact Collected!", {
      description: `${artifact.name} has been added to your Cabinet of Curiosities.`
    });
  };

  const isCollected = (id: string) => {
    return collectedArtifacts.some(a => a.id === id);
  };

  return (
    <InventoryContext.Provider value={{
      collectedArtifacts,
      collectArtifact,
      isCollected,
      totalArtifacts: collectedArtifacts.length
    }}>
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory() {
  const context = useContext(InventoryContext);
  if (context === undefined) {
    throw new Error('useInventory must be used within an InventoryProvider');
  }
  return context;
}
