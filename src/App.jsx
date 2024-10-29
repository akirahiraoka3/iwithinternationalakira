import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { navItems } from "./nav-items";
import Programs from "./pages/Programs";
import OverseasInternship from "./pages/OverseasInternship";
import LanguageStudy from "./pages/LanguageStudy";
import Countries from "./pages/Countries";
import FAQ from "./pages/FAQ";
import LearnAboutStudyAbroad from "./pages/LearnAboutStudyAbroad";
import Reasons from "./pages/Reasons";
import ShortTermStudy from "./pages/ShortTermStudy";
import LongTermStudy from "./pages/LongTermStudy";
import HighSchoolStudy from "./pages/HighSchoolStudy";
import UniversityStudy from "./pages/UniversityStudy";
import WorkingHoliday from "./pages/WorkingHoliday";
import RequiredDocuments from "./pages/RequiredDocuments";
import CostsAndFees from "./pages/CostsAndFees";

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
          <Route path="/countries" element={<Countries />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/learn-about-study-abroad" element={<LearnAboutStudyAbroad />} />
          <Route path="/reasons" element={<Reasons />} />
          <Route path="/short-term-study" element={<ShortTermStudy />} />
          <Route path="/long-term-study" element={<LongTermStudy />} />
          <Route path="/high-school-study" element={<HighSchoolStudy />} />
          <Route path="/university-study" element={<UniversityStudy />} />
          <Route path="/working-holiday" element={<WorkingHoliday />} />
          <Route path="/overseas-internship" element={<OverseasInternship />} />
          <Route path="/required-documents" element={<RequiredDocuments />} />
          <Route path="/costs-and-fees" element={<CostsAndFees />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;