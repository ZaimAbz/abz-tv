import React from "react";
import "./App.css";
import Episode from "./Episode";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Thrones - Episod List.</h1>
        <Episode />
      </header>
    </div>
  );
}

export default App;
