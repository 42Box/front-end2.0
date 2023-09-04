import {
  Flex,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import DateComponent from "../Util/DateComponent";

const PostMetaData = ({ postInfo }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex alignItems="center">
        <Image
          src={`https://42box.kr/${postInfo?.writerProfileImagePath}`}
          width="23px"
          height="23px"
        />
        <Text
          fontSize="20px"
          marginLeft="8px"
          marginRight="0px"
          textColor="#8E8E8E"
        >
          {postInfo?.writerNickname}
        </Text>
        <Text marginLeft="5px" marginRight="5px" textColor="#8E8E8E">
          │
        </Text>
        <DateComponent date={postInfo?.regDate} />
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
  );
};

export default PostMetaData;
