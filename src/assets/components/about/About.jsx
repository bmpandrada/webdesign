import React from 'react'
import { Link } from "react-router-dom"
const About = () => {
  return (
    <section className='section-about'>
    <div className="container hero-padding">
        <div className="about-content">
            <div className="about-greetings">
            <div className="hero-num"><span>(02)</span></div>
            <div className="about-name">
            <h1>Welcome, <span className='underline'>About Me</span> </h1>
            </div>
            <div className="hero-details">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            </div>
            
            </div>

            <aside className="about-side">
                <div className="about-flex">
                    <ul>
                        <li>Web design</li>
                        <li>Web development</li>
                    </ul>
                </div>
                <Link to="/">    <div className="left-btn">
               &larr;
               </div></Link>
                <Link to="/">    <div className="side-btn">
               &rarr;
               </div></Link>
               <p className='side-option'>Home</p>
            </aside>
             <div className="footer-about">
            <div className="personal">
                <h2>Personal Details</h2>
                <ul className="personal-list">
                    <li>email@gmail.com</li>
                </ul>
            </div>
            <div className="social-details">
            <h2>Social Links</h2>
            <ul className="Social-list">
                    <li>Fb</li>
                    <li>Instagram</li>
                    <li>Linked</li>
                    <li>Git</li>
                </ul>
            </div>
            <div className="language-details">
                <h2>Languages</h2>
                <ul className="language-list">
                    <li>Filipino</li>
                    <li>English</li>
                </ul>
            </div>
        </div>
       
        </div>

       
        <div className="hero-social">
            <ul>
                <li>
                <ion-icon name="logo-linkedin"></ion-icon>
                </li>
                <li>
                <ion-icon name="logo-facebook"></ion-icon>
                </li>
                <li>
                <ion-icon name="logo-instagram"></ion-icon>
                </li>
                <li>
                <ion-icon name="logo-behance"></ion-icon>
                </li>
            </ul>
        </div>
    </div>
  
   </section>
  )
}

export default About