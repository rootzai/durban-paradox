import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { InventoryProvider } from "./contexts/InventoryContext";
import Home from "./pages/Home";
import Chapter from "@/pages/ChapterPage";
import Character from "./pages/Character";
import Secrets from "./pages/Secrets";
import LoreVault from "@/pages/LoreVault";
import { WikiPage } from './pages/WikiPage';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/chapter/:id" component={Chapter} />
      <Route path="/character/:id" component={Character} />
      <Route path="/secrets" component={Secrets} />
      <Route path="/lore" component={LoreVault} />
      <Route path="/wiki/MP_Glassworthy" component={WikiPage} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <InventoryProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
        </InventoryProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
