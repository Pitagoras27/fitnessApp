import {useState, useEffect} from 'react';

const useFetchApi = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const resultExercises = async () => {
      try {
        const fetchData = await fetch(url);
        const responseJson = await fetchData.json();
  
        setData(responseJson);
        setLoading(false);
      } catch (error) {
        setError('NO se pudo obtener la información, favor de intentar más tarde');
        setLoading(false);
      }
    }
    resultExercises();
  },[url]);

  return {data, loading, error}
}

export default useFetchApi;
