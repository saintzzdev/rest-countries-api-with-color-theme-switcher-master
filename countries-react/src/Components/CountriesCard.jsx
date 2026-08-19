import { useNavigate } from 'react-router';
import { useTheme } from '../context/ThemeContext';

export default function CountriesCard({ country }) {
    const navigate = useNavigate();
    const { darkTheme } = useTheme();

    const handleClick = () => {
        navigate(`/country/${country.alpha3Code}`);
    };

    return (
        <div 
            className={`country-card ${darkTheme ? 'bg-darkCardBg' : 'bg-white'} rounded-md shadow-md w-full cursor-pointer`} 
            onClick={handleClick}>

            <img className='w-full aspect-video object-cover rounded-t-md' src={country.flags.png} alt={`Flag of ${country.name}`} />
            <div className="country-info px-6 leading-8 mt-5 mb-8">
                <h3><strong>{country.name}</strong></h3>
                <p><strong className='font-semibold'>Population:</strong> {country.population.toLocaleString()}</p>
                <p><strong className='font-semibold'>Region:</strong> {country.region}</p>
                <p><strong className='font-semibold'>Capital:</strong> {country.capital ?? "Not Found."}</p>
            </div>
        </div>
    );
}