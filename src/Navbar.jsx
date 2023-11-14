import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">React</a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item m-lg-3">
            <Link to="/app">Login</Link>
          </li>
          <li class="nav-item m-lg-3">
            <Link to="/reg">New Register</Link>
          </li>
          <li class="nav-item m-lg-3">
            <Link to="/log ">New Login</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="mar">
      <Outlet/>
    </div>
  </div>
  )
}

export default Navbar
