import React from 'react';

import Card from './Card';
import ExerciseForm from '../pages/ExerciseNewContainer';

const NewExercise = ({ form, handleChange, handleSubmit }) => (
  <div className='container'>
    <div className='row'>
      <div className='col-sm align-card-form'>
        <Card {...form} />
      </div>
      <div className='col-sm'>
        <ExerciseForm
          { ...form }
          onChange={ handleChange }
          handleSubmit={ handleSubmit }
        />
      </div>
    </div>
  </div>
);

export default NewExercise;
