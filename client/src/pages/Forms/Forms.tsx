import { Box } from '@chakra-ui/layout';
import { Flex, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';

interface FormsProps {}

const Forms: React.FC<FormsProps> = () => {

    const fetchForms = async () => {
        try {
            const { data } = await axios.get("http://localhost:3001/forms/view");
            console.log(data)
        } catch(e) { console.log(e); }
    }

    useEffect(() => {
        fetchForms();
    }, [])

    return (
    <>
        <Flex w={"50vw"} m={"0 auto"} mt={4} >
            <Box className="leftContainer" width={"50%"}>
                <Heading>Your Forms</Heading>
            </Box>
            <Box className="rightContainer" width={"50%"}>
                <Heading>Your Forms' Responses</Heading>
            </Box>
        </Flex>
    </>);
}

export default Forms;