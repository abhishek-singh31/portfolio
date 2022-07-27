import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import "./App.css"
import Typewriter from "typewriter-effect"

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <div className='about-me'>
          <h1>Hi There 👋, I'm Abhishek
            <br/>
            <Typewriter
            options={{
              strings:[`a Web Developer`,`a Competitive Programmer`],
              autoStart: true,
              loop: true,
              cursor: '|'
            }}
          /> 
          </h1>
          <p>I'm a final year student at Jaypee Institute of Information
            Technology, Noida.
            <br/> 
            I'm pursuing my Bachelor's of Technology (Information 
            Technology) .
            <br/>
            I love to create beautiful websites. My current tech stack is MERN.
            <br/>
            Apart from Web Development, my Area of Interest lies in Competitive Programming.
          </p>
        </div>
        <img src='images/abhishek.webp' alt='abhishek' className='my-image'/>
      </div>
      <Footer/>
    </div>
  )
}

export default App