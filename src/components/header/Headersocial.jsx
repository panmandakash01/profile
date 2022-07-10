import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'

const Headersocial = () => {
  return (
    <div className='heder__socials' >
        <a href='https://www.linkedin.com/in/akashpnmand01/' target="blank"><BsLinkedin /></a>
        <a href='https://github.com/panmandakash01' target="blank"><BsGithub /></a>
        <a href='https://www.instagram.com/developer_bounty/' target="blank"><GrInstagram /></a>
        
    </div>
  )
}

export default Headersocial