import { useState, useEffect } from "react";

export default function RouterDemo() {
  const [route, setRoute] = useState("home");

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setRoute(hash);
    };

    window.addEventListener("hashchange", handleHash);
    handleHash();

    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return <h2>{route === "about" ? "About Page" : "Home Page"}</h2>;
}