import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BrandLogo from "./BrandLogo";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Applications", path: "/applications" },
  { name: "Philosophy", path: "/philosophy" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  // Handle navigation click with scroll-to-top logic
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If not on current page, allow normal navigation
  };

  // Measure header height and set CSS var --header-h so content can offset correctly
  useEffect(() => {
    const updateHeaderVar = () => {
      if (!headerRef.current) return;
      const h = headerRef.current.offsetHeight || 64;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    updateHeaderVar();
    const ro = new ResizeObserver(updateHeaderVar);
    if (headerRef.current) ro.observe(headerRef.current);
    window.addEventListener("resize", updateHeaderVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateHeaderVar);
    };
  }, []);

  // Close any mobile menus on route change (optional placeholder if you add one)
  useEffect(() => {
    setVisible(false);
  }, [location.pathname]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Link to="/" className="relative z-10 flex items-center gap-2">
          <BrandLogo className="shrink-0" withText />
        </Link>
        
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className="relative px-1 py-2 font-medium transition-all duration-200 rounded-md
                         text-primary hover:text-primary/80"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button (you can wire it later if needed) */}
        <button
          className="md:hidden relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-md border"
          onClick={() => setVisible((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="i-lucide-menu"></span>
        </button>
      </div>

      {/* Mobile drawer (optional, minimal stub) */}
      {visible && (
        <div className="md:hidden border-t bg-background">
          <nav className="px-4 py-2 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-2 py-3 text-lg"
                onClick={(e) => {
                  handleNavClick(e, item.path);
                  setVisible(false);
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
