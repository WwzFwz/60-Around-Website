"use client"; 
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "Build\WGL.loader.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen">
      <iframe
      src="index.html"
      height="100%"
      width="100%"
      allowFullScreen
    ></iframe>
    </div>
  );
}
