import React, { useEffect, useState } from "react";
// import SunRays from "./SunRays";

function Sun({theme, setTheme}) {
  const [sunState, setSunState] = useState(theme)
  useEffect(() => {
    if (theme !== "light") {
      setTimeout(() => {
        setSunState("dark")
      }, 300)
    } else {
      setSunState("light")
    }
  }, [theme])
  return (
    <div id="sun" onClick={() => {setTheme("dark")}} className={`h-[80%] aspect-square rounded-full absolute top-[10%] ${sunState === "light" ? "left-[5%] bg-yellow-400 z-20" : "left-[40%] opacity-0"} ${theme === "dark" ? "left-[40%]" : "left-[5%] bg-yellow-400" }  `}>
    </div>
  );
}

export default Sun;
