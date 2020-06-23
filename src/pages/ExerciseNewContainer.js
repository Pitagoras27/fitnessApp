import React, { Component } from 'react';

import NewExercise from '../components/NewExercise';
import Loading from '../components/Loading';
import ErrorServer from './500';
import '../components/styles/ExerciseNew.css';

class ExcerciseNewContainer extends Component {
  state = {
    form: {
      title: '',
      description: '',
      img: '',
      rightColor: '',
      leftColor: ''
    },
    loading: false,
    error: '',
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { history } = this.props;
    this.setState({loading: true });

    try {
      const bodyPost = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state.form),
      };
  
      const fetchData = await fetch('http://localhost:8000/api/exercises', bodyPost);
      const responsePost = await fetchData.json();

      this.setState({
        form: responsePost,
        loading: false,
        error: '',
      }, () => {
        history.push('./exercises');
      });

    } catch (error) {
      this.setState({
        loading: false,
        error: 'No se pudo cargar la información, favor de intentar más tarde'
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }

  render() {
    const { form, loading, error } = this.state;
    if(loading) return <Loading />
    if(error) {
      return <ErrorServer />
    } else {
      return (
        <NewExercise 
          {...form}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  };
}

export default ExcerciseNewContainer;
