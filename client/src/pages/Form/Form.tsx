import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import MiddleOfScreenText from '../../components/MiddleOfScreenText';
import { question } from '../../ts/interface/userInterface';

interface FormProps {}

const Form: React.FC<FormProps> = () => {

    const [questions, setQuestions] = useState<question[] | null>(null);

    const { id }:{id: string} = useParams();

    const fetchData = async () => {
        try {
            const { data } = await axios.post("http://localhost:3001/forms/viewOne", {
                formId: id,
            });
            setQuestions(data.data.questions);
        } catch (e) { console.log(e); }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (questions === null || questions.length === 0) {
        // ^ both conditions give off same side effect
        // as questions length cant be 0
        return (
            <>
                <MiddleOfScreenText>
                    <Heading>Loading or error...</Heading>
                </MiddleOfScreenText>
            </>);
    };

    return (
    <>
        
    </>);
}

export default Form;