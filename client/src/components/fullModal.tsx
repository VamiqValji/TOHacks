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
                        {/* <Button mt={4} colorScheme="brand" onClick={invertModalState}>Okay</Button> */}
                            <div className="pop">
                                {children}
                                <Box as="p" color={"grey"}>Click out of the box to exit modal.</Box> 
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