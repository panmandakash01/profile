import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pelaii8', 'template_ky6xq8i', form.current, 'Mu5i3yK_6xofg5cjw')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_option">
          <article className="contact_options">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5></h5>
            <a href="mailto:panmandak01@gmai.com" target="blank">
              Send Email
            </a>
          </article>

          <article className="contact_options">
          <BsInstagram  className="contact_option-icon"/>
            <h4>Instagram</h4>
            
            <h5></h5>
            <a
              href="https://www.instagram.com/developer_bounty/"
              target="blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact_options">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whattsapp</h4>
            <h5></h5>
            <a href="https://wa.me/+9307715564" target="blank">
              Send a Message
            </a>
          </article>
        </div>

        {/* ==========================   END OF CONTACT options================= */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email " placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
