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

  // Todo:  Filter By Region
  const handleSelectedRegion = (region) => {
    setSelectedRegion(region);
  };

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const filteredCountriesRegion = contriesList.filter((country) => {
    const matchesRegion = selectedRegion
      ? country.region === selectedRegion
      : true;
    const matchesQuery = country.name.common
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesQuery && matchesRegion;
  });

  return (
    <div>
      {isError && <ShowMessage message={"Something went wrong!"} />}
      {isLoading && <ShowMessage message={"Loading Countries Data!"} />}

      {!isLoading && !isError && (
        <>
          <div className="container mx-auto">
            <div className="flex flex-col items-center justify-between lg:flex-row">
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
              <div className="ml-[-150px]">
                <RegionMenu
                  onRegionChange={handleSelectedRegion}
                  selectedRegion={selectedRegion}
                />
              </div>
            </div>
          </div>

          <CountryList data={filteredCountriesRegion} />
        </>
      )}
    </div>
  );
}
