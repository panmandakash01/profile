import React from "react";
import "./experiance.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandBootstrap } from "react-icons/tb";
import { GrNode } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";

const Experiance = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Developement</h3>
          <div className="experence_content">
            <article className="experience_details">
              <AiOutlineHtml5 className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiCss3 className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <TbBrandJavascript className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icon" />
              <div>
                <h4>ASP.NET</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <SiReact className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <TbBrandTailwind className="experience_details-icon" />
              <div>
                <h4> Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <TbBrandBootstrap className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* ===================================== END OF FEONTEND=====================================      */}

        <div className="experience_backend">
          <h3>Backend Developement</h3>
          <div className="experence_content">
            <article className="experience_details">
              <GrNode className="experience_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <SiMongodb className="experience_details-icon" />
              <div>
                <h4>MangoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience_details">
              <FaPhp className="experience_details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <TbBrandPython className="experience_details-icon" />
              <div>
                <h4> Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <FaJava className="experience_details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <HiHashtag className="experience_details-icon" />
              <div>
                <h4> C#</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
