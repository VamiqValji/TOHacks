import React from 'react';
import ReactNode from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import {HamburgerIcon,EditIcon} from '@chakra-ui/icons';

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