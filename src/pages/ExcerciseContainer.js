import React, { useState, useEffect } from 'react';

import Exercise from '../components/Exercise';
import Loading from '../components/Loading';
import ErrorServer from './500';

const ExerciseContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const resultExercises = async () => {
      try {
        const fetchData = await fetch('http://localhost:8000/api/exercises');
        const responseJson = await fetchData.json();
  
        setData(responseJson);
        setLoading(false);
      } catch (error) {
        setError('NO se pudo obtener la información, favor de intentar más tarde');
        setLoading(false);
      }
    }
    resultExercises();
  },[]);

  if (loading) return <Loading />; 
  if (error) return <ErrorServer />
  else return <Exercise data={data} />
}
// class ExcerciseContainer extends Component {
//   state = {
//     data: [],
//     loading: true,
//     error: '',
//   }

//   async componentDidMount() {
//     try {
//       const fetchData = await fetch('http://localhost:8000/api/exercises');
//       const responseJson = await fetchData.json();

//       this.setState({
//         data: responseJson,
//         loading: false,
//         error: '',
//       });

//     } catch (error) {
//       this.setState({
//         loading: false,
//         error: 'NO se pudo obtener la información, favor de intentar más tarde',
//       })
//     }
//   }

//   render() {
//     const { data, loading, error } = this.state;

//     if (loading) return <Loading />; 
//     if (error) {
//       return <ErrorServer />
//     } else {
//       return (
//         <Exercise data={data} />
//       )
//     } 
//   }
// }

export default ExerciseContainer;
