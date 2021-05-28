import React from "react";
import "./ServicesCard.css";

function ServicesCard({ title, image }) {
  return (
    <div className="card_container">
      <div className="img">{image}</div>
      <h2>{title}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
        dignissimos blanditiis minus libero fugiat, sed, debitis veritatis quia
        maxime porro a molestias! Delectus aliquid ratione reiciendis unde
        exercitationem voluptas corporis.
      </p>
    </div>
  );
}
export default ServicesCard;
