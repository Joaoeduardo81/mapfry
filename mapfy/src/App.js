import React, { Component } from 'react';
import logo from '../src/Images/MapFy (1).png';
import './App.css';


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
            href="https://api.mapbox.com/styles/v1/joaoeduardo81/cjid8yrqh12hj2sp773so06xb.html?fresh=true&title=true&access_token=pk.eyJ1Ijoiam9hb2VkdWFyZG84MSIsImEiOiJjamhiMXZiNWkwZnZ5MzZxOHQwaDFxMG0xIn0._GoTOrFGIaacbXOirE3fZg#11.7/-25.454561/-49.271874/0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Log in with LinkedIn
          </a>
          <script type="in/Login"></script>
        </header>
      </div>
    );
  }
}

export default App;
