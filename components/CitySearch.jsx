import cities from '../data/cities.json'

const CitySearch = () => {

    return (
        <div>
            <select className="bg-slate-700 p-3 rounded-lg w-full">
                <option value="">Please select a city</option>
                {cities.map(item => (
                    <option key={item.id}>{item.name}</option>
                ))}
            </select>

        </div>
    )
}

export default CitySearch