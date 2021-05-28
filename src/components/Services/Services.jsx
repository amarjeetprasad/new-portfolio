import React from "react";
import Card from "../ServicesCard/ServicesCard";
import "./Services.css";
import { FaPaintBrush } from "react-icons/fa";
import { MdFlipToFront, MdFlipToBack } from "react-icons/md";

function Services() {
  const img1 = <FaPaintBrush />;
  const img2 = <MdFlipToFront />;
  const img3 = <MdFlipToBack />;
  return (
    <div className="services_container" id="services">
      <div className="services_header">
        <h3>My Services</h3>
      </div>
      <div className="cards">
        <Card title="Web Design" image={img1} />
        <Card title="Front End Developer" image={img2} />
        <Card title="Back End Developer" image={img3} />
      </div>
    </div>
  );
}
export default Services;
