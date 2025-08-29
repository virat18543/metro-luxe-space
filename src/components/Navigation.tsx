import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import BrandLogo from "./BrandLogo";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(6);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Products",
      path: "/products"
    },
    {
      name: "Applications",
      path: "/applications"
    },
    {
      name: "Philosophy",
      path: "/philosophy"
    },
    {
      name: "Contact",
      path: "/contact"
    }
    // Note: Downloads menu item removed as requested
    // {
    //   name: "Downloads",
    //   path: "/downloads"
    // }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsDesktopDropdownOpen(false);
  };

  // Responsive navigation logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(6); // Show all items on large screens
      } else if (window.innerWidth >= 768) {
        setVisibleItems(4); // Show fewer items on medium screens
      } else {
        setVisibleItems(0); // Hide all on mobile (use mobile menu)
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleNavItems = navItems.slice(0, visibleItems);
  const hiddenNavItems = navItems.slice(visibleItems);

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-14 sm:h-16 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link className="flex items-center space-x-4 min-w-0 flex-shrink-0 group" to="/">
            <BrandLogo className="shrink-0" withText />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 relative" ref={navRef}>
            {/* Visible Navigation Items */}
            {visibleNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`relative px-3 py-2 font-inter font-medium transition-all duration-300 rounded-full group whitespace-nowrap ${
                  isActive(item.path) ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}

            {/* More Menu Dropdown */}
            {hiddenNavItems.length > 0 && (
              <div className="relative">
                <Button
                  variant="ghost"
                  onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
                  className="relative px-3 py-2 font-inter font-medium transition-all duration-300 rounded-full group text-muted-foreground hover:text-primary hover:bg-primary/5"
                >
                  <span className="relative z-10 flex items-center gap-1">
                    More
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      isDesktopDropdownOpen ? 'rotate-180' : ''
                    }`} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>

                {/* Dropdown Menu */}
                {isDesktopDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-lg z-50 animate-fade-in">
                    <div className="py-2">
                      {hiddenNavItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={handleNavClick}
                          className={`block px-4 py-2 font-inter font-medium transition-all duration-200 hover:bg-primary/5 ${
                            isActive(item.path) ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden relative group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="relative w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              )}
            </svg>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-gradient-to-b from-background to-background/95 backdrop-blur-md animate-fade-in">
            <div className="py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block mx-4 px-4 py-3 font-inter font-medium transition-all duration-300 rounded-lg group ${
                    isActive(item.path) ? 'text-primary bg-gradient-to-r from-primary/20 to-accent/20' : 'text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10'
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleNavClick();
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close dropdown */}
      {isDesktopDropdownOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsDesktopDropdownOpen(false)} />
      )}
    </header>
  );
};

export default Navigation;
