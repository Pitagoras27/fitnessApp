import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import ExerciseContainer from './pages/ExcerciseContainer';
import NotFound from './pages/NotFound';
import ExerciseNewContainer from './pages/ExerciseNewContainer';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/exercises' component={ExerciseContainer}></Route>
      <Route exact path='/exercisesNew' component={ExerciseNewContainer}></Route>
      <Redirect exact from='/' to='/exercises' />
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
