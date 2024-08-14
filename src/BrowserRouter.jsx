import { createContext, useState, useEffect } from "react";

const BrowserContext = createContext(); // Create a context for routing

function BrowserRouter({ children }) {
  const [currentURL, setCurrentURL] = useState(new URL(window.location.href)); // State to manage current URL

  useEffect(() => {
    function handlePopStateEvent(e) {
      console.log(e); // Log popstate event for debugging
      // Update current URL when navigating back or forward
      setCurrentURL(new URL(window.location.href));
    }

    window.addEventListener("popstate", handlePopStateEvent); // Listen for popstate events

    return () => {
      window.removeEventListener("popstate", handlePopStateEvent); // Clean up the event listener
    };
  }, []); // Empty dependency array ensures this effect runs once

  return (
    <BrowserContext.Provider value={{ currentURL, setCurrentURL }}>
      {children} {/* Render child components */}
    </BrowserContext.Provider>
  );
}

export default BrowserRouter;
export { BrowserContext };

