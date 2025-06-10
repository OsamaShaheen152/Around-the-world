import { useEffect, useState } from "react";
function useFetchData(country) {
  const [contriesList, setCountriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (country) {
      fetchDataFromApi();
    } else {
      fetchDataFromLocalStorage();
    }
  }, [country]);

  const fetchDataFromApi = () => {
    let url =
      "https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital,area,languages";
    setIsLoading(true);
    if (country) {
      url = `https://restcountries.com/v3.1/name/${country}?fields=name,region,subregion,tld ,currencies ,population,flags,capital,area,languages`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (country) {
          setCountriesList(data[0]);
        } else {
          localStorage.setItem("country", JSON.stringify(data));
          setCountriesList(data);
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  const fetchDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("country"));

    if (data) {
      setCountriesList(data);
    } else {
      fetchDataFromApi();
    }
  };

  return { contriesList, isLoading, isError };
}
export default useFetchData;

// to cashe data to local storage you need to create to functions
/**
 * fetch from api
 * fetch from localStorage
 */
