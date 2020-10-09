import React from 'react'
import './App.css'
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Project Fadali</h2>
        <header className="App-header">
            <nav className="nav-bar">
              <NavLink activeClassName="activeLink" to="/about">about</NavLink>
              <NavLink activeClassName="activeLink" to="/problems">problems</NavLink>
            </nav>
        </header>
        <Switch>
          <Route path="/about">
            <h2>About Project Fadali</h2>
            <p>
              This is a little programming project I am working on, inspired by Project Euler.
              It seemed like a good fit for my current goals since it will allow me to
              show some of my full stack skill set while being simple enough to implement
              fairly quickly.
            </p>
            <p>
              I will be adding some interesting math problems in increasing difficulty.
              It remains to be seen whether I will get a domain name and release it to
              the public, but so far I only plan to come up with a few example problems.
            </p>
          </Route>
        </Switch>
        
      </div>
    </Router>
  )
}

export default App;
