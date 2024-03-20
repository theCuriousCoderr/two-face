import React from "react";
import SunRays from "./SunRays";

function Sun() {
  return (
    <div id="sun" className="hidde absolute top-0 left-0 h-full">
      <div className="absolute">
       <SunRays />
      </div>
      <div className="relative z-30 px-3 py-2 h-full">
        <div className="absolute h-[80%] aspect-square rounded-full bg-yellow-400 shadow-xl shadow-gray-600"></div>
      </div>
    </div>
  );
}

export default Sun;
