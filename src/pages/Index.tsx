import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import ProductGallery from "../components/ProductGallery";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import JsonLd from "../components/JsonLd";

const Index = () => {
  return (
    <>
      <JsonLd />
      <div className="min-h-screen bg-background font-inter">
        <Hero />
        <Philosophy />
        <ProductGallery />
        <Blog />
        <Contact />
      </div>
    </>
  );
};

export default Index;

