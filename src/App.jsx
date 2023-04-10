import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import AboutMe from './Pages/AboutMe/AboutMe'
import HorizontalText from './Components/HorizontalText/HorizontalText'
import Experience from './Pages/Experience/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Home/>
        {/* <HorizontalText baseVelocity={2}>About me</HorizontalText> */}
        {/* <HorizontalText baseVelocity={-2}>Experience</HorizontalText> */}
        <Experience/>
    </div>
  )
}

export default App
