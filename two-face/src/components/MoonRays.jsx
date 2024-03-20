import React from "react";

function MoonRays() {
  return (
    <div className="absolute right-0 overflow-hidde">
      <div className="relative">
        <div className="absolute -top-12 -right-14 w-40 h-40 rounded-full bg-slate-100 opacity-10"></div>
        <div className="absolute -top-12 -right-7 w-40 h-40 rounded-full bg-slate-200 opacity-10"></div>
        <div className="absolute -top-12 -right-1 w-40 h-40 rounded-full bg-slate-200 opacity-10"></div>
      </div>
    </div>
  );
}

export default MoonRays;
