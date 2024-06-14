"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useStateStore from "@/stores/stateStore";
import Navbar from "./Navbar";

const Diamond = () => {
  const diamond_paths = [
    "Diamond Alpha Clipped",
    "Cube-Octahedron Compound Alpha Clipped",
    "Cylinder Alpha Clipped",
    "Cylinder-Broke Alpha Clipped",
    "Dodecahedron Alpha Clipped",
    "Icosphere Alpha Clipped",
    "Pentagonal Trapezium Alpha Clipped",
  ];
  const [index, setIndex] = useState(0);
  const { setIntroDone, toggleFlash, introDone } = useStateStore();
  const vidRef = useRef<any>(null);
  useEffect(() => {
    if (!vidRef.current) return;
    vidRef.current?.addEventListener("ended", () => {
      console.log('video ended')
      vidRef.current && (vidRef.current.style.display = "none");
    });
  }, [vidRef.current]);
  useEffect(() => {
    vidRef.current.play();
  }, [introDone])
  return (
    <>
      <div
        className={`w-screen h-screen absolute top-0 left-0 flex items-center justify-center ${introDone ? "bg-[#EFEFEF]" : "bg-black"} transition-colors duration-[2000ms]`}
        onClick={() => {
          toggleFlash();
          setIndex((state) => (state + 1) % diamond_paths.length);
        }}
      >
          <video
            src="/bg.mp4"
            width={1000}
            height={1000}
          autoPlay
          playsInline
            className={ `absolute top-0 left-0 w-screen h-screen z-40 object-cover ${introDone ?  'block' :'hidden'}` }
            ref={vidRef}
          />

        <div className={ `${introDone ? 'text-black':'text-white'} transition-color uppercase z-10 font-bold` }>
          <div className="absolute top-40 right-32 text-4xl">Actualizing the beyond</div>
          <div className="absolute bottom-40 left-32 text-4xl">
            ILLUMINATING THE <br /> UNKNOWN
          </div>
        </div>
        <Image
          className="cursor-pointer z-10"
          src={`/gifs/${diamond_paths[index]}.gif`}
          width={200}
          height={500}
          alt="diamond"
          onClick={() => {
            setIntroDone();
          }}
        />
      </div>
    </>
  );
};

export default Diamond;
