import { useState, useEffect } from "react";
import { Flex, Image } from "@chakra-ui/react";

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
    <Flex
      width="704px"
      height="100px"
      flexShrink={0}
      borderRadius="14px"
      background="#F0F0F0"
      justifyContent="center"
      alignItems="center"
      margin="auto"
    >
      <a
        className="ad-image-link"
        href="https://42seoul.kr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="ad-image"
          src={adImages[currentAd]}
          alt="Ad Banner"
          borderRadius="14px"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </a>
    </Flex>
  );
};

export default AdBanner;
