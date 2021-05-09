import { Box, Button, Flex, Heading, Input, Spinner, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MiddleOfScreenText from '../../components/MiddleOfScreenText';
import { form, question } from '../../ts/interface/userInterface';

interface FormProps {}

const Form: React.FC<FormProps> = () => {

    const [form, setForm] = useState<form | null>(null);
    const [buttonIsLoading, setButtonIsLoading] = useState<boolean>(false);

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

    const renderQuestions = () => {
        return form.questions.map((question) => {
            return (
                <>
                    <Box className="form_question" bg={"blackAlpha.500"} p={4} borderRadius={4} mt={4}>
                        <Text>{question.question}</Text>
                        <Input mt="2" mb="2" type="text" variant="filled" placeholder={question.description} required />
                        {/* <Input mb="2" type="text" value={id} style={{display:"none"}} required /> */}
                    </Box>
                </>
            );     
        });
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setButtonIsLoading(true);
        // api calls
        setButtonIsLoading(false);
    };

    return (
    <>
        <Box className="container" m={"0 auto"} bg={"blackAlpha.500"} p={4} borderRadius={4} mt={4}>
            <Heading size={"lg"}>{/*<b>Title:</b> */}{form.title}</Heading>
            <Text size={"md"}>{/*<b>Description:</b> */}{form.description}</Text>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                {renderQuestions()}
                <Flex justifyContent="center">
                    <Button size="lg" isLoading={buttonIsLoading} loadingText={"Submitting"} value={"Submit Form"} cursor="pointer" mt="4" type="submit" variant="solid" colorScheme="brand">
                        Submit Form
                    </Button>
                </Flex>
            </form>
        </Box>
    </>);
}

export default Form;