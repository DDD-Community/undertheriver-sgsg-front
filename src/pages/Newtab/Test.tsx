import React from 'react';
// import logo from '../../assets/img/logo.svg';
import './Newtab.css';
import './Newtab.scss';
import { Box } from "@chakra-ui/react"
import { createHashHistory } from "history";

const history = createHashHistory();

const Test = () => {

    // history test method
    const tabChange = () => {
        history.push('/');
    }

    return (
        <div className="App">
            <Box bg="tomato" w="100%" p={4} color="white">
                <div onClick={() => tabChange()}>test Box</div>
            </Box>
        </div>
    );
};

export default Test;
