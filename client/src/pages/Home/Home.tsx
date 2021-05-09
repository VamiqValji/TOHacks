import React from 'react';
import {Link} from 'react-router-dom'
import img from '../../imgs/pic.svg'
import { Heading } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {

    return (
    <>
        <Heading className= "container" mt={"20px"} textAlign = {"center"} color={"#76E4F7"}>Formae. </Heading>
        <Heading as="h2" className= "container" textAlign = {"center"}> Saving you money one form at a time.</Heading>
        <br></br>
        <br></br>
        <br></br>
        <img className= "container" src={img} alt={"img"}></img>
        <br></br>
        <Link to= "signup" >
        <Button mt={"3rem"} color="#76E4F7" size="lg" className= "botButton" rightIcon={<ArrowForwardIcon />}>
            Click Here To Get Started!
        </Button>
        </Link>

    </>
    );
}

export default Home;