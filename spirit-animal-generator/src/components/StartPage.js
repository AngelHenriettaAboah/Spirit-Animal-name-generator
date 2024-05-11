import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "./banner2.jpg";
import "./StartPage.css";
const StartPage = () => {
  return (
    <div className="start-page">
      <h1>Welcome to the Spirit Animal Generator!</h1>
      <Link to="/generator" className="start-button">
        Start
      </Link>
      <img src={bannerImage} alt="Banner" className="banner-image" />
    </div>
  );
};

export default StartPage;
