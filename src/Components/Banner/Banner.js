import React from 'react';
import './Banner.css'; // Import CSS for styling the banner
import bannerImage from './img.png';


const Banner = ({ text, discount, hours, minutes }) => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-text">{text}</h1>
        <p className="banner-discount">Flat {discount}% OFF</p>
        <p className="banner-timer">
          {hours} Hours {minutes} Mins
        </p>
        <button className="banner-button">Explore now</button>
      </div>
      <div className="banner-image">
        <img
          src={bannerImage} // Reference the uploaded image here
          alt="Shopping Banner"
          className="banner-model-image"
        />
      </div>
    </div>
  );
};

export default Banner;
