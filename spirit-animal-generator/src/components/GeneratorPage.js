import React from "react";
import SpiritAnimalGenerator from "./SpiritAnimalGenerator";
import bannerImage from "./banner1.jpg";
import "./GeneratorPage.css";

const GeneratorPage = () => {
  return (
    <div className="generator-page">
      <img
        src={bannerImage}
        alt="Spirit Animal Banner"
        className="banner-image"
      />
      <SpiritAnimalGenerator />
    </div>
  );
};

export default GeneratorPage;
