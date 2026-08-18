import { useNavigate, useLocation, useParams } from "react-router";
import countries from "../data/countries.json";
import HeaderDarkBtn from "./HeaderDarkBtn";
import { useTheme } from "../context/ThemeContext";

export default function CountriesInfo() {
  const { darkTheme } = useTheme();
  const location = useLocation();
  const { countryId } = useParams();
  const navigate = useNavigate();
  const country =
    location.state?.country ??
    countries.find((item) => item.alpha3Code === countryId);

  if (!country) {
    return <div className="px-16 py-10 text-white">No country found.</div>;
  }

  const languages = country.languages?.map((language) => language?.name).join(", ") ?? "No Information";
  const currencies = country.currencies?.map((currency) => currency.name).join(", ") ?? "No Information";

  return (
    <div className={`${darkTheme ? "bg-darkBg text-white" : "bg-gray-100 text-gray-900"} countries-container min-h-screen`}>
      <HeaderDarkBtn />
      <div className="px-16 py-14">
        <button
          className={`${darkTheme ? "bg-darkCardBg" : "bg-white"} back-btn flex items-center gap-2 shadow-md rounded-sm px-6 py-2 text-sm mb-16 cursor-pointer`}
          onClick={() => navigate(-1)}
        >
          <span className="text-lg leading-none">&larr;</span>
          Back
        </button>

        <div className="flex flex-col md:flex-row items-start gap-16">
          <img
            className="w-full md:w-[560px] shadow-md"
            src={country.flags.png}
            alt={`Flag of ${country.name}`}
          />

          <div className="countries-info flex-1 pt-4">
            <h2 className="text-3xl font-bold mb-6">{country.name}</h2>

            <div className="flex flex-col md:flex-row gap-4 md:gap-24">
              <div className="flex flex-col gap-2">
                <p>
                  <strong className="font-semibold">Native Name: </strong>
                  {country.nativeName}
                </p>
                <p>
                  <strong className="font-semibold">Population: </strong>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <strong className="font-semibold">Region: </strong>
                  {country.region}
                </p>
                <p>
                  <strong className="font-semibold">Sub Region: </strong>
                  {country.subregion}
                </p>
                <p>
                  <strong className="font-semibold">Capital: </strong>
                  {country.capital ?? "Not Found."}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p>
                  <strong className="font-semibold">Top Level Domain: </strong>
                  {country.topLevelDomain?.join(", ")}
                </p>
                <p>
                  <strong className="font-semibold">Currencies: </strong>
                  {currencies}
                </p>
                <p>
                  <strong className="font-semibold">Languages: </strong>
                  {languages}
                </p>
              </div>
            </div>

            <div className="border-countries-info mt-12">
              <div className="flex flex-wrap items-center gap-3">
                <strong className="font-semibold mr-1">
                  Border Countries:
                </strong>
                {country.borders && country.borders.length > 0 ? (
                  country.borders.map((border) => (
                    <button
                      key={border}
                      type="button"
                      className={`${darkTheme ? "bg-darkCardBg" : "bg-white"} shadow-md rounded-sm px-5 py-1 text-sm`}
                    >
                      {border}
                    </button>
                  ))
                ) : (
                    <button className={`${darkTheme ? "bg-darkCardBg" : "bg-white"} shadow-md rounded-sm px-5 py-1 text-sm`}>
                    No Borders
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
