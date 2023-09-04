import { Button, Flex } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { DeleteIcon, DownloadIcon } from "@chakra-ui/icons";

export const ScriptPreviewButtons = ({
  dataSendToMac,
  userScriptSavedId,
  downloadFile,
  deleteFile,
}) => {
  return (
    <Flex justifyContent="flex-end" alignItems="center" zIndex={10}>
      <Button
        borderRadius="lg"
        border="1px #8E8E8E"
        backgroundColor="var(--DG-01, #D3D3D3)"
        color="#000000"
        margin="4px"
        zIndex={10}
        _hover={{
          border: "1.5px solid var(--Main-Orange, #FF9548)",
          background: "var(--Light-Orange, #FFF0E5)",
          color: "#FF9548",
        }}
        type="button"
        onClick={() => {
          console.log("on execute:", dataSendToMac);
          if (dataSendToMac.path) {
            window?.webkit?.messageHandlers.executeScript.postMessage(
              JSON.stringify(dataSendToMac),
            );
          }
        }}
      >
        <FaPlay />
      </Button>
      {userScriptSavedId === null ? (
        <Button
          bborderRadius="lg"
          border="1px #8E8E8E"
          backgroundColor="var(--DG-01, #D3D3D3)"
          color="#000000"
          margin="4px"
          zIndex={10}
          _hover={{
            border: "1.5px solid var(--Main-Orange, #FF9548)",
            background: "var(--Light-Orange, #FFF0E5)",
            color: "#FF9548",
          }}
          type="button"
          onClick={downloadFile}
        >
          <DownloadIcon />
        </Button>
      ) : (
        <Button
          borderRadius="lg"
          border="1px #8E8E8E"
          backgroundColor="var(--DG-01, #D3D3D3)"
          color="#000000"
          margin="4px"
          zIndex={10}
          _hover={{
            border: "1.5px solid var(--Main-Orange, #FF9548)",
            background: "var(--Light-Orange, #FFF0E5)",
            color: "#FF9548",
          }}
          type="button"
          onClick={deleteFile}
        >
          <DeleteIcon />
        </Button>
      )}
    </Flex>
  );
};
