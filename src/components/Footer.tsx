import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";


const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-16">
      {/* Mobile Footer */}
      <div className="max-w-7xl mx-auto px-6 md:hidden">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center justify-center">
            <img
              src="/lovable-uploads/55a265a5-4ff8-406b-912e-3b254f02cb99.png"
              alt="Metro Surfaces logo"
              className="h-8 w-auto opacity-90"
            />
          </div>

          <p className="font-inter text-primary-foreground/80 text-center text-sm">
            Decorative surfaces for architectural excellence.
          </p>

          <div className="w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="quick-links">
                <AccordionTrigger className="text-base">Quick Links</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {[
                      { name: "Products", path: "/products" },
                      { name: "Applications", path: "/applications" },
                      { name: "Philosophy", path: "/philosophy" },
                      { name: "Resources", path: "/resources" },
                    ].map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="block font-inter text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="products">
                <AccordionTrigger className="text-base">Our Products</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 font-inter text-primary-foreground/80">
                    <Link
                      to="/products/asa-acrycore-sheets"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="block hover:text-primary-foreground transition-colors text-sm"
                    >
                      ASA Acrycore Sheets
                    </Link>
                    <Link
                      to="/products/premium-laminates"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="block hover:text-primary-foreground transition-colors text-sm"
                    >
                      Premium Laminates
                    </Link>
                    <Link
                      to="/products/decorative-louvers"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="block hover:text-primary-foreground transition-colors text-sm"
                    >
                      Decorative Louvers
                    </Link>
                    <Link
                      to="/products/cane-wallpaper"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="block hover:text-primary-foreground transition-colors text-sm"
                    >
                      Cane Wallpaper
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full">
            <Button
              asChild
              variant="outline"
              className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-primary/5"
            >
              <a
                href="https://wa.me/919326005195"
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
              <a href="mailto:rrrmetro@gmail.com" className="inline-flex items-center justify-center">
                Email
              </a>
            </Button>
          </div>

          <div className="w-full pt-6 border-t border-primary-foreground/20">
            <div className="flex flex-col items-center space-y-2">
              <p className="font-inter text-primary-foreground/80 text-xs">
                © 2024 Metro Surfaces. All rights reserved.
              </p>
              <Link
                to="/privacy-policy"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-inter text-primary-foreground/80 hover:text-primary-foreground transition-colors text-xs"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/lovable-uploads/55a265a5-4ff8-406b-912e-3b254f02cb99.png"
                  alt="Metro Surfaces"
                  className="h-8 w-auto opacity-90"
                />
              </div>
              <p className="font-inter text-primary-foreground/80 leading-relaxed">
                Decorative surfaces for architectural excellence.
                Trusted B2B partner for decades.
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
                  { name: "Resources", path: "/resources" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="block font-inter text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="font-inter font-semibold text-lg">Our Products</h4>
              <div className="space-y-2 font-inter text-primary-foreground/80">
                <Link
                  to="/products/asa-acrycore-sheets"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="block hover:text-primary-foreground transition-colors"
                >
                  ASA Acrycore Sheets
                </Link>
                <Link
                  to="/products/premium-laminates"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="block hover:text-primary-foreground transition-colors"
                >
                  Premium Laminates
                </Link>
                <Link
                  to="/products/decorative-louvers"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="block hover:text-primary-foreground transition-colors"
                >
                  Decorative Louvers
                </Link>
                <Link
                  to="/products/cane-wallpaper"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="block hover:text-primary-foreground transition-colors"
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
                    href="https://wa.me/919326005195"
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
                  <a href="mailto:rrrmetro@gmail.com" className="inline-flex items-center justify-center">
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
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="font-inter text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

