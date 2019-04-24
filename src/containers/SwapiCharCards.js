import React, { Component } from "react";
import axios from "axios";
import SwapiCharCard from "../components/SwapiCharCard";

class SwapiCharCards extends Component {
  state = { chars: [] };
  apiURL = `https://swapi.co/api`;
  componentDidMount() {
    this.getData().then(chars => this.setState({ chars: [...chars] }));
  }

  getData = async () => {
    const response = await axios.get(`${this.apiURL}/people`);
    const {
      data: { results }
    } = response;
    const chars = results.slice(0, 2);
    return chars;
  };

  render() {
    const { chars } = this.state;
    console.log({ chars });
    return (
      <div className="container">
        <div className="cards">
          {chars.map(char => (
            <SwapiCharCard key={char.url} char={char} />
          ))}
        </div>
      </div>
    );
  }
}

export default SwapiCharCards;
