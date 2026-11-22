import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls back to the top of the page whenever the visitor changes page.
// (Without this, React Router keeps the old scroll position.)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // shows nothing on screen
}

export default ScrollToTop;
