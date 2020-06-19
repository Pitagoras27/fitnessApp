import React, { Component } from 'react';

import Welcome from '../components/Welcome';
import ExcerciseList from '../components/ExcercisesList';
import AddButton from '../components/AddButton';
class Excercises extends Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    const fetchData = await fetch('http://localhost:8000/api/exercises');
    const responseJson = await fetchData.json();

    this.setState({data: responseJson});
  }


  render() {
    const { data } = this.state;
    return (
      <div>
        <Welcome name='Carlos' />
        <ExcerciseList data={data} />
        <AddButton />
      </ div>)
  }
}

export default Excercises;
