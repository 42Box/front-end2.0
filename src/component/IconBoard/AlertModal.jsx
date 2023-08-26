import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

const AlertModal = ({ open, close }) => {
  return (
    <Modal isOpen={open} onClose={close}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader textAlign="center">❌Denied❌</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center">
          <Text>확인해주세요!</Text>
          <Text>✅.png 이미지를 잘 첨부했나요?</Text>
          <Text>✅총 용량이 500KB 이하인가요?</Text>
          <Text>✅제목과 내용이 2자 이상인가요?</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={close}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AlertModal;
