import React from "react";
import PropTypes from "prop-types";
import { CardDescription } from "./styledComponents";

const Description = ({ name, birth_year, gender }) => (
  <CardDescription>
    <h3>Name: {name}</h3>
    <p>Birth Date: {birth_year}</p>
    <p>Gender: {gender}</p>
  </CardDescription>
);

Description.propTypes = {
  name: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired
};

export default Description;
