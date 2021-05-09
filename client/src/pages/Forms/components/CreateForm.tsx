import React, { useState } from 'react';
import { Box, Button, Flex, Heading, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, useToast } from '@chakra-ui/react';
import { question, usersInterface } from "../../../ts/interface/userInterface";
import axios from 'axios';
import { useSelector } from 'react-redux';

interface CreateFormProps {}

const CreateForm: React.FC<CreateFormProps> = () => {

    const toast = useToast();

    // const [questions, setQuestions] = useState<question[] | null>([]);
    const [questionsLength, setQuestionsLength] = useState<number>(3);
    const [buttonIsLoading, setButtonIsLoading] = useState<boolean>(false);
    
    const questionsContainer = React.useRef<HTMLDivElement | null>(null);
    const titleInputRef = React.useRef<HTMLInputElement | null>(null);
    const descriptionInputRef = React.useRef<HTMLInputElement | null>(null);

    const userState:usersInterface = useSelector((state:any) => state.user);

    const handleCreateFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            setButtonIsLoading(true);
            let tempQuestionChildrenNodes:NodeListOf<ChildNode>[] = [];
            questionsContainer.current?.childNodes.forEach((node) => {tempQuestionChildrenNodes.push(node.childNodes);});
            let nextTempQuestionChildrenNodes:question[] = tempQuestionChildrenNodes.map((questionDiv:any):question => {
                return ({
                    question: questionDiv[0].value,
                    description: questionDiv[1].value,
                    id: questionDiv[2].value,
                });
            });
            // setQuestions(nextTempQuestionChildrenNodes);
    
            const { data } = await axios.post("http://localhost:3001/forms/create", {
                title: titleInputRef.current?.value,
                description: descriptionInputRef.current?.value,
                userId: userState.userId,
                questions: nextTempQuestionChildrenNodes,
            });
    
            setButtonIsLoading(false);
    
            toast({
                title: "Form created.",
                description: "We've created your form for you.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
    
            console.log(data);
        } catch (e) {
            toast({
                title: "Form creation error.",
                description: "Error in creating your form for you.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }

    };

    const renderQuestions = () => {
        const numbers = [];
        for (let i = 0; i < questionsLength; i++) {
            numbers.push(i + 1);
        }

        return numbers.map((/*number*/) => {
            const id = Math.random().toString(36).substring(7);
            return (
                <>
                    <Box p={4} borderRadius={4} mt={2} bg={"blackAlpha.500"} className="question">
                        <Input mb="2" type="text" variant="filled" placeholder="Question" required />
                        <Input mb="2" type="text" variant="filled" placeholder="Question Description" required />
                        <Input mb="2" type="text" value={id} style={{display:"none"}} required />
                    </Box>
                </>
            );
        });
    };

    const renderNumberInput = () => {
        return (
            <>
                <HStack mb={2}>
                    <Heading size="sm">Questions:</Heading>
                    <Box width="100%">
                        <NumberInput /*allowMouseWheel*/ defaultValue={3} min={1} max={30} value={questionsLength} onChange={(value) => setQuestionsLength(parseInt(value))}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper/>
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>
                </HStack>
            </>
        );
    };

    return (
        <>
            <Box mt={4} bg={"blackAlpha.500"} p={4} borderRadius={4}>
                <form onSubmit={(e) => handleCreateFormSubmit(e)} style={{maxHeight:"70vh", overflowY:"auto"}}>
                    <Input mb="2" type="text" variant="filled" placeholder="Title" ref={titleInputRef} />
                    <Input mb="2" type="text" variant="filled" placeholder="Description" ref={descriptionInputRef} />
                    {renderNumberInput()}
                    <Box p={4} borderRadius={4} mt={2} bg={"blackAlpha.500"} className="questionsContainer" ref={questionsContainer}>
                        {renderQuestions()}
                    </Box>
                    <Flex justifyContent="center">
                        <Button size="lg" isLoading={buttonIsLoading} loadingText={"Submitting"} value={"Submit Form"} cursor="pointer" mt="4" type="submit" variant="solid" colorScheme="brand">
                            Submit Form
                        </Button>
                    </Flex>
                </form>
            </Box>
        </>
    );
}

export default CreateForm;