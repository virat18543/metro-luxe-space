import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Applications from "./pages/Applications";
import PhilosophyPage from "./pages/PhilosophyPage";
import Resources from "./pages/Resources";
import ContactPage from "./pages/ContactPage";
import Downloads from "./pages/Downloads";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AsaVsPetg from "./pages/blog/AsaVsPetg";
import SustainableDesign from "./pages/blog/SustainableDesign";
import LouverSystems from "./pages/blog/LouverSystems";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background font-inter">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/philosophy" element={<PhilosophyPage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<ContactPage />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog/asa-vs-petg" element={<AsaVsPetg />} />
        <Route path="/blog/sustainable-design" element={<SustainableDesign />} />
        <Route path="/blog/louver-systems" element={<LouverSystems />} />
        <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
