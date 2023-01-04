import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";

const Nav = () => {
  return (
    <nav>
      <a href="#" className="">
        <AiOutlineHome />
      </a>
      <a href="#about" className="">
        <FaUserAlt />
      </a>
      <a href="#experience" className="">
        <BsJournalBookmarkFill />
      </a>
      <a href="#contact" className="">
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
