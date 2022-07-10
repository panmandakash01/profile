import React from "react";
import "./footer.css";
import {BsFacebook} from 'react-icons/bs'
import {BsMessenger} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillLinkedin} from "react-icons/ai"
import {SiIndeed} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        AKPA
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
    
          <a href="#experience">Experence</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#testmonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials"target='blank'>
        <a href="https://www.facebook.com/akash.panmand01/"target='blank'>
          <BsFacebook />

        </a>
        <a href="https://www.facebook.com/akash.panmand01/"target='blank'>
          <BsMessenger />

        </a>
        <a href="https://twitter.com/"target='blank'>

          <BsTwitter />

        </a>
        <a href="https://www.youtube.com/channel/UC2_8UZIcjwFYDv8ow1a60rg" target='blank'>
          <AiFillYoutube />

        </a>
        <a href="www.indeed.com"target='blank'>
          <SiIndeed />
        

        </a>

        <a href="https://www.linkedin.com/in/akashpnmand01/"target='blank'>
          <AiFillLinkedin />

        </a>

        
      </div>
      <div className="footer_copyright">
        <small>&copy; AKPA. All rights reserved 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
