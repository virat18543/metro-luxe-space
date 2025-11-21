import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";
import HashScroll from "./components/HashScroll";
import Home from "./pages/Index";
import Products from "./pages/Products";
import Applications from "./pages/Applications";
import PhilosophyPage from "./pages/PhilosophyPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AcrycoreVsPetg from "./pages/blog/AcrycoreVsPetg";
import SustainableDesign from "./pages/blog/SustainableDesign";
import LouverSystems from "./pages/blog/LouverSystems";
import AsaAcrycoreSheets from "./pages/products/AsaAcrycoreSheets";
import PremiumLaminates from "./pages/products/PremiumLaminates";
import DecorativeLouvers from "./pages/products/DecorativeLouvers";
import CaneWallpaper from "./pages/products/CaneWallpaper";
import NotFound from "./pages/NotFound";
import Acrycore from "./pages/Acrycore";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <HashScroll />
        {/* Fixed header stays at the very top */}
        <Navigation />
        {/* Everything below starts AFTER the header height */}
        <main className="sticky-offset min-h-screen bg-background font-inter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/asa-Acrycore-sheets" element={<AsaAcrycoreSheets />} />
            <Route path="/products/premium-laminates" element={<PremiumLaminates />} />
            <Route path="/products/decorative-louvers" element={<DecorativeLouvers />} />
            <Route path="/products/cane-wallpaper" element={<CaneWallpaper />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/philosophy" element={<PhilosophyPage />} />
            <Route path="/contact" element={<ContactPage />} />
                        <Route path="/Acrycore" element={<Acrycore />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog/Acrycore-vs-petg" element={<AcrycoreVsPetg />} />
            <Route path="/blog/sustainable-design" element={<SustainableDesign />} />
            <Route path="/blog/louver-systems" element={<LouverSystems />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <BackToTop />
          <WhatsAppFloat />
        </main>
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
