import React from "react";
import "./Hero.css";
import handIcon from '../Assetes/hand-icon.png'
import arrowIcon from'../Assetes/arrow_icon.png'
import heroImage from '../Assetes/hero-model.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={handIcon} alt="" />
            </div>
            <p>collection</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest collection</div>
            <img src={arrowIcon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
