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
          maxWidth: "50px",
          maxHeight: "50px",
          marginLeft: "25px",
        }}
      />
      <Button
        size="xs"
        variant="ghost"
        onClick={() => onDelete(index)}
        marginLeft="25px"
      >
        ❌
      </Button>
    </div>
  );
};

export default ImagePreviewItem;
