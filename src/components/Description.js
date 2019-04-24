import React from "react";

const Description = ({ name, birth_year, gender }) => {
  return (
    <section className="card__description">
      <h3>Name: {name}</h3>
      <p>Birth Date: {birth_year}</p>
      <p>Gender: {gender}</p>
    </section>
  );
};

export default Description;
