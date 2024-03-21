import React from "react";

function CloudBottom({theme}) {
  return (
    <div id="cloudBottom" className={`z-0 absolute w-full h-full ${theme === "light" ? "left-0 bottom-6 " : "-bottom-20 -right-10" }`}>
      <div className=" w-full h-full rounded-full overflow ">
        <div className="bg-red-20 relative w-full h-full rounded-full overflow-hidde scale-x-110">
          <div className="absolute -bottom-3 -right-9 bg-blue-300 h-20 w-20 rounded-full"></div>
          <div className="absolute -bottom-7 right-3 bg-blue-300 h-16 w-16 rounded-full"></div>
          <div className="absolute -bottom-6 right-6 bg-blue-300 h-12 w-12 rounded-full"></div>
          <div className="absolute -bottom-8 left-24 bg-blue-300 h-12 w-12 rounded-full"></div>
          <div className="absolute -bottom-12 left-14 bg-blue-300 h-14 w-14 rounded-full"></div>
          <div className="absolute -bottom-16 left-3 bg-blue-300 h-20 w-20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default CloudBottom;
