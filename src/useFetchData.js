import { useEffect, useState } from "react";

function useFetchData(country) {
  const [contriesList, setCountriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Todo: Fetching Data
  useEffect(() => {
    if (country) {
      fetchDataFromApi();
    } else {
      fetchDataFromLocalStorage();
    }
  }, []);

  const fetchDataFromApi = () => {
    let url = "https://restcountries.com/v3.1/all";

    setIsLoading(true);

    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (country) {
          // country Page
          setCountriesList(data[0]);
        } else {
          // Home Page
          setCountriesList(data);
          localStorage.setItem("countries", JSON.stringify(data));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("countries"));

    if (data) {
      setCountriesList(data);
    } else {
      fetchDataFromApi();
    }
  };

  return { contriesList, isLoading, isError };
}

export default useFetchData;
