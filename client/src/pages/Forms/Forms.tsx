import { Box, Text } from '@chakra-ui/layout';
import { Flex, Heading, HStack, Skeleton } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import ModalIndex from '../../components/ModalIndex';
import PleaseLogin from '../../components/pleaseLogin/PleaseLogin';
import { usersInterface, form } from "../../ts/interface/userInterface";

interface FormsProps {}

const Forms: React.FC<FormsProps> = () => {

    const [formsData, setFormsData] = useState<form[] | null>(null);
    const userState:usersInterface = useSelector((state:any) => state.user);

    const fetchForms = async () => {
        try {
            const { data } = await axios.get("http://localhost:3001/forms/view");
            let temp:form[] = data.data;
            temp.filter((form) => form.ownerUserId === userState.userId);
            setFormsData(temp);
            console.log("temp", temp, "fetch", data);
        } catch(e) { console.log(e); }
    }

    useEffect(() => {
        fetchForms();
    }, []);

    if (userState.userId === "") {
        return <PleaseLogin />;
    }

    const renderFormsData = () => {
        if (formsData === null) {
            return (
                // <ModalIndex>
                    <HStack>
                        <Skeleton height="20px"></Skeleton>
                        <Skeleton height="20px"></Skeleton>
                        <Skeleton height="20px"></Skeleton>
                    </HStack>
                // </ModalIndex>
            );
        } else if (formsData.length === 0) {
            return (
                // <ModalIndex>
                //     <Heading size="md">No forms created yet!</Heading>
                // </ModalIndex>
                <Heading size="md" fontWeight="normal" mt={4}>No forms created yet!</Heading>
            );
        } else if (formsData) {
            return formsData.map((form) => {
                return (
                <Box mt={4} bg={"blackAlpha.500"} p={4} borderRadius={4}>
                    <Heading>{form.title}</Heading>
                    <Text className="grey">{form.description}</Text>
                </Box>);
            });
        }
    };
 
    return (
    <>
        <Flex w={"50vw"} m={"0 auto"} mt={4} >
            <Box className="leftContainer" width={"50%"}>
                <Heading>Your Forms</Heading>
                {renderFormsData()}
            </Box>
            <Box className="rightContainer" width={"50%"}>
                <Heading>Your Forms' Responses</Heading>
            </Box>
        </Flex>
    </>);
}

export default Forms;