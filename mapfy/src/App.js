import React, { Component } from 'react';
import logo from '../src/Images/MapFy (1).png';
import './App.css';
import mapLink from './config.js';


class App extends Component {
  render() {
    return (
      
      
      <div className="Mapp">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Join the world of Business Maps
          </p>
          
          <a
            className="App-link"
            href= {mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Log in with LinkedIn
          </a>
        </header>
      </div>
    );
  }
}

export default App;
