import { useContext } from "react";
import { BrowserContext } from "./BrowserRouter.jsx";

function Link({ children, to }) {
  const { setCurrentURL } = useContext(BrowserContext);

  if (setCurrentURL === undefined) {
    throw new Error("BrowserContext is not provided");
  }

  function handleNavigation(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.history.pushState({}, "", to);
    setCurrentURL(new URL(window.location.origin + to));
  }

  return <a href={to} onClick={handleNavigation}>{children}</a>;
}

export default Link;

