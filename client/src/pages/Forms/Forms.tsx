import { Box, Text } from '@chakra-ui/layout';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Button, Flex, Heading, HStack, Input, Skeleton } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FullModal from '../../components/fullModal';
// import ModalIndex from '../../components/ModalIndex';
import PleaseLogin from '../../components/pleaseLogin/PleaseLogin';
import { usersInterface, form, question, response, formResponse } from "../../ts/interface/userInterface";

interface FormsProps {}

const Forms: React.FC<FormsProps> = () => {

    const [formsData, setFormsData] = useState<form[] | null>(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
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
    
    const invertModalState = () => {
        setModalOpen(!modalOpen);
    };

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

            const renderQuestions = (questions: question[]) => {
                return questions.map((question, idx:number) => {
                    return (<>
                    <Box as="p" color={"lightgrey"} bg={"whiteAlpha.50"} borderRadius={4} p={4} mt={2} key={idx}>
                        <Text ml="4" as="li">{question.question}</Text>
                        <Text ml="4" as="li" color="grey">{question.description}</Text>
                    </Box>
                    </>);
                });
            };

            const renderFormResponses = (formResponses: formResponse[]) => {

                const renderResponses = (responses: response[]) => {
                    return responses.map((response, idx:number) => {
                        return (<>
                        <Box as="p" color={"lightgrey"} bg={"whiteAlpha.50"} borderRadius={4} p={4} mt={2} key={idx}>
                            <Text ml="4" as="li">{response.question}</Text>
                            <Text ml="4" as="li" color="grey">{response.response}</Text>
                        </Box>
                        </>);
                    });
                };
                
                return formResponses.map((formResponse, idx:number) => {
                    return (<>
                        <Box as="p" color={"lightgrey"} bg={"whiteAlpha.50"} borderRadius={4} p={4} mt={2} key={idx}>
                            <Text><b>User's Name:</b> {formResponse.name}</Text>
                            <Text color="lightgrey"><b>User's Email:</b> {formResponse.email}</Text>
                            <Text color="lightgrey"><b>Date Of Form Submission:</b> {new Date(formResponse.date).toLocaleString()}</Text>
                            {renderResponses(formResponse.questionsAndResponses)}
                        </Box>
                    </>);
                });

            };

            return formsData.map((form, idx:number) => {
                return (
                <Box mt={4} key={idx} bg={"blackAlpha.500"} p={4} borderRadius={4} >
                    <Heading>{form.title}</Heading>
                    <Text className="grey">{form.description}</Text>
                    <Button mt={2} color={"grey"} onClick={invertModalState} colorScheme="brand" style={{color:"black"}}>More details</Button> 
                    <FullModal open={modalOpen} invertModalState={invertModalState}>
                        <Flex>
                            <Box>
                                <Heading as="h3">Title: {form.title}</Heading>
                                <Text><b>Description:</b> {form.description}</Text>
                                <Text mb={2}><b>ID:</b> {form.formId} </Text>
                                <Text>
                                    <Accordion>
                                        <AccordionItem>
                                            <AccordionButton>
                                                <Box textAlign="left">
                                                Questions
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={4}>
                                                {renderQuestions(form.questions)}
                                            </AccordionPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <h2>
                                            <AccordionButton>
                                                <Box textAlign="left">
                                                Responses
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                {renderFormResponses(form.responses)}
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                    
                                </Text>
                            </Box>
                        </Flex>
                    </FullModal>
                </Box>);
            });
        }
    };

    const renderCreateForm = () => {

        const handleCreateFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

        };

        return (
            <>
                <Box mt={4} bg={"blackAlpha.500"} p={4} borderRadius={4}>
                    <form onSubmit={(e) => handleCreateFormSubmit(e)}>
                        <Input mb="2" variant="filled" placeholder="Title" />
                        <Input mb="2" variant="filled" placeholder="Description" />
                        <Input mb="2" variant="filled" placeholder="userId" />
                    </form>
                </Box>
            </>
        );
    };
 
    return (
    <>
        <Flex w={"50vw"} m={"0 auto"} mt={4} >
            <Box className="leftContainer" width={"45%"}>
                <Heading>Your Forms</Heading>
                {renderFormsData()}
            </Box>
            <Box className="rightContainer" width={"45%"} ml={4}>
                <Heading>Create A Form</Heading>
                {renderCreateForm()}
            </Box>
        </Flex>
    </>);
}

export default Forms;