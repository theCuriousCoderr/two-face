import React, { useEffect, useState } from "react";

function Moon({theme, setTheme}) {
  const [moonState, setMoonState] = useState(theme)
  useEffect(() => {
    if (theme !== "light") {
      setTimeout(() => {
        setMoonState("dark")
      }, 300)
    } else {
      setMoonState("light")
    }
  }, [theme])
  return (
    <div id="moon" onClick={() => { setTheme("light")}} className={`h-[80%] aspect-square rounded-full bg-slate-500 absolute  top-[10%] ${moonState === "light" ? "left-[5%] opacity-0 -z-20" : "left-[60%] block z-10" } ${theme === "light" ? "opacity-0" : "opacity-100" } `}>
      <div className={`relative w-full h-full ${theme === "light" && "opacity-0" }`}>
        <div className="absolute bottom-[20%] left-[15%] w-[40%] aspect-square rounded-full bg-gray-400 shadow-inner shadow-gray-600"></div>
        <div className="absolute bottom-[15%] right-[15%] w-[23%] aspect-square rounded-full bg-gray-400 shadow-inner shadow-gray-500"></div>
        <div className="absolute top-[15%] left-[45%] w-[20%] aspect-square rounded-full bg-slate-400 shadow-inner shadow-gray-500"></div>
      </div>
    </div>
  );
}

export default Moon;
