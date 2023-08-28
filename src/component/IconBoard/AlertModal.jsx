import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

const AlertModal = ({ open, close, header, children }) => {
  return (
    <Modal isOpen={open} onClose={close}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader textAlign="center">{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center">{children}</ModalBody>
        <ModalFooter>
          <Button onClick={close}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AlertModal;
