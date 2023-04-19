import React from 'react'
import { Link } from "react-router-dom"
import img from "/src/assets/components/hero/amelie_img.jpg"
const Hero = () => {
  return (
   <section className='section-hero'>
    <div className="container hero-padding">
        <div className="hero-content">
            <div className="hero-greetings">
            <div className="hero-num"><span>(01)</span></div>
            <div className="hero-name">
            <h1>Welcome, <span className='underline'>I’m Amelie Smite</span> </h1>
            </div>
            <div className="hero-details">
                <p>I’m a full stack designer from New York, with vast experience in web design and development. I love the connection between design and technology, 
                    which is reflected in my design approach and vision.</p>
            </div>
            <a href="" className="learn-btn">Learn More</a>
            </div>

            <aside className="hero-side">
                <img className='hero-img' src={img} alt="" />                
                <Link to="about">    <div className="side-btn">
               &rarr;
               </div></Link>
               <p  className='side-option'>About Me</p>
            </aside>
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

export default Hero