import {
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ReactComponent as MeatBallIcon } from "../../asset/meatball-menu.svg";
import DateComponent from "../Util/DateComponent";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const BoardMain = ({
  boardId,
  title,
  writerProfileImgPath,
  writerNickname,
  regDate,
}) => {
  const navigate = useNavigate();
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
                <MenuItem minWidth="unset" width="auto" icon={<DeleteIcon />}>
                  삭제
                </MenuItem>
              </Flex>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </>
  );
};
