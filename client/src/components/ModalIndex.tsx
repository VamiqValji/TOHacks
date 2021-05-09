import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

import React, { useEffect } from 'react';

interface ModalIndexProps {
    modalTitle?: string,
}

const ModalIndex: React.FC<ModalIndexProps> = ({children, modalTitle="Notice"}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        onOpen();
    }, [onOpen]);

    return (
      <>
      <Button onClick={onOpen}>Open Modal</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme="blue" mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant="outline">Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
      </>
    );
}

export default ModalIndex;