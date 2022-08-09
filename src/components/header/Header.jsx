import React from 'react'
import './heder.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import Headersocial from './Headersocial'
import TAypewriter from './TAypewriter'

const Header = () => {
  return (
    <header>

      <div className='container header_container'>

        <h5>Hello I'm</h5>
        <h1>Akash Panmand</h1>
        <h5 className='text-light' >
        <TAypewriter />
        </h5>
      
        <CTA />
        
        <Headersocial />
        

        {/* =========== my image heare======= */}
        <div className="me">
          <img src={me} alt="me" />
          
          

        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default Header