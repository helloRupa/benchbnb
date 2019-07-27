import React from 'react';
import GreetingContainer from './components/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './components/login_form_container';
import SignupFormContainer from './components/signup_form_container';
import { AuthRoute } from './util/route_util';
import SearchContainer from './components/search_container';
import BenchFormContainer from './components/bench_form_container';

const App = () => {
  return (
    <div>
      <header>
        <h1>Bench BnB</h1>
        <GreetingContainer />
      </header>

      <AuthRoute path="/login" component={LoginFormContainer} exact={true} />
      <AuthRoute path="/signup" component={SignupFormContainer} exact={true} />

      <Route exact path="/" component={ SearchContainer } />
      <Route exact path="/benches/new" component={ BenchFormContainer } />
    </div>
  );
};

export default App;
