import React, { useState } from 'react'
import ToggleSwitch from './components/ToggleSwitch'

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <div id="container" className={` ${theme === "light" ? "bg-white" : "bg-gray-950" } flex items-center justify-center h-screen`}>
      <ToggleSwitch setTheme={setTheme} />
    </div>
  )
}

export default App