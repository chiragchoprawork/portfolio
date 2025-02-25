import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
import {Skill} from './components/Skill';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("first");
  return (
    <div className="App">
      {/* <NavBar /> */}
      <NavBar setActiveTab={setActiveTab} />
      <Banner setActiveTab={setActiveTab} />
      {/* <Skills /> */}
      <Skill />
      {/* <Projects /> */}
      <Projects activeTab={activeTab} setActiveTab={setActiveTab} />  
      {/* <Contact /> */}
      <Footer />
      
      
     
   </div>
  );
}

export default App;
