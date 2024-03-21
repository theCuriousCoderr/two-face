// export default function switchMode(mode) {
//     let sun = document.getElementById("sun");
//     let moon = document.getElementById("moon");
//     let cloud = document.getElementById("cloud");
//     let stars = document.getElementById("stars");
//     let dark = document.getElementById("dark");
//     let light = document.getElementById("light");
//     if (mode === "dark") {
//       sun.classList.remove("left-0");
//       sun.classList.add("left-14");
//       cloud.classList.remove("bottom-0");
//       cloud.classList.add("-bottom-20");
//       stars.classList.add("top-0");
//       setTimeout(() => {
//         setTimeout(() => {
//           moon.classList.remove("hidden");
//         }, 100);

//         moon.classList.remove("right-16");
//         moon.classList.add("right-3");
//         light.classList.add("hidden");
//         dark.classList.remove("bg-transparent");
//         dark.classList.add("opacity-100");
//         dark.classList.add("bg-gray-900");
//       }, 600);
//     } else {
//       moon.classList.remove("right-3");
//       moon.classList.add("right-16");
//       stars.classList.remove("top-0");
//       stars.classList.add("-top-20");
//       dark.classList.remove("opacity-100");
//       dark.classList.add("opacity-0");
//       setTimeout(() => {
//         light.classList.remove("hidden");
//         setTimeout(() => {
//           sun.classList.remove("left-14");
//           sun.classList.add("left-0");
//           cloud.classList.remove("-bottom-20");
//           cloud.classList.add("bottom-0");
//         }, 10);
//       }, 600);
//     }
//   }