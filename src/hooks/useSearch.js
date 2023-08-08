import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://customsearch.googleapis.com/customsearch/v1";

const VITE_API_KEY = import.meta.env.VITE_SEARCH_KEY;

const VITE_SEARCH_ENGINE_KEY = import.meta.env.VITE_SEARCH_ENGINE_KEY;

const useSearch = (searchTerm) => {
  const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
    //   setIsLoading(true);

      const response = axios.get(
        `${BASE_URL}?key=${VITE_API_KEY}&cx=${VITE_SEARCH_ENGINE_KEY}&q=${searchTerm}`
      );
      setData(response?.data);
    };
    fetchData();
    // setIsLoading(false);
  }, [searchTerm]);

  return { data };
};

export default useSearch;
