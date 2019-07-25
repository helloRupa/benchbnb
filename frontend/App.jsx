import React from 'react';
import GreetingContainer from './components/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './components/login_form_container';
import SignupFormContainer from './components/signup_form_container';
import { AuthRoute } from './util/route_util';

const App = () => {
  return (
    <div>
      <header>
        <h1>Bench BnB</h1>
        <GreetingContainer />
      </header>

      <AuthRoute path="/login" component={LoginFormContainer} exact={true} />
      <AuthRoute path="/signup" component={SignupFormContainer} exact={true} />
    </div>
  );
};

export default App;
