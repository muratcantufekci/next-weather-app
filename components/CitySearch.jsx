import WeatherContext from '@/context/WeatherContext';
import cities from '../data/cities.json'
import { useContext } from 'react';

const CitySearch = () => {

    const { setCity } = useContext(WeatherContext)

    const selectboxChangeHandler = (e) => {
        setCity(cities[(+e.currentTarget.value) - 1])
    }

    return (
        <div>
            <select className="bg-slate-700 p-3 rounded-lg w-full" onChange={selectboxChangeHandler}>
                <option value="">İstanbul</option>
                {cities.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>

        </div>
    )
}

export default CitySearch