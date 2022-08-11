import { useState, useEffect } from "react";

const useFetch = (url, params) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${url}${params}`).then((res) => {
      res
        .json()
        .then((data) => {
          setIsLoading(false);
          setData(data);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    });
  }, [url, params]);

  return { data, isLoading };
};

export default useFetch;
