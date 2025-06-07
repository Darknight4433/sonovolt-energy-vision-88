
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import LiveMonitoring from "./components/LiveMonitoring";
import Education from "./components/Education";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/monitoring" element={<LiveMonitoring />} />
              <Route path="/education" element={<Education />} />
              {/* Placeholder routes for future development */}
              <Route path="/devices" element={<div className="text-center py-20"><h1 className="text-2xl font-bold">Device Control - Coming Soon</h1></div>} />
              <Route path="/analytics" element={<div className="text-center py-20"><h1 className="text-2xl font-bold">Advanced Analytics - Coming Soon</h1></div>} />
              <Route path="/users" element={<div className="text-center py-20"><h1 className="text-2xl font-bold">User Management - Coming Soon</h1></div>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
