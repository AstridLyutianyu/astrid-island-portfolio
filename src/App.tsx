import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import More from "./pages/more/More.tsx";
import Red from "./pages/more/Red.tsx";
import Orange from "./pages/more/Orange.tsx";
import Yellow from "./pages/more/Yellow.tsx";
import Green from "./pages/more/Green.tsx";
import Blue from "./pages/more/Blue.tsx";
import Purple from "./pages/more/Purple.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/more" element={<More />} />
          <Route path="/more/red" element={<Red />} />
          <Route path="/more/orange" element={<Orange />} />
          <Route path="/more/yellow" element={<Yellow />} />
          <Route path="/more/green" element={<Green />} />
          <Route path="/more/blue" element={<Blue />} />
          <Route path="/more/purple" element={<Purple />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
