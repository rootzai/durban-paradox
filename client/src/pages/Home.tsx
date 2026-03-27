import { BookLayout } from "@/components/BookLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Feather, Globe, Scroll, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <BookLayout>
      <div className="space-y-24 pb-24">
        {/* Hero Section */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8"
        >
          <motion.div variants={fadeIn} className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20 mb-4">
            <BookOpen className="w-12 h-12 text-primary" />
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary leading-tight">
            The Durban Paradox
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-xl md:text-2xl font-body text-muted-foreground italic max-w-2xl mx-auto">
            A mathematical odyssey through the Renaissance, where history, cannabis, and the infinite converge.
          </motion.p>
          
          <motion.div variants={fadeIn} className="w-32 h-1 bg-accent mx-auto rounded-full my-8"></motion.div>
          
          <motion.div variants={fadeIn}>
            <Link href="/chapter/1">
              <Button size="lg" className="text-lg px-10 py-8 font-heading tracking-wider shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-white bg-primary hover:bg-primary/90">
                Read Chapter 1 <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Official Brand Wiki Link */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/wiki/MP_Glassworthy">
            <div className="group cursor-pointer bg-[#F5F2E8] border-2 border-[#2C1810]/20 hover:border-[#2C1810] p-8 rounded-xl transition-all duration-300 hover:shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe className="w-32 h-32 text-[#2C1810]" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="w-20 h-20 bg-[#2C1810] text-[#F5F2E8] rounded-full flex items-center justify-center flex-shrink-0 font-serif text-3xl font-bold">
                  W
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-bold text-[#2C1810] group-hover:text-[#8B4513] transition-colors">
                    Official Brand Wikipedia Entry
                  </h3>
                  <p className="text-[#2C1810]/70 font-sans max-w-xl">
                    Explore the documented history of MP Glassworthy, from the 1469 foundation to the $3.1415m revenue era and the <em>Unfrosted</em> connection.
                  </p>
                </div>
                <div className="ml-auto">
                  <Button variant="outline" className="border-[#2C1810] text-[#2C1810] hover:bg-[#2C1810] hover:text-[#F5F2E8]">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </motion.section>

        {/* The Concept */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <Globe className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">The Concept</h2>
          </div>
          <p className="text-lg leading-relaxed font-body text-muted-foreground">
            The Durban Paradox is not merely a novel; it is a recursive historical simulation. It posits that the discovery of the sea route to India was not driven by spices, but by a search for the "Zero Point"—a mathematical anomaly located at the coordinates of modern-day Durban.
          </p>
          <p className="text-lg leading-relaxed font-body text-muted-foreground">
            Blending the whimsical logic of Lewis Carroll with the rigorous self-reference of Gödel, Escher, Bach, this narrative explores the collision between the analog world of the 15th century and the digital inevitability of the future. It is a story about the data of history versus the truth of memory.
          </p>
        </motion.section>

        {/* The Series */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card/50 p-8 md:p-12 rounded-2xl border border-border/50 shadow-sm"
        >
          <div className="flex items-center justify-center gap-4 mb-10">
            <Scroll className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">The Glassworthy Chronicles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-heading text-primary">Book 1: The Durban Paradox</h3>
              <p className="text-sm text-muted-foreground">The origin. Vasco da Gama's scribe, M.P. Glassworthy, discovers the first anomaly off the coast of Africa.</p>
            </div>
            <div className="space-y-4 opacity-70">
              <h3 className="text-xl font-bold font-heading text-foreground">Book 2: The Calicut Calculus</h3>
              <p className="text-sm text-muted-foreground">The arrival in India. The mathematical infection spreads to the spice markets.</p>
            </div>
            <div className="space-y-4 opacity-70">
              <h3 className="text-xl font-bold font-heading text-foreground">Book 3: The Lisbon Logarithm</h3>
              <p className="text-sm text-muted-foreground">The return. Europe attempts to process the impossible data brought back from the East.</p>
            </div>
            <div className="space-y-4 opacity-70">
              <h3 className="text-xl font-bold font-heading text-foreground">Book 4: The Null Set</h3>
              <p className="text-sm text-muted-foreground">The collapse. Reality begins to delete itself as the "Subtractors" gain power.</p>
            </div>
            <div className="space-y-4 opacity-70">
              <h3 className="text-xl font-bold font-heading text-foreground">Book 5: The Infinite Loop</h3>
              <p className="text-sm text-muted-foreground">The resolution. Glassworthy must close the equation before history is overwritten.</p>
            </div>
          </div>
        </motion.section>

        {/* Historiography */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <Feather className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">The Historiography of M.P. Glassworthy</h2>
          </div>
          <p className="text-lg leading-relaxed font-body text-muted-foreground">
            M.P. Glassworthy does not exist in any official manifest of the São Gabriel. He is a "ghost variable"—a person who was written out of history by the Optimizers because his observations were too chaotic for the official timeline.
          </p>
          <p className="text-lg leading-relaxed font-body text-muted-foreground">
            His journals, recovered from the digital ether, reveal a parallel history of the Age of Discovery. He was a man who saw the world not as land and sea, but as code and syntax. His existence is the glitch that proves the simulation.
          </p>
        </motion.section>

        {/* Call for Partners */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-primary/5 p-8 md:p-16 rounded-3xl border-2 border-primary/10 text-center space-y-8"
        >
          <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary">Seeking Publishing Partners</h2>
          
          <p className="text-xl leading-relaxed font-body text-foreground/80 max-w-2xl mx-auto">
            We are currently seeking visionary publishing partners and media production houses to help expand <em>The Durban Paradox</em> into a multi-platform franchise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto mt-8">
            <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50">
              <h4 className="font-bold font-heading text-lg mb-2">Print & Digital</h4>
              <p className="text-sm text-muted-foreground">High-quality physical editions with embedded puzzles and augmented reality features.</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50">
              <h4 className="font-bold font-heading text-lg mb-2">Screen Adaptation</h4>
              <p className="text-sm text-muted-foreground">A limited series that visualizes the surreal, geometric hallucinations of Glassworthy.</p>
            </div>
            <div className="bg-background p-6 rounded-xl shadow-sm border border-border/50">
              <h4 className="font-bold font-heading text-lg mb-2">Interactive Media</h4>
              <p className="text-sm text-muted-foreground">Immersive web experiences and games that allow users to solve the paradoxes.</p>
            </div>
          </div>
          
          <div className="pt-8">
            <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-colors">
              Contact for Rights & Inquiries
            </Button>
          </div>
        </motion.section>
      </div>
    </BookLayout>
  );
}
