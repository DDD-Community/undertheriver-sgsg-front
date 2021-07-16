import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createHashHistory } from 'history';
import { ChakraProvider } from '@chakra-ui/react';

import PrivateRoute from './PrivateRoute';
import Login from './Login';
import AfterLogin from './AfterLogin';
import Popup from './Popup';
import './index.css';

const history = createHashHistory();

function App() {
  const [writePopup, setWritePopup] = useState({
    flag: true,
    left: 0,
    top: 0,
  });

  return (
    <ChakraProvider resetCSS>
      {writePopup.flag && (
        <BrowserRouter history={history} basename="/popup.html#">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/after-login" component={AfterLogin} />
            <PrivateRoute
              writePopup={writePopup}
              setWritePopup={setWritePopup}
              path="/popup"
              component={Popup}
            />
            <Route exact path="*" component={AfterLogin} />
            {/*<Redirect path="*" to="/" />*/}
          </Switch>
        </BrowserRouter>
      )}
    </ChakraProvider>
  );
}

render(<App />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();
