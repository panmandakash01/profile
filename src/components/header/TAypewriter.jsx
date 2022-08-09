import React from 'react'
import './Typewriter.css'
import Typewriter from 'typewriter-effect'
// import Typewriter from 'react-simple-typewriter/dist/reducer'

const TAypewriter = () => {
  return (
    <div>
        <Typewriter 

        onInit={(typewriter)=>{
          typewriter.typeString('UX/UI Designer ')
          .pauseFor(2000)
          .deleteAll()
          typewriter.typeString('Frontend Developer ')
          .pauseFor(2000)
          .deleteAll()
          typewriter.typeString('Backend Developer ')
          .pauseFor(2000)
          .deleteAll()
          typewriter.typeString('Fullstack Developer ')
          .start();
        }}
        // loop
        // cursor
        // cursorStyle="_"
        // typeSpeed={70}
        // deleteSpeed={50}
        // delaySpeed={1000}
        // words={['Developer','UX/UI Designer','Contact Me..']}
        />
        
    </div>
  )
}

export default TAypewriter