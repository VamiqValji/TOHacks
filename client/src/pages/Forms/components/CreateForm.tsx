import React, { useState } from 'react';
import { Box, Heading, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react';
import { question } from "../../../ts/interface/userInterface";

interface CreateFormProps {}

const CreateForm: React.FC<CreateFormProps> = ({}) => {

    const [questions, setQuestions] = useState<question[] | null>([]);
    const [questionsLength, setQuestionsLength] = useState<number>(3);

    const handleCreateFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                    <Input mb="2" type="text" variant="filled" placeholder="Title" />
                    <Input mb="2" type="text" variant="filled" placeholder="Description" />
                    <Input mb="2" type="text" variant="filled" placeholder="userId" />
                    {renderNumberInput()}
                    {renderQuestions()}
                    <Input cursor="pointer" mt="1" type="submit" variant="outline" placeholder="userId" colorScheme="brand" />
                </form>
            </Box>
        </>
    );
}

export default CreateForm;