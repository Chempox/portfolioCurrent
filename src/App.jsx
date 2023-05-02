import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import Fanguest from './Pages/Fanguest/fanguest'
import Bamx from './Pages/Bamx/Bamx'
import Kindorse from './Pages/Kindorse/Kindorse'
import CityOfFestivals from './Pages/CiytOfFestivals/CityOfFestivals'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/experience/fanguest" element={<Fanguest/>} />
        <Route path="/experience/kindorse" element={<Kindorse/>} />
        <Route path="/experience/bamx" element={<Bamx/>} />
        <Route path="/experience/city-of-festivals" element={<CityOfFestivals/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
