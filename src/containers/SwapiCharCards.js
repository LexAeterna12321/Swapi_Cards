import React, { Component } from "react";
import axios from "axios";
import SwapiCharCard from "../components/SwapiCharCard";
import Avatar from "../components/Avatar";
import Description from "../components/Description";
import { Container, Cards } from "../components/styledComponents";
class SwapiCharCards extends Component {
  state = { chars: [] };
  apiURL = `https://swapi.co/api`;

  componentDidMount() {
    this.getCharsPersonalData().then(chars =>
      this.setState({ chars: [...chars] })
    );
  }

  getCharsPersonalData = async () => {
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
      <Container>
        <Cards>
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
        </Cards>
      </Container>
    );
  }
}

export default SwapiCharCards;
