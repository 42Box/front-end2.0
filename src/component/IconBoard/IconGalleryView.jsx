import IconGalleryItem from "./IconGalleryItem";

import "./IconGalleryView.css";

const images = [
  "https://cdn.intra.42.fr/users/f9fcd02c969418126c1ecb69df8728a0/jincpark.jpg",
  "https://cdn.intra.42.fr/users/f9fcd02c969418126c1ecb69df8728a0/jincpark.jpg",
  "https://cdn.intra.42.fr/users/f9fcd02c969418126c1ecb69df8728a0/jincpark.jpg",
  "https://cdn.intra.42.fr/users/f9fcd02c969418126c1ecb69df8728a0/jincpark.jpg",
  "https://cdn.intra.42.fr/users/f9fcd02c969418126c1ecb69df8728a0/jincpark.jpg",
  "https://cdn.intra.42.fr/users/f9fcd02c969418126c1ecb69df8728a0/jincpark.jpg",
  // ... Add more image paths here
];

const IconGallaryView = () => {
  return (
    <div className="icon-gallery-view">
      {images.map((image, index) => (
        <IconGalleryItem key={index} imagePath={image} />
      ))}
    </div>
  );
};

export default IconGallaryView;
