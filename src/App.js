import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam"/>
        <footer>This project was coded by {" "} 
        <a href="https://clever-varahamihira-8d6483.netlify.app" target="_blank" rel="noreferrer"> Kim Wauben </a>
        and is {" "}
        <a href="https://github.com/KimW1998/react-weather-app-final" target="_blank" rel="noreferrer"> Open-sourced on GitHub</a>
        </footer>
    </div>
    </div>
  );
}

export default App;
