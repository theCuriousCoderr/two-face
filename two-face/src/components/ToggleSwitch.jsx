import switchMode from "../helpers/switchMode";
import Clouds from "./Clouds";
import Moon from "./Moon";
import MoonRays from "./MoonRays";
import Stars from "./Stars";
import Sun from "./Sun";

function ToggleSwitch({setTheme}) {
  return (
    <>
      <div className=" relative w-48 mx-auto z-30 flex items-center justify-center">
        {/* button container */}
        <button className="relative w-full h-20 mx-auto border-4 border-transparent box-content rounded-full shadow-inne shadow-sky-800 drop-shadow-lg overflow-hidden">
          {/* Dark Mode */}
          <div
            id="dark"
            onClick={() => {setTheme("light"); switchMode("light")}} 
            className="absolute top-0 w-full bg-transparent right-0 h-full overflow-hidden"
          >
            <div className=" relative h-full w-full bg-red-40 z-30 px-3 py-2">
              <Stars />
              <div>
                <MoonRays />
                <Moon />
              </div>
            </div>
          </div>

          {/* Light Mode*/}
          <div
            id="light"
            onClick={() => {setTheme("dark"); switchMode("dark")}} 
            className="hover:bg-amber-200 hidde absolute z-30 overflow-hidden top-0 w-full h-full rounded-full  shadow-inner bg-blue-400 shadow-gray-900"
          >
            <Clouds />
            <Sun />
          </div>
        </button>
      </div>
    </>
  );
}

export default ToggleSwitch;