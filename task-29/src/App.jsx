import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import ProjectGrid from './components/project';
import About from './components/about';
import Container from './components/container';
import Contact from './components/contact';
import Location from './components/location';

function App() {
   
  return (
    <>
    <Navbar/>
    <Header/>
    <ProjectGrid/>
    <About/>
    <Container/>
    <Contact/>
    <Location/>
     </>
  )

}

export default App