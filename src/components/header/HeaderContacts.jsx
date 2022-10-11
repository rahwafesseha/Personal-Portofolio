import React from 'react'
import {AiFillLinkedin} from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const HeaderContacts = () => {
  return (
    <div className="header_contacts">
      <a
        href="https://www.linkedin.com/in/rahwa-g-michael-4553301a1/"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/rahwafesseha " target="_blank">
        <FaGithubSquare />
      </a>
    </div>
  );
}

export default HeaderContacts