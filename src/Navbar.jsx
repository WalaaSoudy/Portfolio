import React from 'react'
import {Link} from 'react-router-dom'
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-4 ">
  <div className="container">
    <Link className="navbar-brand text-uppercase fs-2" to="">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Contact">Contact</Link>
        </li>
      
      </ul>
      </div>
  </div>
</nav>

  </>
  )
}

export default Navbar