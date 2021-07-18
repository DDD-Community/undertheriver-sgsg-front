import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({
  component: Component,
  writePopup: writePopup,
  setWritePopup: setWritePopup,
  render,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('access_token') ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} writePopup={writePopup} setWritePopup={setWritePopup} />
          )
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
