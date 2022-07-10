import React from "react";
import "./about.css";
import risk from "../../assets/risk.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_mee">

          <div className="about_me-image">
            <img src={risk} alt="Aboutimage" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>0+ Years fresher</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clientes</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
            dolorum officiis voluptas ratione deleniti beatae vero dolore dicta
            similique officia, ab id error cum magni assumenda ad temporibus
            eaque cumque.
          </p>
          <a href="#contact"className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
