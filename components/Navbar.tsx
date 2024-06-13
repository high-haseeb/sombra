import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-10 w-screen h-screen left-10 z-10 mix-blend-difference text-4xl font-bold leading-8 pointer-events-none">
      <div className="relative w-full h-full">
        <span>
          Sombra
          <br />
          Labs
        </span>
        <div className="uppercase text-xl absolute -left-28 top-1/2 -rotate-90">bringing dark to light</div>
        <div className="uppercase text-sm absolute left-10 bottom-20">Copyright (c) 2024 Sombra. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Navbar;
