import React from 'react'
import SunBackground from './SunBackground'
import MoonBackground from './MoonBackground'

function Background({theme}) {
  return (
    <div className='absolute w-full h-full bg-transparent overflow-hidden '>
        {theme === "light" ? <SunBackground /> : <MoonBackground theme={theme} />}
    </div>
  )
}

export default Background