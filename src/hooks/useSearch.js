import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://customsearch.googleapis.com/customsearch/v1";

const VITE_API_KEY = import.meta.env.VITE_SEARCH_KEY;

const VITE_SEARCH_ENGINE_KEY = import.meta.env.VITE_SEARCH_ENGINE_KEY;

const useSearch = (searchTerm, startIndex) => {
  const [data, setData] = useState(null);
  //   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      //   setIsLoading(true);

      const response = await axios.get(
        `${BASE_URL}?key=${VITE_API_KEY}&cx=${VITE_SEARCH_ENGINE_KEY}&q=${searchTerm}&start=${startIndex}`
      );
      setData(response?.data);
      // console.log(data)
    };
    fetchData();
    // setIsLoading(false);
  }, [searchTerm, startIndex]);
  console.log(data);
  return { data };
};

export default useSearch;
