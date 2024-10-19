import './App.css';
import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <About username="Basat Maqsood" />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
