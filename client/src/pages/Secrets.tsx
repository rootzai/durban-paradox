import { TreasureChestContent } from "@/components/TreasureChest";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookLayout } from "@/components/BookLayout";
import { Key, Lock, Search, Sparkles, Unlock } from "lucide-react";
import { useInventory } from "@/contexts/InventoryContext";
import { Link } from "wouter";

export default function Secrets() {
  const { collectedArtifacts } = useInventory();

  return (
    <BookLayout>
      <div className="space-y-8 animate-in fade-in duration-700">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary drop-shadow-sm">
            The Cabinet of Curiosities
          </h1>
          <p className="text-xl text-muted-foreground font-serif italic max-w-2xl mx-auto">
            "The universe is full of magical things patiently waiting for our wits to grow sharper."
          </p>
        </div>

        <Tabs defaultValue="inventory" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="inventory" className="font-heading">
              <Key className="w-4 h-4 mr-2" /> Inventory ({collectedArtifacts.length})
            </TabsTrigger>
            <TabsTrigger value="decoder" className="font-heading">
              <Search className="w-4 h-4 mr-2" /> Decoder Ring
            </TabsTrigger>
            <TabsTrigger value="achievements" className="font-heading">
              <Sparkles className="w-4 h-4 mr-2" /> Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inventory" className="space-y-6">
            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" /> Collected Artifacts
                </CardTitle>
                <CardDescription>
                  Items found during your journey through the chapters.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {collectedArtifacts.length === 0 ? (
                  <div className="min-h-[400px] flex items-center justify-center border-2 border-dashed border-primary/20 rounded-lg bg-background/50 p-8">
                    <div className="text-center space-y-4">
                      <p className="text-muted-foreground italic">
                        Your inventory is currently empty. Explore the chapters to find hidden items.
                      </p>
                      <TreasureChestContent />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collectedArtifacts.map((artifact) => (
                      <div key={artifact.id} className="group relative overflow-hidden rounded-lg border border-primary/20 bg-background/50 hover:shadow-xl transition-all duration-300">
                        <div className="aspect-square overflow-hidden bg-black/5">
                          <img 
                            src={artifact.imageSrc} 
                            alt={artifact.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-4 space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-heading font-bold text-lg truncate">{artifact.name}</h3>
                            <Unlock className="w-4 h-4 text-green-500" />
                          </div>
                          <p className="text-xs text-muted-foreground italic font-serif">
                            {artifact.description}
                          </p>
                          <div className="pt-2 flex justify-between items-center text-xs text-muted-foreground">
                            <span>Chapter {artifact.chapterFound}</span>
                            <span>{new Date(artifact.dateCollected).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="decoder" className="space-y-6">
            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">The IX Decoder</CardTitle>
                <CardDescription>
                  Translate binary smoke, frog code, and other cryptic messages.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-background/80 rounded-md border border-primary/10">
                    <h3 className="font-bold text-primary mb-2">Binary Smoke Signals</h3>
                    <p className="text-sm text-muted-foreground">
                      Enter the binary sequence (0s and 1s) found in the illustrations to reveal hidden messages.
                    </p>
                    {/* Decoder input will go here */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Path of Discovery</CardTitle>
                <CardDescription>
                  Milestones reached in your intellectual voyage.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Achievement placeholders */}
                  <div className="p-4 rounded-lg border border-primary/20 bg-background/50 opacity-50">
                    <h4 className="font-bold mb-1">The Boiling Frog</h4>
                    <p className="text-xs text-muted-foreground">Complete Chapter 1</p>
                  </div>
                  <div className="p-4 rounded-lg border border-primary/20 bg-background/50 opacity-50">
                    <h4 className="font-bold mb-1">The Green Equation</h4>
                    <p className="text-xs text-muted-foreground">Discover the secret of the leaf</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </BookLayout>
  );
}
