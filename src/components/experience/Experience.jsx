import React from "react";
import "./experience.css";
import { SiHtml5 } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div>
          <h3>Front-end Technologies</h3>
          <div>
            <article>
              <SiHtml5 />
              <h4>HTML</h4>
            </article>
            <article>
              <DiCss3 />
              <h4>CSS</h4>
            </article>
            <article>
              <TbBrandJavascript />
              <h4>JavaScript</h4>
            </article>
            <article>
              <FaReact />
              <h4>REACT</h4>
            </article>
          </div>
        </div>
        <div>
          <h3>Back-end Technologies</h3>
          <article>
            <GrMysql />
            <h4>MySQL</h4>
          </article>
          <article>
            <FaNodeJs />
            <h4>Node.js</h4>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
