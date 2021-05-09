import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

interface PleaseLoginProps {}

const PleaseLogin: React.FC<PleaseLoginProps> = () => {
    return (
    <>
        <Flex mt={4} justifyContent="center" alignContent="center" flexDirection="column" w={"100%"}>
            <Box m={"0 auto"} >
                <Heading>Please Login!</Heading>
                <Link to="login"><Button mt={4} variant={"outline"}>Take me to the login page!</Button></Link>
            </Box>
        </Flex>
    </>);
}

export default PleaseLogin;