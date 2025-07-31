import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/b07303d8-e39a-4b29-968d-c44490fbbfd8.png" 
                alt="Metro Laminates" 
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
                { name: "Resources", path: "/resources" }
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
              <p>ASA Acrycore Sheets</p>
              <p>Premium Laminates</p>
              <p>Decorative Louvers</p>
              <p>Cane Wallpaper</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-inter font-semibold text-lg">Connect With Us</h4>
            <div className="space-y-3">
              <Button 
                asChild 
                variant="outline"
                className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a 
                  href="https://wa.me/919326005195" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  WhatsApp: +91 9326005195
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="w-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a 
                  href="mailto:rrrmetro@gmail.com"
                  className="inline-flex items-center justify-center"
                >
                  rrrmetro@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-inter text-primary-foreground/80">
              © 2024 Metro Laminates. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/privacy-policy" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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