import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import BrandLogo from "./BrandLogo";

const Footer = () => {
  const location = useLocation();

  // Handle navigation click with scroll-to-top logic
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If not on current page, allow normal navigation
  };

  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-16">
      {/* Mobile Footer */}
      <div className="max-w-7xl mx-auto px-6 md:hidden">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center justify-center">
            <BrandLogo className="shrink-0" />
          </div>
          <p className="font-inter text-primary-foreground/80 text-center text-sm">
            Decorative surfaces for architectural excellence.
          </p>
          <div className="w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="quick-links">
                <AccordionTrigger className="text-base">
                  Quick Links
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {[
                      { name: "Products", path: "/products" },
                      { name: "Applications", path: "/applications" },
                      { name: "Philosophy", path: "/philosophy" },
                    ].map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={(e) => handleLinkClick(e, link.path)}
                        className="block font-inter text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="products">
                <AccordionTrigger className="text-base">
                  Our Products
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 font-inter text-primary-foreground/80">
                    <Link
                      to="/products"
                      onClick={(e) => handleLinkClick(e, '/products')}
                      className="block hover:text-primary-foreground transition-colors text-sm"
                    >
                      Acrycore Sheets
                    </Link>
                    <Link
                      to="/products"
                      onClick={(e) => handleLinkClick(e, '/products')}
                      className="block hover:text-primary-foreground transition-colors text-sm"
                    >
                      Premium Laminates
                    </Link>
                    <Link
                      to="/products"
                      onClick={(e) => handleLinkClick(e, '/products')}
                      className="block hover:text-primary-foreground transition-colors text-sm"
                    >
                      Decorative Louvers
                    </Link>
                    <Link
                      to="/products"
                      onClick={(e) => handleLinkClick(e, '/products')}
                      className="block hover:text-primary-foreground transition-colors text-sm"
                    >
                      Cane Wallpaper
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="max-w-7xl mx-auto px-6 hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <BrandLogo className="shrink-0" />
            </div>
            <p className="font-inter text-primary-foreground/80 text-sm">
              Decorative surfaces for architectural excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-inter font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "Products", path: "/products" },
                { name: "Applications", path: "/applications" },
                { name: "Philosophy", path: "/philosophy" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className="block font-inter text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Our Products */}
          <div className="space-y-4">
            <h4 className="font-inter font-semibold text-lg">Our Products</h4>
            <div className="space-y-2">
              <Link
                to="/products"
                onClick={(e) => handleLinkClick(e, '/products')}
                className="block font-inter text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Acrycore Sheets
              </Link>
              <Link
                to="/products"
                onClick={(e) => handleLinkClick(e, '/products')}
                className="block font-inter text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Premium Laminates
              </Link>
              <Link
                to="/products"
                onClick={(e) => handleLinkClick(e, '/products')}
                className="block font-inter text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Decorative Louvers
              </Link>
              <Link
                to="/products"
                onClick={(e) => handleLinkClick(e, '/products')}
                className="block font-inter text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Cane Wallpaper
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-inter font-semibold text-lg">Connect With Us</h4>
            <div className="space-y-3">
              <Button
                asChild
                variant="outline"
                className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-primary/5"
              >
                <a
                  href="https://wa.me/918286580449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-primary/5"
              >
                <a className="inline-flex items-center justify-center" href="mailto:rrrmetro@gmail.com">
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-inter text-primary-foreground/80">
              © 2024 Metro Surfaces. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy-policy"
                onClick={(e) => handleLinkClick(e, '/privacy-policy')}
                className="font-inter text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
