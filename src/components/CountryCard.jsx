import { Link } from "react-router-dom";

export function CountryCard({
  population,
  name,
  region,
  capital,
  flag,
  language,
}) {
  return (
    <Link to={name}>
      <div className="h-content w-64 items-start rounded-xl bg-white py-3 dark:bg-[#1F2937]">
        <div>
          <img
            src={flag}
            className="mx-auto h-40 w-[90%] rounded-lg object-contain pt-2"
            alt="country-img"
            loading="lazy"
          />
        </div>
        <div className="mx-auto w-[90%]">
          <span className="my-3 block font-extrabold">{name}</span>

          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light">
              {parseInt(population).toLocaleString()}
            </span>
          </p>

          <p>
            <span className="font-semibold">Region: </span>
            <span className="font-light">{region}</span>
          </p>

          <p>
            <span className="font-semibold">Language: </span>
            <span className="font-light">
              {language
                ? Object.values(language).slice(0, 2).join(", ")
                : "N/A"}
            </span>
          </p>

          <p>
            <span className="font-semibold">Capital: </span>
            <span className="font-light">
              {capital?.length > 1 ? capital.join(", ") : capital}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
