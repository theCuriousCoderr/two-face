import { useState } from 'react'
import white_star_3x  from "./images/white_star_3x.png"

function App() {
  const [count, setCount] = useState(0);

  function switchMode(mode) {
    let sun = document.getElementById("sun");
    let moon = document.getElementById("moon");
    let cloud = document.getElementById("cloud");
    let stars = document.getElementById("stars");
    let dark = document.getElementById("dark");
    let light = document.getElementById("light");
    if (mode === "dark") {
      sun.classList.remove("left-0");
      sun.classList.add("left-14");
      cloud.classList.remove("bottom-0");
      cloud.classList.add("-bottom-20");
      stars.classList.add("top-0");
      setTimeout(() => {
        setTimeout(() => {
          moon.classList.remove("hidden");
        }, 100);

        moon.classList.remove("right-16");
        moon.classList.add("right-3");
        light.classList.add("hidden");
        dark.classList.remove("bg-transparent");
        dark.classList.add("opacity-100");
        dark.classList.add("bg-gray-900");
      }, 600);
    } else {
      moon.classList.remove("right-3");
      moon.classList.add("right-16");
      stars.classList.remove("top-0");
      stars.classList.add("-top-20");
      dark.classList.remove("opacity-100");
      dark.classList.add("opacity-0");
      setTimeout(() => {
        light.classList.remove("hidden");
        setTimeout(() => {
          sun.classList.remove("left-14");
          sun.classList.add("left-0");
          cloud.classList.remove("-bottom-20");
          cloud.classList.add("bottom-0");
        }, 10);
      }, 600);
    }
  }

  return (
    <>
           <div className="bg-slate-300 max-w-xs mx-auto h-60 relative z-30 py-20">
        <button className="relative w-[70%] mx-auto border-4 border-black box-content h-20 rounded-full shadow-inne shadow-sky-800 drop-shadow-lg overflow-hidden">
          {/* Dark */}
          <div
            onClick={() => switchMode("light")}
            id="dark"
            className="hidde absolute top-0 w-full bg-transparent right-0 h-full overflow-hidden"
          >
            <div className=" relative h-full w-full bg-red-40 z-30 px-3 py-2">
              <div
                id="stars"
                className="absolute w-full bg-red-20 -top-20 left-0 h-full"
              >
                <div className="absolute w-3 h-3 right-20 top-5">
                  <img src={white_star_3x} />
                </div>
                <div className="absolute w-1 h-1 right-[5.7rem] top-12">
                  <img src={white_star_3x} />
                </div>
                <div className="absolute w-1 h-1 right-28 top-5">
                  <img src={white_star_3x} />
                </div>
                <div className="absolute w-1 h-1 right-[7.6rem] top-10">
                  <img src={white_star_3x} />
                </div>
                <div className="absolute w-2 h-1 right-28 top-14">
                  <img src={white_star_3x} />
                </div>
                <div className="absolute w-3 h-3 left-8 top-3">
                  <img src={white_star_3x} />
                </div>
                <div className="absolute w-1 h-1 left-3 top-7">
                  <img src={white_star_3x} />
                </div>
                <div className="absolute w-2 h-1 left-9 top-9">
                  <img src={white_star_3x} />
                </div>
                <div className="absolute w-1 h-1 left-10 bottom-2">
                  <img src={white_star_3x} />
                </div>
                <div className="absolute w-1 h-1 left-5 bottom-3">
                  <img src={white_star_3x} />
                </div>
                <div className="absolute w-1 h-1 left-6 bottom-5">
                  <img src={white_star_3x} />
                </div>
              </div>

              {/* beams */}
              <div hidde>
                <div className="absolute right-0 overflow-hidde">
                  <div className="relative">
                    <div className="absolute -top-12 -right-14 w-40 h-40 rounded-full bg-slate-100 opacity-10"></div>
                    <div className="absolute -top-12 -right-7 w-40 h-40 rounded-full bg-slate-200 opacity-10"></div>
                    <div className="absolute -top-12 -right-1 w-40 h-40 rounded-full bg-slate-200 opacity-10"></div>
                  </div>
                </div>
                {/* moon */}
                <div
                  id="moon"
                  className="absolute h-16 w-16 right-16 hidde rounded-full bg-slate-300"
                >
                  <div className="relative w-full h-full">
                    <div className="absolute bottom-4 left-2 w-6 h-6 rounded-full bg-gray-400 shadow-inner shadow-gray-600"></div>
                    <div className="absolute bottom-3 right-2 w-4 h-4 rounded-full bg-gray-400 shadow-inner shadow-gray-500"></div>
                    <div className="absolute top-2 left-7 w-3 h-3 rounded-full bg-gray-400 shadow-inner shadow-gray-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Light */}
          <div
            id="light"
            onClick={() => switchMode("dark")}
            className="hover:bg-amber-200 hidde absolute z-30 overflow-hidden top-0 w-full h-full rounded-full  shadow-inner bg-blue-400 shadow-gray-900"
          >
            <div id="cloud" className="relative w-full h-full bottom-0">
              <div className="hidde bg-red-20 z-0 absolute left-0 bottom-6 w-full h-full rounded-full overflow ">
                <div className="bg-red-20 relative w-full h-full rounded-full overflow-hidde scale-x-110">
                  <div className="absolute -bottom-3 -right-9 bg-blue-300 h-20 w-20 rounded-full"></div>
                  <div className="absolute -bottom-7 right-3 bg-blue-300 h-16 w-16 rounded-full"></div>
                  <div className="absolute -bottom-6 right-6 bg-blue-300 h-12 w-12 rounded-full"></div>
                  <div className="absolute -bottom-8 left-24 bg-blue-300 h-12 w-12 rounded-full"></div>
                  <div className="absolute -bottom-12 left-14 bg-blue-300 h-14 w-14 rounded-full"></div>
                  <div className="absolute -bottom-16 left-3 bg-blue-300 h-20 w-20 rounded-full"></div>
                </div>
              </div>
              <div className=" bg-red-20 z-30 relative w-full h-full rounded-full overflow-hidden">
                <div className="absolute -bottom-3 -right-12 bg-blue-100 h-20 w-20 rounded-full"></div>
                <div className="absolute -bottom-6 -right-1 bg-blue-100 h-16 w-16 rounded-full"></div>
                <div className="absolute -bottom-6 right-6 bg-blue-100 h-12 w-12 rounded-full"></div>
                <div className="absolute -bottom-8 left-24 bg-blue-100 h-12 w-12 rounded-full"></div>
                <div className="absolute -bottom-9 left-14 bg-blue-100 h-14 w-14 rounded-full"></div>
                <div className="absolute -bottom-14 left-0 bg-blue-100 h-20 w-20 rounded-full"></div>
              </div>
            </div>

            {/* sun */}
            <div id="sun" className="hidde absolute top-0 left-0">
              <div className="absolute">
                <div className="relative">
                  <div className="absolute -top-10 -left-14 w-40 h-40 rounded-full bg-slate-200 opacity-40"></div>
                  <div className="absolute -top-10 -left-7 w-40 h-40 rounded-full bg-slate-200 opacity-30"></div>
                  <div className="absolute -top-10 -left-1 w-40 h-40 rounded-full bg-slate-200 opacity-20"></div>
                </div>
              </div>
              <div className="relative z-30 px-3 py-2">
                <div className="absolute h-16 w-16 rounded-full bg-yellow-400 shadow-xl shadow-gray-600"></div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  )
}

export default App
