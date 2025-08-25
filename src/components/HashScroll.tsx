import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure page is fully rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return null;
}
