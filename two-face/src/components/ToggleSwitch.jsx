
import CloudBottom from "./CloudBottom";
import CloudTop from "./CloudTop";
import Moon from "./Moon";
import MoonRays from "./MoonRays";
import Stars from "./Stars";
import Sun from "./Sun";

function ToggleSwitch({ theme, setTheme }) {
  return (
    <>
      <div className=" relative w-48 mx-auto flex items-center justify-center">
        {/* button container */}
        <button className={`relative w-full h-20 mx-auto border ${theme === "light" ? "border-slate-400" : "border-slate-700" } outline-none box-content rounded-full shadow-inne shadow-sky-800 drop-shadow-lg overflow-hidden`}>
          <CloudBottom theme={theme} />
          <Sun theme={theme} setTheme={setTheme} />
          <CloudTop theme={theme} />
          <Moon theme={theme} setTheme={setTheme} />
        </button>
      </div>
    </>
  );
}

export default ToggleSwitch;
