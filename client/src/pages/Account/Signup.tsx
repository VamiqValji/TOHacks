import React from 'react';
import { Text, Input, InputGroup, Button, InputRightElement, useToast} from "@chakra-ui/react"
import axios from 'axios';
import {
    Link
  } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/actions/userAction';

interface AccountProps {}

const Signup: React.FC<AccountProps> = () => {

    const dispatch = useDispatch();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [email, setEmail] = React.useState("");

    const [show, setShow] = React.useState(false)
    
    const [isLoad, setIsLoad] = React.useState(false);
    const toast = useToast()
    const createAccount = async () =>  {
        if(!password) return;
        if(password === confirmPassword) {
            setIsLoad(true);
            try {
            const {data} =  await axios.post("http://localhost:3001", {
                username,
                password,
                email
            })
            setIsLoad(false);
            dispatch(setUserData(data.data));
            toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 5000,
                isClosable: true,
              })
        } catch (e) {
            console.log("error: ", e)
        }
        } else {
            alert("Passwords do not match!")
        }
        setIsLoad(false);
        
        //await axios.get("localhost");
        
    }


    return (
    <>
    
    <InputGroup display="grid" gridGap={4} gridAutoFlow="row dense" width={1/3} mx="auto">
    <Text fontSize={32} mx="auto">Sign Up!</Text>
        <Input 
            onChange={(event)=>setEmail(event.target.value)}
            placeholder="Email Address"
        />
        <Input 
            onChange={(event)=>setUsername(event.target.value)}
            placeholder="Username"
        />
        <Input 
            onChange={(event)=>setPassword(event.target.value)}
            placeholder="Password"
            type={show ? "text" : "password"}
        />
        <InputGroup>
        <Input 
            onChange={(event)=>setConfirmPassword(event.target.value)}
            placeholder="Confirm Password"
            type={show ? "text" : "password"}
        />
        <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
      </InputGroup>
        
         <Button isLoading={isLoad} colorScheme="teal" variant="solid" onClick={() => createAccount()}>
             Sign Up
        </Button>
        <Link to="login" >Already have an account? Click here to login.</Link>
     
    </InputGroup>
    </>
    );
}

export default Signup;