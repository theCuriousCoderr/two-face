import React from 'react'

function SunRays() {
  return (
    <div className="relative">
    <div className="absolute -top-10 -left-14 w-40 h-40 rounded-full bg-slate-200 opacity-40"></div>
    <div className="absolute -top-10 -left-7 w-40 h-40 rounded-full bg-slate-200 opacity-30"></div>
    <div className="absolute -top-10 -left-1 w-40 h-40 rounded-full bg-slate-200 opacity-20"></div>
  </div>
  )
}

export default SunRays