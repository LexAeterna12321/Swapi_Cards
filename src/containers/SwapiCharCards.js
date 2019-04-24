import React, { Component } from "react";
import axios from "axios";
import SwapiCharCard from "../components/SwapiCharCard";
import Avatar from "../components/Avatar";
import Description from "../components/Description";
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
    return (
      <div className="container">
        <div className="cards">
          {chars.map(char => {
            const { name, birth_year, gender, url } = char;

            return (
              <SwapiCharCard key={url}>
                <Avatar name={name} />
                <Description
                  name={name}
                  birth_year={birth_year}
                  gender={gender}
                />
              </SwapiCharCard>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SwapiCharCards;
