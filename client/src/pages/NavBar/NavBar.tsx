import React from 'react';
import ReactNode from 'react';
import {
  Box,
  Flex,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";

interface NavBarProps {}


const NavBar: React.FC<NavBarProps> = () => {
    return (
    <>
      <Box as="nav">
        <Flex as="ul" className="navContainer">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/forms">Forms</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
        </Flex>
      </Box>
    </>);
}

export default NavBar;