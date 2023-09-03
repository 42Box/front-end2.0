import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import BasicButton from "../Button/BasicButton";

const ConfirmCancle = ({ onClick, onCancle }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <BasicButton onClick={onOpen}>취소</BasicButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>글 작성하기</ModalHeader>
          <ModalBody>취소하시겠습니까?</ModalBody>

          <ModalFooter>
            <BasicButton onClick={onCancle}>예</BasicButton>
            <BasicButton onClick={onClose}>아니오</BasicButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConfirmCancle;
