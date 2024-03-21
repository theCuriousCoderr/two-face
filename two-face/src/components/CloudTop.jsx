import React from "react";

function CloudTop({theme}) {
  return (
    <div id="cloudTop" className={`absolute z-10  w-full h-full bottom-0 ${theme === "light" ? "top-7 right-5" : "top-24 right-full" }`}>
      <div className="absolute left-0 bottom-6 w-full h-full rounded-full overflow ">
        <div className="bg-red-20 relative w-full h-full rounded-full overflow-hidde scale-x-110">
          <div className="absolute -bottom-3 -right-9 bg-blue-200 h-20 w-20 rounded-full"></div>
          <div className="absolute -bottom-7 right-3 bg-blue-200 h-16 w-16 rounded-full"></div>
          <div className="absolute -bottom-6 right-6 bg-blue-200 h-12 w-12 rounded-full"></div>
          <div className="absolute -bottom-8 left-24 bg-blue-200 h-12 w-12 rounded-full"></div>
          <div className="absolute -bottom-12 left-14 bg-blue-200 h-14 w-14 rounded-full"></div>
          <div className="absolute -bottom-16 left-3 bg-blue-200 h-20 w-20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default CloudTop;
