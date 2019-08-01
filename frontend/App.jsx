import React from 'react';
import GreetingContainer from './components/greeting_container';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './components/login_form_container';
import SignupFormContainer from './components/signup_form_container';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import SearchContainer from './components/search_container';
import BenchFormContainer from './components/bench_form_container';
import BenchShowContainer from './components/bench_show_container';
import NotFound from './components/not_found.jsx';
import LoadingContainer from './components/loading_container';

const App = () => {
  return (
    <div className="whole-app">
      <header>
        <GreetingContainer />
      </header>

      <main>
        <LoadingContainer />

        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} exact={true} />
          <AuthRoute path="/signup" component={SignupFormContainer} exact={true} />
          <ProtectedRoute path="/benches/new" component={BenchFormContainer} exact={true} />
          <Route path="/benches/:id(\d+)" component={BenchShowContainer} exact />
          <Route exact path="/" component={ SearchContainer } />
          <Route component={ NotFound } />
        </Switch>
      </main>
    </div>
  );
};

export default App;
