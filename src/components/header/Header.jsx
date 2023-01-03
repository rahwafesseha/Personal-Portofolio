import React from "react";
import "./header.css";
import Headbtn from "./Headbtn";
import image from "../../assets/myImage.JPG";
import HeaderContacts from "./HeaderContacts";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h5>Hello I am</h5>
        <h1>Rahwa Ghebremichael</h1>
        <h5 className="qualification">Fullstack Developer</h5>
        <Headbtn />
        <HeaderContacts />
        <div className="image">
          <img src={image} alt="me" />
        </div>
        <a href="#contact" className="contact">Contact Us</a>
      </div>
    </header>
  );
};

export default Header;
