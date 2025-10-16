import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import LightPaper from "./pages/LightPaper";
import CLI from "./pages/CLI";
import Marketplace from "./pages/Marketplace";
import Philosophy from "./pages/Philosophy";
import Team from "./pages/Team";
import ForTeams from "./pages/ForTeams";
import SaasStarter from "./pages/solutions/SaasStarter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lightpaper" element={<LightPaper />} />
          <Route path="/cli" element={<CLI />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/team" element={<Team />} />
          <Route path="/for-teams" element={<ForTeams />} />
          <Route path="/solutions/saas-starter" element={<SaasStarter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Analytics />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
