import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { navItems } from "./nav-items";
import Programs from "./pages/Programs";
import OverseasInternship from "./pages/OverseasInternship";
import LanguageStudy from "./pages/LanguageStudy";
import UniversitySupport from "./pages/UniversitySupport";

const queryClient = new QueryClient();

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToHashElement />
        <Routes>
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
          <Route path="/programs" element={<Programs />} />
          <Route path="/internship" element={<OverseasInternship />} />
          <Route path="/language-study" element={<LanguageStudy />} />
          <Route path="/university-support" element={<UniversitySupport />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;