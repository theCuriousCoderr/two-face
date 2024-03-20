import React from 'react';
import white_star_3x from "../images/white_star_3x.png";

function Stars() {
  return (
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
  )
}

export default Stars