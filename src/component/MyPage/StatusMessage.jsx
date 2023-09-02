import React, { useState } from "react";
import { Flex, Input, Text, Icon } from "@chakra-ui/react";
import { ReactComponent as SaveIcon } from "../../asset/statusMessageSaveIcon.svg";
import { ReactComponent as EditIcon } from "../../asset/statusMessageEditIcon.svg";
import { ReactComponent as GrayPolygon } from "../../asset/gray-polygon.svg";
import { ReactComponent as OrangePolygon } from "../../asset/orange-polygon.svg";

const StatusMessage = ({ dummyUserState }) => {
  const [editingStatusMessage, setEditingStatusMessage] = useState(false);
  const [newStatusMessage, setNewStatusMessage] = useState(
    dummyUserState.statusMessage
  );

  const handleStatusMessageEditClick = () => {
    setEditingStatusMessage(true);
  };

  const handleStatusMessageChange = (event) => {
    setNewStatusMessage(event.target.value);
  };

  const handleStatusMessageSave = () => {
    // You should make an API call to update the status message on the server here.
    // Once the update is successful, you can set the new status message from the response.
    // Example: setNewStatusMessage(response.newStatusMessage);

    // For now, I'm updating the dummyUserState as a placeholder.
    dummyUserState.statusMessage = newStatusMessage;
    setEditingStatusMessage(false);
  };

  return (
    <>
      <Icon
        as={editingStatusMessage ? OrangePolygon : GrayPolygon}
        alignSelf="center"
      />
      <Flex
        width="265px"
        height="41.25px"
        borderRadius="13px"
        backgroundColor={editingStatusMessage ? "#FFFFFF" : "#E7E7E7"}
        borderColor={editingStatusMessage ? "#FF9548" : "#E7E7E7"}
        borderWidth="1px"
        alignSelf="center"
        align="center"
        justifyContent="center"
      >
        {editingStatusMessage ? (
          <Input
            textAlign="center"
            fontSize="20px"
            height="30px"
            fontWeight="400"
            value={newStatusMessage}
            borderColor="transparent"
            borderRadius="13px"
            backgroundColor="transparent"
            onChange={handleStatusMessageChange}
            _hover={{ borderColor: "transparent" }}
            _focus={{ boxShadow: "none", borderColor: "transparent" }}
          />
        ) : (
          <Flex alignItems="center" justifyContent="center" flex="1">
            <Text color="#5B5B5B" fontSize="20px" fontWeight="400">
              {dummyUserState.statusMessage}
            </Text>
          </Flex>
        )}
        <Icon
          as={editingStatusMessage ? SaveIcon : EditIcon}
          onClick={
            editingStatusMessage
              ? handleStatusMessageSave
              : handleStatusMessageEditClick
          }
          _hover={{ cursor: "pointer" }}
          boxSize={5}
          position="relative"
          right="11px"
        />
      </Flex>
    </>
  );
};

export default StatusMessage;
