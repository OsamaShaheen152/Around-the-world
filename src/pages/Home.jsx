import { useState } from "react";
import {
  CountryList,
  RegionMenu,
  ResetBtn,
  SearchInput,
  ShowMessage,
} from "../components";
import useFetchData from "../useFetchData";

export function Home() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { contriesList, isLoading, isError } = useFetchData();

  const handleSelectedRegion = (region) => {
    setSelectedRegion(region);
  };

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };

<<<<<<< HEAD
  const baseCountries = contriesList.slice(8);

  const filteredCountriesRegion = baseCountries.filter((country) => {
=======
  // Skip first 8 countries from the original data, then apply filters
  const baseCountries = contriesList.slice(8);
  
  // Filter countries based on both region and search query
  const filteredCountries = baseCountries.filter((country) => {
>>>>>>> 1523c0ee8a72dbeb90a251e90bc02cc3134ad9ac
    const matchesRegion = selectedRegion
      ? country.region === selectedRegion
      : true;
    
    const matchesQuery = searchQuery
      ? country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchesQuery && matchesRegion;
  });

  return (
    <div>
      {isError && <ShowMessage message={"Something went wrong!"} />}
      {isLoading && <ShowMessage message={"Loading Countries Data!"} />}

      {!isLoading && !isError && (
        <>
          <div className="container mx-auto">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between">
              <div className="mb-5 flex items-center gap-2">
                <SearchInput
                  onQueryChange={handleSearchQuery}
                  searchQuery={searchQuery}
                />
                <ResetBtn
                  setSearchQuery={setSearchQuery}
                  setSelectedRegion={setSelectedRegion}
                />
              </div>
              <div className="min-[360px]:ml-[-100px]">
                <RegionMenu
                  onRegionChange={handleSelectedRegion}
                  selectedRegion={selectedRegion}
                />
              </div>
            </div>
          </div>

          <CountryList data={filteredCountries} />
        </>
      )}
    </div>
  );
}