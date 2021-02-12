import { useState, useEffect } from "react";

// Custom hook to get data, error message if there is from api, and show loading message if needed , this custom hook is used to fetch joke api

const useFetch = (url) => {
  // Setting the states for data, error, loading for joke api and reload for new joke
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadJoke, setReloadJoke] = useState(false);

  useEffect(() => {
    // abortCont in this hook is used to abort fetch when it needs to get aborted, otherwise an error will occur
    const abortCont = new AbortController();
    // Fetching api url
    fetch(url, {
      signal: abortCont.signal,
    })
      // Taking the response from the fetch, checking if its ok otherwise throwing and error, if there is no error return the fetched data
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      // Updating the states
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      // If error is an caused my user and needs to get aborted it gets aborted, otherwise update states and show errormessage instead of joke
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [reloadJoke]);

  return { data, isLoading, setIsLoading, error, reloadJoke, setReloadJoke };
};

export default useFetch;
