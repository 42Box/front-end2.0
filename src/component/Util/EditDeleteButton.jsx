import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const EditDeleteButton = () => {
  return (
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
  );
};
