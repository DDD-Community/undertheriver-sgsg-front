import React from 'react';
import { render } from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import { ChakraProvider } from '@chakra-ui/react';

import './index.css';
import PrivateRoute from './PrivateRoute';
import Newtab from './Newtab';
import Login from './Login';
import AfterLogin from './AfterLogin';
import Setting from './Setting';
import NotFound from './NotFound';

const history = createHashHistory();

function App() {
  return (
    <ChakraProvider resetCSS>
      <Router history={history}>
        <Switch>
          <Route exact path="/after-login" component={AfterLogin} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Newtab} />
          <PrivateRoute exact path="/setting" component={Setting} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

render(<App />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
