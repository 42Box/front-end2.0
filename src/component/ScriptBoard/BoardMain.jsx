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
import DateComponent from "../Util/DateComponent";
import { DeleteIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";

export const BoardMain = ({
  title,
  writerProfileImgPath,
  writerNickname,
  regDate,
}) => {
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
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<EditIcon />}>수정하기</MenuItem>
            <MenuItem icon={<DeleteIcon />}>삭제하기</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};
