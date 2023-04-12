import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import AboutMe from './Pages/AboutMe/AboutMe'
import Experience from './Pages/Experience/Experience'
import HorizontalText from './Components/HorizontalText/HorizontalText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Home/>
        {/* <HorizontalText baseVelocity={2}>About me</HorizontalText> */}
        <AboutMe/>
        {/* <HorizontalText baseVelocity={-2}>Experience</HorizontalText> */}
        <Experience/>
    </div>
  )
}

export default App
