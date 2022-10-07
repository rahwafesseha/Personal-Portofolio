import React from "react";
import CV from "../../assets/RAHWA G.MICHAEL.pdf";
const Headbtn = () => {
  return (
    <div className="headbtn">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-contact">
        Contact me
      </a>
    </div>
  );
};

export default Headbtn;
