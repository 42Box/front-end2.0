import {
  Button,
  Box,
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
import { userState } from "../../recoil/states";
import { useRecoilValue } from "recoil";

export const BoardMain = ({
  boardType,
  boardId,
  title,
  writerProfileImgPath,
  writerNickname,
  regDate,
}) => {
  const navigate = useNavigate();
  const [onConFirmModal, setOnConFirmModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userStateValue = useRecoilValue(userState);

  const moveToEdit = () => {
    if (boardType === "script-boards") {
      navigate("/script/edit/" + boardId);
    } else if (boardType === "service-boards") {
      navigate("/service/edit/" + boardId);
    }
  };

  const isWriter = () => {
    if (userStateValue?.nickname === writerNickname) {
      return true;
    } else {
      return false;
    }
  };

  const deleteHandler = async () => {
    try {
      const response = await apiCall(
        "DELETE",
        `board-service/${boardType}/${boardId}`
      );
      console.log("delete status:", response.status);
      if (boardType === "script-boards") {
        navigate("/script/board");
      } else if (boardType === "service-boards") {
        navigate("/service/board");
      }
    } catch (error) {
      alert("게시물 삭제에 실패했습니다");
    }
  };
  return (
    <Box height="153px">
      <Box paddingTop="36px" />
      <Text fontSize="33px" fontWeight="500" margin={0}>
        {title}
      </Text>
      <Box paddingTop="17px" />
      <Flex justifyContent="space-between" alignItems="center" height="26px">
        <Flex alignItems="center" height="26px">
          <Image
            src={`https://42box.kr/${writerProfileImgPath}`}
            width="23px"
            height="23px"
          />
          <Flex paddingLeft="10px" />
          <Text fontSize="20px" textColor="#8E8E8E" margin={0}>
            {writerNickname}
          </Text>
          <Flex paddingLeft="10px" />
          <Text textColor="#8E8E8E" margin={0}>
            │
          </Text>
          <Flex paddingLeft="10px" />
          <Text fontSize="17px" margin={0}>
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
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
            {isMenuOpen && (
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
            )}
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
                취소하기
              </Button>
              <Button variant="ghost" onClick={deleteHandler}>
                삭제하기
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};
