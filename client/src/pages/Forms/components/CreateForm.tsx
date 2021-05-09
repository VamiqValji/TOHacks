import { Box, Input } from '@chakra-ui/react';
import React from 'react';

interface CreateFormProps {}

const CreateForm: React.FC<CreateFormProps> = ({}) => {
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
}

export default CreateForm;