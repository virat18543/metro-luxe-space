import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GtagRouteListener = () => {
  const location = useLocation();

  useEffect(() => {
    if ((window as any).gtag) {
      const { pathname, search } = location;
      (window as any).gtag("config", "G-CT5NE7C030", {
        page_path: pathname + search,
      });
    }
  }, [location]);

  return null;
};

export default GtagRouteListener;
