import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {

  return (  
    <div className="mainContainer">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App;
