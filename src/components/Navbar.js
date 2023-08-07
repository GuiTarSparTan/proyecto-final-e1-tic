import React from "react";
import logo from './images/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="nav-elements">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/FindUs">Find Us</a>
          </li>
          <li>
            <a href="/SharedFolder">Shared Folder</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar