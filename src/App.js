import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {

  
  const[webMode, setWebMode] = useState ('light');
  const toggleMode = () => {
    if(webMode === 'light'){
      setWebMode('dark');
      document.body.backgroundColor = 'rgb(32,32,43)';
      document.body.color = 'white'
    }
    else{
      setWebMode('light');
      document.body.backgroundColor = 'rgb(208, 208, 208)';
      document.body.color = 'black'
    }
  }
  return (
 
    <div>
 
    <Navbar webMode = {webMode} toggleMode ={ toggleMode }/>
    <Home webMode = {webMode} toggleMode ={ toggleMode } />
    <About webMode = {webMode} toggleMode ={ toggleMode }/>
    <Projects webMode = {webMode} toggleMode ={ toggleMode }/>
    <Skills webMode = {webMode} toggleMode ={ toggleMode }/>
    <Services webMode = {webMode} toggleMode ={ toggleMode }/>
    <Contact webMode = {webMode} toggleMode ={ toggleMode }/>


    </div>


  );
}

export default App;
