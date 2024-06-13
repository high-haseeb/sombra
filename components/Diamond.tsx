"use client";
import Image from "next/image";
import { useState } from "react";
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
  return (
    <>
      <div
        className={ `w-screen h-screen absolute top-0 left-0 flex items-center justify-center ${introDone ? 'bg-[#EFEFEF]': 'bg-black'} transition-colors duration-[2000ms]` }
        onClick={() => {
          toggleFlash();
        }}
      >
        {introDone &&
        <div className="absolute w-full h-full flex items-center justify-center overflow-x-hidden pointer-events-none">
          <div className="absolute left-0 w-full h-full animate-merge-left flex">
            <div className="w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
          </div>

          <div className="absolute right-0 w-full h-full animate-merge-right flex">
            <div className="w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
          </div>
        </div>
        }
        <Image
          className="cursor-pointer"
          src={`/gifs/${diamond_paths[index]}.gif`}
          width={500}
          height={500}
          alt="diamond"
          onClick={() => {
            setIntroDone();
            setIndex((state) => (state + 1) % diamond_paths.length);
          }}
        />
      </div>
    </>
  );
};

export default Diamond;
