import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import router from './router'


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        {router}
      </HashRouter>
    </div>
  );
}

export default App;
