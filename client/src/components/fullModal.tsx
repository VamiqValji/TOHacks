import { Button, ModalContent, useDisclosure, Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Flex, Box  } from '@chakra-ui/react';
import React from 'react';

interface FullModalProps {
    open: boolean,
    invertModalState: () => void,
}

const FullModal: React.FC<FullModalProps> = ({open, invertModalState, children}) => {
    if (open) {
        return (
            <>
                <Flex flexDirection={"column"} justifyContent="center">
                    <div className="popBG">
                        <div className="popContainer">
                            <div className="pop">
                                {children}
                                {/* <Flex justifyContent="center" as="p" mt={4} color={"grey"}>Click out of the box to exit modal.</Flex>  */}
                                <Button mt={4} colorScheme="brand" onClick={invertModalState}>Back</Button>
                            </div>
                        </div>
                    </div>
                </Flex>
            </>);
    } else {
        return <></>;
    }

}

export default FullModal;