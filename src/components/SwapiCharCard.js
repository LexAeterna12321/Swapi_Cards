import React from "react";
import PropTypes from "prop-types";
import { Card } from "./styledComponents";

const SwapiCharCard = ({ children }) => <Card>{children}</Card>;

SwapiCharCard.propTypes = {
  Avatar: PropTypes.element,
  Description: PropTypes.element
};

export default SwapiCharCard;
