import { Flex, Icon, Text } from "@chakra-ui/react";
import { ReactComponent as PlusIcon } from "../../../asset/plus.svg";

const FileSelectButton = ({ onClick, accept, onFileChange, selectedFile }) => {
  return (
    <Flex onClick={onClick} height="100%" alignItems="center" cursor="pointer">
      <input
        type="file"
        id="fileInput"
        onChange={onFileChange}
        accept={accept}
        style={{ display: "none" }}
      />
      <Icon as={PlusIcon} boxSize={6} />
      <Text fontSize="18px" color="#FF9548" variant="ghost" fontWeight="700">
        파일 선택
      </Text>
      <Flex paddingLeft="15px" />
      <Text fontSize="18px" color="gray" value={selectedFile}>
        {selectedFile?.name}
      </Text>
    </Flex>
  );
};

export default FileSelectButton;
