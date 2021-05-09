import React from 'react';
import { Text, Input, InputGroup, Button, InputRightElement} from "@chakra-ui/react"
import axios from 'axios';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/actions/userAction';

interface AccountProps {}

const Login: React.FC<AccountProps> = () => {

    const dispatch = useDispatch();


   
    
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [show, setShow] = React.useState(false)
    
    const [isLoad, setIsLoad] = React.useState(false);

    const meow = async () =>  {
        setIsLoad(true);
        try {
            const res = await axios.post("http://localhost:3001/users/login",{
                name: username,
                password
            })
            console.log("success", res);
            dispatch(setUserData(res.data.data));
            setIsLoad(false);
        } catch (e) {
            console.log("error:", e);
            setIsLoad(false);
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
        <Button h="1.75rem" size="sm" onClick={() => setShow(!show)} >
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
      </InputGroup>
        
         <Button isLoading={isLoad} colorScheme="teal" variant="solid" onClick={() => meow()}>
             Log In
        </Button>
        <Link to="Home" >Don't Have An Account? Click here to sign up.</Link>
     
    </InputGroup>
    </>
    );
}

export default Login;