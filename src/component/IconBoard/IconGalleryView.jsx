//import IconGalleryItem from "./IconGalleryItem";
import { Box, Image, Text } from "@chakra-ui/react";
import teamPicture from "../../asset/easteregg.png";

import "./IconGalleryView.css";

// const images = [
//   "https://cdn.intra.42.fr/users/f9fcd02c969418126c1ecb69df8728a0/jincpark.jpg",
//   "https://cdn.intra.42.fr/users/f9fcd02c969418126c1ecb69df8728a0/jincpark.jpg",
//   "https://cdn.intra.42.fr/users/f9fcd02c969418126c1ecb69df8728a0/jincpark.jpg",
//   "https://cdn.intra.42.fr/users/f9fcd02c969418126c1ecb69df8728a0/jincpark.jpg",
//   "https://cdn.intra.42.fr/users/f9fcd02c969418126c1ecb69df8728a0/jincpark.jpg",
//   "https://cdn.intra.42.fr/users/f9fcd02c969418126c1ecb69df8728a0/jincpark.jpg",
//   // ... Add more image paths here
//];

const IconGallaryView = () => {
  return (
    // <div className="icon-gallery-view">
    //   {images.map((image, index) => (
    //     <IconGalleryItem key={index} imagePath={image} />
    //   ))}
    // </div>
    <Box align="center">
      <Image src={teamPicture} width="100%" />
      <Text fontSize="30px" fontWeight="800">
        42Box 화이팅!!!!
      </Text>
    </Box>
  );
};

export default IconGallaryView;
