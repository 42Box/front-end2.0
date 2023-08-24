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
      <a
        className="ad-image-link"
        href="https://42seoul.kr" // 여기에 링크 주소를 넣으세요
        target="_blank" // 새 탭에서 열도록 설정
        rel="noopener noreferrer" // 보안 및 웹 접근성을 위해 필요한 속성
      >
        <img className="ad-image" src={adImages[currentAd]} alt="Ad Banner" />
      </a>
    </div>
  );
};

export default AdBanner;
