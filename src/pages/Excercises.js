import React, { Component, Fragment } from 'react';

import Welcome from '../components/Welcome';
import ExcerciseList from '../components/ExcercisesList';
import AddButton from '../components/AddButton';
import Loading from '../components/Loading';
import ErrorServer from './500';

class Excercises extends Component {
  state = {
    data: [],
    loading: true,
    error: '',
  }

  async componentDidMount() {
    try {
      const fetchData = await fetch('http://localhost:8000/api/exercises');
      const responseJson = await fetchData.json();

      this.setState({
        data: responseJson,
        loading: false,
        error: '',
      });
      console.log('asdasd')
    } catch (error) {
      this.setState({
        loading: false,
        error: 'NO se pudo obtener la información, favor de intentar más tarde',
      })
    }
  }

  render() {
    const { data, loading, error } = this.state;
    if (loading) return <Loading />; 
    if (error) {
      return <ErrorServer />
    } else {
      return (
        <div>
          <Welcome name='Carlos' />
          <ExcerciseList data={data} />
          <AddButton />
        </ div>
      )
    } 
  }
}

export default Excercises;
