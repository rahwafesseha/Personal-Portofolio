import React from 'react'
import "./about.css"


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div>
        <article>
          
          <p>
            I am a passionate and self-driven Full Stack Developer. After
            earning a degree in marine engineering and working as a Maths tutor,
            I later decided to study network administration because I have
            always been interested in IT. However, it was during lockdown that I
            discovered my true passion and began to learn to code. I built
            full-stack web applications using technologies such as HTML, CSS,
            JavaScript, react, node, and PostgreSQL both independently and in
            teams. I appreciate using technology to find solutions to problems
            in the real world, and I like CISCO and the hardware and software
            that form the foundation of network communication.
          </p>
        </article>
        <a href="#contact" className="btn about_me"> Reach Me...</a>
      </div>
    </section>
  );
}

export default About