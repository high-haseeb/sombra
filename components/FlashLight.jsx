"use client";
import useStateStore from "@/stores/stateStore";
import { useState, useEffect } from "react";

const FlashLight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const { introDone, flashOn } = useStateStore();
  return (
    <>
      {!introDone && (
        <div className="w-screen h-screen absolute top-0 left-0 pointer-events-none" onClick={() => setLightOn((state) => !state)}>
          <div className="relative w-full h-screen bg-white/10 z-20">
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-200"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent, rgba(0, 0, 0, 0.8), black ${flashOn ? "30%" : "0%"})`,
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};
export default FlashLight;
