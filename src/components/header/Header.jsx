import React from 'react'
import Headbtn from './Headbtn';
import image from '../../assets/myImage.jpeg';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <h5>Hello I am</h5>
        <h1>Rahwa Ghebremichael</h1>
        <h5 className='qualification'>Fullstack Developer</h5>
        <Headbtn/>
        <div className='image'>
          <img src={image} alt="me"/>
          </div>
      </div>
    </header>
  );
}

export default Header