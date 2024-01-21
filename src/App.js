import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
// import Skills from './components/Skills';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {

  
  const[webMode, setWebMode] = useState ('dark');
  const toggleMode = () => {
    if(webMode === 'light'){
      setWebMode('dark');
      document.body.style.backgroundColor = 'rgb(32,32,43)';
      document.body.style.color = 'white'
    }
    else{
      setWebMode('light');
      document.body.style.backgroundColor = 'rgb(208, 208, 208)';
      document.body.style.color = 'black'
    }
  }
  return (
 
    <div>
 
    <Navbar webMode = {webMode} toggleMode ={ toggleMode }/>
    <Home webMode = {webMode} toggleMode ={ toggleMode } />
    <About webMode = {webMode} toggleMode ={ toggleMode }/>
    <Projects webMode = {webMode} toggleMode ={ toggleMode }/>
    {/* <Skills webMode = {webMode} toggleMode ={ toggleMode }/> */}
    <Services webMode = {webMode} toggleMode ={ toggleMode }/>
    <Contact webMode = {webMode} toggleMode ={ toggleMode }/>
    <Footer/>


    </div>


  );
}

export default App;
