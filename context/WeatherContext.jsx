import { createContext, useEffect, useState } from "react";
import axios from "axios";
import cities from '../data/cities.json'

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
    const [datas, setDatas] = useState('')
    const [city, setCity] = useState(cities[33])
    

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.latitude}&lon=${city.longitude}&appid=95f9a7f17708953d5d2637aef6d30157`)
            .then(response => setDatas(response.data))
    }, [])
        
    const values = {
        datas,
        setDatas,
        city,
        setCity
    }
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}


export default WeatherContext