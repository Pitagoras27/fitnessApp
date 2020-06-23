import React from 'react';

import Exercise from '../components/Exercise';
import Loading from '../components/Loading';
import useFetchApi from '../hooks/useFetchApi';
import ErrorServer from './500';

const ExerciseContainer = () => {
  const {loading, data, error} =
  useFetchApi('http://localhost:8000/api/exercises');

  if (loading) return <Loading />; 
  if (error) return <ErrorServer />
  else return <Exercise data={data} />
}

export default ExerciseContainer;
