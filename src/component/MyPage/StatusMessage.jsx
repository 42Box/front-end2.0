import React, { useState } from "react";
import {
  Flex,
  Input,
  Text,
  Icon,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { ReactComponent as SaveIcon } from "../../asset/statusMessageSaveIcon.svg";
import { ReactComponent as EditIcon } from "../../asset/statusMessageEditIcon.svg";
import apiCall from "../../util/apiCall";

const StatusMessage = ({ userState, setUserState }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(userState.statusMessage);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSave = async () => {
    apiCall("PUT", "user-service/users/me/status-message", {
      statusMessage: inputValue,
    })
      .then((response) => {
        setUserState({
          ...userState,
          statusMessage: response.data.statusMessage,
        });
      })
      .catch((error) => {
        console.log("error updating status message", error);
      });
    setIsEditing(false);
  };

  const commonStyles = {
    width: "265px",
    height: "41.25px",
    borderRadius: "13px",
    fontSize: "20px",
    fontWeight: "400",
  };

  return (
    <>
      {isEditing ? (
        <InputGroup width="265px" alignSelf="center">
          <Input
            {...commonStyles}
            value={userState.statusMessage}
            backgroundColor="#FFFFFF"
            borderColor="#FF9548"
            onChange={handleInputChange}
            focusBorderColor="#FF9548"
            _hover={{ borderColor: "none" }}
            textAlign="center"
          />
          <InputRightElement>
            <Icon
              as={SaveIcon}
              onClick={handleSave}
              _hover={{ cursor: "pointer" }}
              boxSize={5}
            ></Icon>
          </InputRightElement>
        </InputGroup>
      ) : (
        <>
          <Flex
            {...commonStyles}
            backgroundColor="#E7E7E7"
            alignItems="center"
            alignSelf="center"
            justifyContent="center"
            position="relative"
          >
            <Text
              color="#5B5B5B"
              fontSize="20px"
              fontWeight="400"
              zIndex={10}
              position="absolute"
              left="50%"
              top="50%"
              transform="translate(-50%, -50%)"
            >
              {userState.statusMessage}
            </Text>
            <Icon
              as={EditIcon}
              onClick={handleEditClick}
              _hover={{ cursor: "pointer" }}
              boxSize={5}
              zIndex={10}
              position="absolute"
              right="2.5"
              top="50%"
              transform="translateY(-50%)"
            />
          </Flex>
        </>
      )}
    </>
  );
};

export default StatusMessage;
