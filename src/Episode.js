import React, { Component } from "react";
import GameOfThrones from "./data/Game_of_thrones.json";

class Episode extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return GameOfThrones.map(episode => (
      <div>
        <h2>{episode.name}</h2>
        <img src={episode.image != null && episode.image.medium} />
        <p>{episode.summary}</p>
      </div>
    ));
  }
}

export default Episode;
