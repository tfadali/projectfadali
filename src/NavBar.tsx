import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => (
    <header className="App-header">
        <nav className="nav-bar">
            <NavLink activeClassName="activeLink" to="/about">About</NavLink>
            <NavLink activeClassName="activeLink" to="/problems">Problems</NavLink>
            <NavLink activeClassName="activeLink" to="/register">Register</NavLink>
            <NavLink activeClassName="activeLink" to="/login">Sign In</NavLink>
        </nav>
    </header>
)