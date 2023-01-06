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
    <section className="experience" id="experience">
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="box">
          <h3>Front-end Technologies</h3>
          <ul className="frontend">
            <li>
              <SiHtml5 className="icon" />
              <h4>HTML</h4>
            </li>
            <li>
              <DiCss3 className="icon" />
              <h4>CSS</h4>
            </li>
            <li>
              <TbBrandJavascript className="icon" />
              <h4>JavaScript</h4>
            </li>
            <li>
              <FaReact className="icon" />
              <h4>REACT</h4>
            </li>
          </ul>
        </div>

        <div className="box">
          <h3>Back-end Technologies</h3>
          <ul className="backend">
            <li>
              <GrMysql className="icon" />
              <h4>MySQL</h4>
            </li>
            <li>
              <FaNodeJs className="icon" />
              <h4>Node.js</h4>
            </li>
            <li>
              <FaNodeJs className="icon" />
              <h4>Node.js</h4>
            </li>
            <li>
            
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
