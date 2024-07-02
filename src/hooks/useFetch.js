import { useState, useEffect } from "react";

export function useFetch(fetchFn, initialValue) {
  const [data, setData] = useState(initialValue);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setData(data);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, []);

  return {
    data, 
    isFetching,
    error,
    setData
  }

}
