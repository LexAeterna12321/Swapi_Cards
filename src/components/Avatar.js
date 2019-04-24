import React from "react";

const Avatar = ({ name }) => {
  return (
    <section className="card__avatar">
      {name === "C-3PO" ? (
        <img className="card__avatar__img" src="./img/c3po.jpg" alt="c-3po" />
      ) : (
        <img
          className="card__avatar__img"
          src="./img/luke.jpg"
          alt="Luke Skywalkwer"
        />
      )}
    </section>
  );
};
export default Avatar;
