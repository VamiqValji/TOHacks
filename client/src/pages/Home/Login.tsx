import React from 'react';
import { Text, Box, Flex, Input, InputGroup, Button, InputRightElement} from "@chakra-ui/react"
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

interface HomeProps {}

const Login: React.FC<HomeProps> = () => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    
    const [isLoad, setIsLoad] = React.useState(false);

    const meow = async () =>  {
        const {data} = await axios.post("http://localhost:3000",{
            username,
            password
        })
        if(data.success) {
            alert("oh yeah fortnite.")
        } else {
            alert("no more fortnite")
        }
 
    }

    return (
    <>
    
    <InputGroup display="grid" gridGap={4} gridAutoFlow="row dense" width={1/3} mx="auto">
    <Text fontSize={32} mx="auto">Log In!</Text>
        <Input 
            onChange={(event)=>setUsername(event.target.value)}
            placeholder="Username"
        />
         <InputGroup>
        <Input 
            onChange={(event)=>setPassword(event.target.value)}
            placeholder="Password"
            type={show ? "text" : "password"}
        />
       
        <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
      </InputGroup>
        
         <Button isLoading={isLoad} colorScheme="teal" variant="solid" onClick={() => meow()}>
             Log In
        </Button>
        <Link to="Dashboard" >Already have an account? Click here to login.</Link>
     
    </InputGroup>
    </>
    );
}

export default Login;