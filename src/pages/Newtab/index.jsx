import React from 'react';
import { render } from 'react-dom';
<<<<<<< HEAD
=======
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ChakraProvider } from '@chakra-ui/react';

>>>>>>> parent of 932d412 (fix: login setting)
import './index.css';

<<<<<<< HEAD
import Login from './Login';
=======
const history = createBrowserHistory();

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
>>>>>>> parent of 932d412 (fix: login setting)

render(<Login />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
