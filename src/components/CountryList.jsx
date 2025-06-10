import { CountryCard, EmptySearch } from "./index";
export function CountryList({ data }) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 p-4 sm:grid-cols-2 min-[900px]:grid-cols-2 xl:grid-cols-4">
        {data && data.length ? (
          data.map((country) => (
            <CountryCard
              key={country.name.official}
              population={country.population}
              name={country.name.common}
              region={country.region}
              capital={country.capital}
              flag={country.flags.png}
              language={country.languages}
            />
          ))
        ) : (
          <EmptySearch />
        )}
      </div>
    </div>
  );
}
