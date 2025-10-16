import React from 'react'
import User from './components/User'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import State from './hooks/State'
import About from './pages/About'
import Contact from './pages/Contact'
import {Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <User 
        name="ronaldo" 
        department="cse" 
        skills={["c", "c++", "java", "Mern", "python"]} 
        values={[1, 2, 3, 4, 5]} 
      />
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/state" element={<State />} />
          <Route path="/About" element={<About />} />
             <Route path="/Contact" element={<Contact />} />
        </Routes>
    </>
  )
}

export default App
