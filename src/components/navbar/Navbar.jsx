import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './navBar.css'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar">
  <div class="container-fluid">
    <a class="navbar-brand videoText">Video Club</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
    
  )
}

export default Navbar