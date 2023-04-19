import React, { useState } from 'react'
import pic from './amelie_img-150x150.jpg'
import { Link } from "react-router-dom"

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const handleChange = () =>{
    setToggle(!toggle)
  }
  return (
    <header className={`${toggle ? "main-header show" : "main-header"}`}>
    <div className="header-container">
      <div className="port-box">
        <img className="port-img" src={pic} alt="" />
       <div className="port-info">
       <h1 className="port-name">Amelie Smith</h1>
        <p className="port-title">Full Stack Designer</p>
       </div>
      </div>
      <nav className="navbar">
        <ul className="navbar-list">
        <Link onClick={handleChange} className="navbar-item" to="/"><a href="#">Home</a></Link>
          <Link onClick={handleChange} className="navbar-item" to="about"><a href="#">About</a></Link>
          <li onClick={handleChange} className="navbar-item"><a href="#">Experience</a></li>
          <li onClick={handleChange} className="navbar-item"><a href="#">Education</a></li>
          <li onClick={handleChange} className="navbar-item"><a href="#">Skills</a></li>
          <li onClick={handleChange} className="navbar-item"><a href="#">Portfolio</a></li>
          <li onClick={handleChange} className="navbar-item"><a href="#">Cover Letter</a></li>
        </ul>
      </nav>
      <div onClick={handleChange} className="burger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="contact-box">
       <span className="dvc">
       
       <a href="" className="btn dcv">
       <ion-icon name="arrow-down-circle-outline"></ion-icon>
        Download CV</a>
        </span> 
        <span>
        <a href="" className="btn cm">Contact Me</a>
        </span>
      </div>
    </div>
  </header>
  )
}

export default Header