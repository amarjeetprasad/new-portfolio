import React from "react";
import "./TeamCard.css";

function TeamCard({ name, img }) {
  return (
    <div className="team_card_container">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
        explicabo quibusdam nulla.
      </p>
    </div>
  );
}

export default TeamCard;
