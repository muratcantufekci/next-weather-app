import { createContext, useEffect, useState } from "react";
import axios from "axios";
import cities from '../data/cities.json'

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
    const [datas, setDatas] = useState('')
    const [city, setCity] = useState(cities[33]) // Defaul olarak istanbul ayarlı

    // Datayı çekip servisin istek sınırını önleme amaçlı local storage'a yazıyoruz
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.latitude}&lon=${city.longitude}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`)
            .then(response => {
                setDatas(response.data)
                localStorage.setItem('data',JSON.stringify(response.data))
            })
            .catch(err => {
                setDatas(JSON.parse(localStorage.getItem('data')))
            })
    }, [city])

    // Datayı ve şehirleri contexte value olarak gönderiyoruz
    const values = {
        datas,
        setDatas,
        city,
        setCity
    }
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}


export default WeatherContext