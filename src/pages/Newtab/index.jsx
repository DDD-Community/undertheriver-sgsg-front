import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/after-login" component={AfterLogin} />
          <PrivateRoute exact path="/" component={Newtab} />
          <PrivateRoute exact path="/setting" component={Setting} />
          <Route path="/error" component={NotFound} />
          <Redirect path="*" to="/" /> *
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

render(<App />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
