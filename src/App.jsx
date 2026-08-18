import { useState } from 'react'
import countries from './data/countries.json'
import CountriesCard from './Components/CountriesCard'
import HeaderDarkBtn from './Components/HeaderDarkBtn'
import { useTheme } from './context/ThemeContext'

export default function CountriesApp() {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const { darkTheme } = useTheme();

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = region === '' || country.region === region;
    return matchesSearch && matchesRegion;
  })

  return (
    <div className={`${darkTheme ? 'bg-darkBg text-white' : 'bg-gray-100 text-gray-900'} min-h-screen`}>
      <HeaderDarkBtn />

      <div className='px-16'>
        <div className="search mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">

          <input
            className={`${darkTheme ? 'bg-darkCardBg' : 'bg-white'} rounded-sm shadow-md py-4 px-6 w-full sm:w-[350px] outline-none text-sm placeholder-gray-400`}
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="relative w-full sm:w-[200px]">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className={`${darkTheme ? 'bg-darkCardBg' : 'bg-white'} py-4 px-6 rounded-sm shadow-md w-full text-sm cursor-pointer`}
            >
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-14 pb-16'>
          {filteredCountries.map((country) => (
            <CountriesCard key={country.alpha3Code} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
}