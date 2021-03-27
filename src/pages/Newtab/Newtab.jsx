import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Newtab.css';
import './Newtab.scss';
import { Box } from "@chakra-ui/react"

const Newtab = () => {
  return (
    <div className="App">
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
    </div>
  );
};

export default Newtab;
