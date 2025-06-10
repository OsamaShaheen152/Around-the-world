import { Link, useParams } from "react-router-dom";
import useFetchData from "../useFetchData";
import { ShowMessage } from "../components";

export function Country() {
  const { country } = useParams();
  const { contriesList, isLoading, isError } = useFetchData(country);

  return (
    <>
      {isError && <ShowMessage message={"Something went wrong!"} />}
      {isLoading && <ShowMessage message={"Loading Countries Data!"} />}
      {!isError && !isLoading && (
        <div className="all container mx-auto px-4">
          {" "}
          <Link to="/">
            <svg
              width="70"
              height="68"
              viewBox="0 0 70 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2005_992)">
                <rect x="14" y="8" width="42" height="40" rx="6" fill="white" />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.8927 22.5355L33.0712 23.714L29.1821 27.6031L44.0314 27.6031L44.0314 29.253L29.1821 29.253L33.0712 33.1421L31.8927 34.3206L26.0001 28.4281L31.8927 22.5355Z"
                fill="#111827"
              />
              <defs>
                <filter
                  id="filter0_d_2005_992"
                  x="0"
                  y="0"
                  width="70"
                  height="68"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="6" />
                  <feGaussianBlur stdDeviation="7" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2005_992"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2005_992"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>
          <div className="middle ml-8 mt-10 flex flex-col gap-6 md:flex-row">
            <div className="img-parent w-full md:w-[50%]">
              <img
                src={contriesList?.flags?.png || "https://placehold.co/600x400"}
                alt={contriesList?.flags?.alt}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="country-details ml-5 grid w-full grid-cols-1 gap-4 md:w-2/3 md:grid-cols-2">
              <div className="flex flex-col">
                <h1 className="mb-3 text-4xl font-bold">{country}</h1>
                <p>
                  <span className="text-xl font-semibold">Native Name: </span>
                  <span className="text-lg">
                    {contriesList?.name?.official}
                  </span>
                </p>
                <p>
                  <span className="text-xl font-semibold">Population: </span>
                  <span className="text-lg">
                    {parseInt(contriesList?.population).toLocaleString()}
                  </span>
                </p>
                <p>
                  <span className="text-xl font-semibold">Region: </span>
                  <span className="text-lg">{contriesList?.region}</span>
                </p>
                <p>
                  <span className="text-xl font-semibold">Sub Region: </span>
                  <span className="text-lg">{contriesList?.subregion}</span>
                </p>
                <p>
                  <span className="text-xl font-semibold">Capital: </span>
                  <span className="text-lg">
                    {contriesList?.capital?.join(", ")}
                  </span>
                </p>
              </div>

              <div className="mt-12 flex flex-col">
                <p>
                  <span className="text-xl font-semibold">
                    Top Level Domain:
                  </span>
                  <span className="text-lg">
                    {contriesList?.tld?.join(", ")}
                  </span>
                </p>
                <p>
                  <span className="text-xl font-semibold">Currencies: </span>
                  <span className="text-lg">
                    {contriesList?.currencies
                      ? Object.values(contriesList?.currencies)[0]?.name
                      : "N/A"}
                  </span>
                </p>
                <p>
                  <span className="text-xl font-semibold">Languages: </span>
                  <span className="text-lg">
                    {contriesList?.languages
                      ? Object.values(contriesList?.languages).join(", ")
                      : "N/A"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
