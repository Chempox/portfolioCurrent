import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import Fanguest from './Pages/Fanguest/fanguest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/experience/fanguest" element={<Fanguest/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
