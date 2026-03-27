import { cn } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { BookOpen, Feather, Map, Menu, X, Key } from "lucide-react";

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface BookLayoutProps {
  children: React.ReactNode;
}

export function BookLayout({ children }: BookLayoutProps) {
  const [location] = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const chapters = [
    { id: 1, title: "The Eighth Earl's Last Equation", subtitle: "The Monad: Origin", path: "/chapter/1", locked: false },
    { id: 2, title: "The IX Departure", subtitle: "The Dyad: Duality", path: "/chapter/2", locked: false },
    { id: 3, title: "The Atlantic Anomaly", subtitle: "The Triad: Instability", path: "/chapter/3", locked: true },
    { id: 4, title: "The Cape of Good Hope", subtitle: "The Tetrad: Foundation", path: "/chapter/4", locked: true },
    { id: 5, title: "The Mpombo Mathematics", subtitle: "The Pentad: Connection", path: "/chapter/5", locked: true },
    { id: 6, title: "The Cannabis Consciousness", subtitle: "The Hexad: Structure", path: "/chapter/6", locked: true },
    { id: 7, title: "The Indian Impossibility", subtitle: "The Heptad: The Challenge", path: "/chapter/7", locked: true },
    { id: 8, title: "The Return Revelation", subtitle: "The Ogdoad: The Loop", path: "/chapter/8", locked: true },
    { id: 9, title: "The Tower Ritual", subtitle: "The Ennead: The Threshold", path: "/chapter/9", locked: true },
  ];

  const characters = [
    { id: "mpg", title: "M.P. Glassworthy", path: "/character/mpg", locked: true },
    { id: "vasco", title: "Vasco da Gama", path: "/character/vasco", locked: true },
    { id: "antonio", title: "Brother António", path: "/character/antonio", locked: true },
  ];

  const secrets = [
    { id: "cabinet", title: "Cabinet of Curiosities", path: "/secrets", locked: true },
  ];

  const NavLink = ({ to, children, className, locked = false }: { to: string; children: React.ReactNode; className?: string; locked?: boolean }) => {
    const isActive = location === to;
    
    if (locked) {
      return (
        <div
          className={cn(
            "px-4 py-2 rounded-md transition-all duration-300 font-heading text-sm tracking-wide opacity-50 cursor-not-allowed flex items-center justify-between",
            className
          )}
        >
          <div className="flex-1">{children}</div>
          <Key className="w-3 h-3 ml-2 opacity-50" />
        </div>
      );
    }

    return (
      <Link href={to}>
        <div
          className={cn(
            "px-4 py-2 rounded-md transition-all duration-300 cursor-pointer font-heading text-sm tracking-wide",
            isActive
              ? "bg-primary text-primary-foreground shadow-md translate-x-1"
              : "hover:bg-accent/20 hover:text-accent-foreground hover:translate-x-1",
            className
          )}
          onClick={() => setIsSidebarOpen(false)}
        >
          {children}
        </div>
      </Link>
    );
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-card text-card-foreground border-r border-border/50 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
      
      <div className="p-6 flex flex-col items-center text-center z-10">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 border-2 border-primary/20">
          <Feather className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold font-heading text-primary mb-1">The Durban Paradox</h1>
        <p className="text-xs text-muted-foreground font-body italic">Book 1 of the Glassworthy Chronicles</p>
      </div>

      <ScrollArea className="flex-1 px-4 py-2 z-10 overflow-y-auto">
        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 px-4 flex items-center gap-2">
              <BookOpen className="w-3 h-3" /> Chapters
            </h3>
            <div className="space-y-1">
              {chapters.map((chapter) => (
                <NavLink key={chapter.id} to={chapter.path} className="flex flex-col items-start py-3" locked={chapter.locked}>
                  <div className="flex items-center w-full">
                    <span className="mr-2 opacity-50 text-xs font-mono">IX.{chapter.id}</span>
                    <span className="font-medium">{chapter.title}</span>
                  </div>
                  {/* @ts-ignore */}
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider ml-6 mt-0.5">{chapter.subtitle}</span>
                </NavLink>
              ))}
            </div>
          </div>

          <Separator className="bg-border/50" />

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 px-4 flex items-center gap-2">
              <Map className="w-3 h-3" /> Dramatis Personae
            </h3>
            <div className="space-y-1">
              {characters.map((char) => (
                <NavLink key={char.id} to={char.path} locked={char.locked}>
                  {char.title}
                </NavLink>
              ))}
            </div>
          </div>

          <Separator className="bg-border/50" />

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 px-4 flex items-center gap-2">
              <Key className="w-3 h-3" /> Secrets
            </h3>
            <div className="space-y-1">
              {secrets.map((secret) => (
                <NavLink key={secret.id} to={secret.path} locked={secret.locked}>
                  {secret.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>

      <div className="p-4 text-center text-xs text-muted-foreground font-body italic border-t border-border/50 z-10">
        "The IX Principle: Always approaching, never arriving."
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary/20 selection:text-primary">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border z-50 flex items-center justify-between px-4">
        <span className="font-heading font-bold text-primary">The Durban Paradox</span>
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-80 border-r border-border bg-card">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex min-h-screen pt-16 lg:pt-0">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-80 fixed inset-y-0 left-0 z-40 shadow-xl">
          <SidebarContent />
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-80 relative">
           {/* Decorative background texture */}
           <div className="fixed inset-0 opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] z-0 mix-blend-multiply"></div>
           
           <div className="relative z-10 container max-w-4xl mx-auto py-12 px-6 lg:px-12 min-h-[calc(100vh-4rem)] flex flex-col">
             {children}
           </div>
        </main>
      </div>
      
    </div>
  );
}
