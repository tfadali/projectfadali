import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavBar } from './NavBar'
import { Routes } from './Routes'

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Project Math</h2>
        <NavBar/>
        <Routes/>
      </div>
    </Router>
  )
}

export default App