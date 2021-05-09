import { Box, Button, Flex, Heading, Input, Spinner, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MiddleOfScreenText from '../../components/MiddleOfScreenText';
import { form, formResponse, question, response } from '../../ts/interface/userInterface';

interface FormProps {}

const Form: React.FC<FormProps> = () => {

    const [form, setForm] = useState<form | null>(null);
    const [buttonIsLoading, setButtonIsLoading] = useState<boolean>(false);

    const formContainerRef = React.useRef<HTMLFormElement | null>(null);
    const nameInputRef = React.useRef<HTMLInputElement | null>(null);
    const emailInputRef = React.useRef<HTMLInputElement | null>(null);

    const toast = useToast();

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
        return form.questions.map((question, idx:number) => {
            return (
                <>
                    <Box key={idx} className="form_question" bg={"blackAlpha.500"} p={4} borderRadius={4} mt={2}>
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
        try {
            setButtonIsLoading(true);

            let temp:ChildNode[] = []; // holds classname divs of "form_question" class

            formContainerRef.current?.childNodes.forEach((node:any) => {
                const isFormQuestion = node.className.includes("form_question");
                if (isFormQuestion) temp.push(node);
            });

            console.log("TEMP", temp)
            let listData:response[] = temp.map((questionDiv:any):response => {
                console.log("questionDiv", questionDiv)
                return ({
                    question: questionDiv.childNodes[0].innerHTML,
                    response: questionDiv.childNodes[1].value,
                });
            });

            console.log("listDATA", listData);

            const packagedData/*:formResponse*/ = {
                name: nameInputRef.current!.value,
                email: emailInputRef.current!.value,
                questionsAndResponses: listData,
                formId: id,
            };

            console.log("PACKAGED DATA", packagedData)

            const { data } = await axios.post("http://localhost:3001/forms/respond", packagedData);

            console.log("finalResponse:", data);

            toast({
                title: "Successful form response!",
                description: "We've sent your form for you.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });

            setButtonIsLoading(false);
        } catch(e) { console.log(e); }
    };

    return (
    <>
        <Box className="container" m={"0 auto"} bg={"blackAlpha.500"} p={4} borderRadius={4} mt={4}>
            <Heading size={"lg"}>{/*<b>Title:</b> */}{form.title}</Heading>
            <Text size={"md"}>{/*<b>Description:</b> */}{form.description}</Text>
            <form onSubmit={(e) => handleFormSubmit(e)} ref={formContainerRef}>
                <Input mt="4" mb="2" type="text" variant="filled" placeholder="Your name..." ref={nameInputRef} required/>
                <Input mt="2" mb="2" type="text" variant="filled" placeholder="Your email..." ref={emailInputRef} required/>
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