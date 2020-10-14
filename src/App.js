import React, { Component } from "react";
import CharacterList from "./components/CharacterList";
import HeroList from "./components/HeroList";
import SquadStats from "./components/SquadStats";
import "./styles/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>SuperSquad</h2>
        <div className="col-md-4">
          <CharacterList />
        </div>
        <div className="col-md-4">
          <HeroList />
        </div>
        <div className="col-md-4">
          <SquadStats />
        </div>
      </div>
    );
  }
}

export default App;
