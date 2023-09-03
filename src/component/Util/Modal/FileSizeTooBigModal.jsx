import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import BasicButton from "../Button/BasicButton";

const FileSizeTooBigModal = ({ fileSizeLimit, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>첨부 가능 파일 사이즈 초과</ModalHeader>
        <ModalBody>{fileSizeLimit} 이하만 첨부 가능합니다.</ModalBody>

        <ModalFooter>
          <BasicButton onClick={onClose}>확인</BasicButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FileSizeTooBigModal;
