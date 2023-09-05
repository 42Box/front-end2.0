import {
  Button,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { ReactComponent as MeatBallIcon } from "../../asset/meatball-menu.svg";
import DateComponent from "../Util/DateComponent";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import apiCall from "../../util/apiCall";

export const BoardMain = ({
  boardId,
  title,
  writerProfileImgPath,
  writerNickname,
  regDate,
}) => {
  const navigate = useNavigate();
  const [onConFirmModal, setOnConFirmModal] = useState(false);
  const moveToEdit = () => {
    navigate("/script/edit/" + boardId);
  };

  const isWriter = () => {
    let userNickname = "";
    const userStateJson = localStorage.getItem("userState");
    if (userStateJson) {
      userNickname = JSON.parse(userStateJson).nickname;
    }
    console.log(userStateJson);
    if (userNickname === writerNickname) return true;
  };

  const deleteHandler = async () => {
    try {
      await apiCall("DELETE", `board-service/script-boards/${boardId}`);
      navigate("/script/board");
    } catch (error) {
      alert("게시물 삭제에 실패했습니다");
    }
  };
  return (
    <>
      <Text fontSize="27px" fontWeight="500">
        {title}
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Image
            src={`https://42box.kr/${writerProfileImgPath}`}
            width="23px"
            height="23px"
          />
          <Text
            fontSize="20px"
            marginLeft="8px"
            marginRight="0px"
            textColor="#8E8E8E"
          >
            {writerNickname}
          </Text>
          <Text marginLeft="5px" marginRight="5px" textColor="#8E8E8E">
            │
          </Text>
          <Text paddingTop="2px" fontSize="17px">
            <DateComponent date={regDate} />
          </Text>
        </Flex>
        {isWriter() && (
          <Menu>
            <MenuButton
              border="none"
              as={IconButton}
              icon={<MeatBallIcon />}
              backgroundColor="white"
              _hover={{ bg: "gray.200" }}
            />
            <MenuList minWidth="unset" width="auto" borderRadius="10">
              <Flex direction="row" align="center" justify="center">
                <MenuItem
                  minWidth="unset"
                  width="auto"
                  icon={<EditIcon />}
                  onClick={moveToEdit}
                >
                  수정
                </MenuItem>
                <MenuItem
                  minWidth="unset"
                  width="auto"
                  icon={<DeleteIcon />}
                  onClick={() => setOnConFirmModal(true)}
                >
                  삭제
                </MenuItem>
              </Flex>
            </MenuList>
          </Menu>
        )}
      </Flex>
      {onConFirmModal && (
        <Modal isOpen={onConFirmModal} onClose={() => setOnConFirmModal(false)}>
          <ModalOverlay />
          <ModalContent justifyContent="center" alignContent="center">
            <ModalHeader>❌삭제❌</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>정말 삭제하시겠습니까?!</Text>
            </ModalBody>
            <ModalFooter>
              <Button
                backgroundColor="#FF9548"
                color="#FFF0E5"
                mr={3}
                onClick={() => {
                  setOnConFirmModal(false);
                }}
              >
                ✨ 취소하기
              </Button>
              <Button variant="ghost" onClick={deleteHandler}>
                💥 삭제하기
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
