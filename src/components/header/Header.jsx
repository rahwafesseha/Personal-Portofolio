import React from "react";
import "./header.css"
import Headbtn from "./Headbtn";
import image from "../../assets/myImage.jpeg";
import HeaderContacts from "./HeaderContacts";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h5>Hello I am</h5>
        <h1>Rahwa Ghebremichael</h1>
        <h5 className="qualification">Fullstack Developer</h5>
        <Headbtn />
        <HeaderContacts/>
        <div className="image">
          <img
            style={{ width: "200px", height: "200px", borderRadius: "50%", marginTop:"3rem" }}
            src={image}
            alt="me"
          />
        </div>
        <a href="#contact">Conta</a>
      </div>
    </header>
  );
};

export default Header;
