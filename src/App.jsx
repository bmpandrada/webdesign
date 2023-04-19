
import React,{ Fragment } from "react"
import Header from "./assets/components/header/Header"
import Hero from "./assets/components/hero/Hero"
import About from "./assets/components/about/About"
import { Routes, Route } from "react-router-dom"
function App() {
  

  return (
    (<React.Fragment>
      <Header />
      <Routes>
      <Route path="/" element={ <Hero/> } />
      <Route path="/about" element={ <About/> } />
      </Routes>
      </React.Fragment>)
  )
}

export default App
