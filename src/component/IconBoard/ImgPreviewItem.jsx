import { Button } from "@chakra-ui/react";

const ImagePreviewItem = ({ img, index, onDelete }) => {
  return (
    <div style={{ marginRight: "10px" }}>
      <img
        src={img}
        alt={`preview-${index}`}
        style={{
          width: "auto",
          height: "auto",
          maxWidth: "80px",
          maxHeight: "80px",
        }}
      />
      <Button size="xs" variant="ghost" onClick={() => onDelete(index)}>
        ❌
      </Button>
    </div>
  );
};

export default ImagePreviewItem;
