import { Flex, Box } from '@chakra-ui/react';
import React from 'react';

interface MiddleOfScreenTextProps {}

const MiddleOfScreenText: React.FC<MiddleOfScreenTextProps> = ({children}) => {
    return (
    <>
        <Flex mt={4} justifyContent="center" alignContent="center" flexDirection="column" w={"100%"}>
            <Box m={"0 auto"} >
                { children }
            </Box>
        </Flex>
    </>);
}

export default MiddleOfScreenText;