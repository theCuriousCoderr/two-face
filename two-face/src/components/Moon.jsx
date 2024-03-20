import React from "react";

function Moon() {
  return (
    <div
      id="moon"
      className="absolute h-[80%] aspect-square right-3 rounded-full bg-slate-300"
    >
      <div className="relative w-full h-full">
        <div className="absolute bottom-[20%] left-[15%] w-[30%] aspect-square rounded-full bg-gray-400 shadow-inner shadow-gray-600"></div>
        <div className="absolute bottom-[15%] right-[15%] w-[25%] aspect-square rounded-full bg-gray-400 shadow-inner shadow-gray-500"></div>
        <div className="absolute top-[15%] left-[50%] w-[25%] aspect-square rounded-full bg-gray-400 shadow-inner shadow-gray-500"></div>
      </div>
    </div>
  );
}

export default Moon;
