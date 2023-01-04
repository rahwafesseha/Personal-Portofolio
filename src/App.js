import React from 'react'
import "./App.css";
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    
    </>
  );
}

export default App