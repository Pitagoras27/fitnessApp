import React from 'react';

import Welcome from './Welcome';
import ExcerciseList from './ExcercisesList';
import AddButton from './AddButton';

const Exercise = (props) => (
  <div>
    <Welcome name='Carlos!' />
    <ExcerciseList data={props.data} />
    <AddButton />
  </ div>
);

export default Exercise;
