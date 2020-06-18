import React from 'react';
import { Link } from 'react-router-dom';

import './styles/AddButton.css';

const AddButton = () => (
  <Link to='/exercisesNew'>
    <img
      className='Fitness-Add'
      src='https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d' 
      alt='Add Excercise'
    />
  </Link>
)

export default AddButton;
