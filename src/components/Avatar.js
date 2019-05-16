import React from "react";
import PropTypes from "prop-types";
import { Avatar as StyledAvatar, Image } from "./styledComponents";

const Avatar = ({ name }) => (
  <StyledAvatar>
    {name === "C-3PO" ? (
      <Image src="./img/c3po.jpg" alt="c-3po" />
    ) : (
      <Image src="./img/luke.jpg" alt="Luke Skywalkwer" />
    )}
  </StyledAvatar>
);

Avatar.propTypes = {
  name: PropTypes.string.isRequired
};

export default Avatar;
