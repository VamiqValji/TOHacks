import { Box, Heading, Spinner, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MiddleOfScreenText from '../../components/MiddleOfScreenText';
import { form, question } from '../../ts/interface/userInterface';

interface FormProps {}

const Form: React.FC<FormProps> = () => {

    const [form, setForm] = useState<form | null>(null);

    const { id }:{id: string} = useParams();

    const fetchData = async () => {
        try {
            const { data } = await axios.post("http://localhost:3001/forms/viewOne", {
                formId: id,
            });
            setForm(data.data);
            console.log(data.data);
        } catch (e) { console.log(e); }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (form === null) {
        return (
            <>
                <MiddleOfScreenText>
                    {/* <Heading>Loading or error...</Heading> */}
                    <Spinner size="xl"></Spinner>
                </MiddleOfScreenText>
            </>);
    };

    return (
    <>
        <Box className="container" p={4} borderRadius={4} mt={4}>
            <Heading></Heading>
            <Text></Text>           
        </Box>
    </>);
}

export default Form;