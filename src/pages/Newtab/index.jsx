import React from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import { ChakraProvider } from '@chakra-ui/react';

import './index.css';
import Newtab from './Newtab';
import Login from './Login';
import Setting from './Setting';

const history = createHashHistory();

function App() {
  return (
    <ChakraProvider resetCSS>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Newtab} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/setting" component={Setting} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

render(<App />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
