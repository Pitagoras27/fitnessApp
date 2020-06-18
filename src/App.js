import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Exercises from './pages/Excercises';
import NotFound from './pages/NotFound';
import ExerciseNew from './pages/ExerciseNew';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/exercises' component={Exercises}></Route>
      <Route exact path='/exercisesNew' component={ExerciseNew}></Route>
      <Redirect exact from='/' to='/exercises' />
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
