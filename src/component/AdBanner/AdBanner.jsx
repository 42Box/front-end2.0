import { useState, useEffect } from "react";

import "./AdBanner.css";

import banner1 from "../../asset/banner1.png";
import banner2 from "../../asset/banner2.png";
import banner3 from "../../asset/banner3.png";

const adImages = [banner1, banner2, banner3];

const AdBanner = () => {
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prevAd) => (prevAd + 1) % adImages.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="ad-banner">
      <img className="ad-image" src={adImages[currentAd]} alt="Ad Banner" />
    </div>
  );
};

export default AdBanner;
