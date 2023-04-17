import { useContext, useEffect, useState } from "react"
import TodaysForecastItem from "./TodaysForecastItem"
import WeatherContext from "@/context/WeatherContext"

const TodayForecast = () => {
  const { datas } = useContext(WeatherContext)
  const [todayForecast, setTodayForecast] = useState('')
  const [imagePath, setImagePath] = useState('')
  useEffect(() => {
    if (datas) {
      const todaysDate = new Date().toISOString().split('T')[0]
      const todayForecastItem = datas.list.filter(item => item.dt_txt.includes(todaysDate))
      setTodayForecast(todayForecastItem)
    }
  }, [datas])

  const setImagePathHandler = (forecast) => {
      if (forecast.weather[0].main === 'Rain') {
        setImagePath('https://assets.api.uizard.io/api/cdn/stream/d12bc406-1c84-42b5-9f37-4d52460d0521.png')
      } else if (forecast.weather[0].main === 'Clouds') {
        setImagePath('https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png')
      } else {
        setImagePath('https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png')
      }
      return imagePath
  }
  return (
    <div className='p-6 bg-slate-700 rounded-2xl mb-4'>
        <h3 className="text-sm font-semibold">TODAY' FORECAST</h3>
        {todayForecast &&
          <div className="flex mt-6">
            {todayForecast.map((item,i) => (
              <TodaysForecastItem key={i} hour={item.dt_txt.split(' ')[1].slice(0,5)} celcius={Math.round(item.main.temp)} img={() => setImagePathHandler(item)}/>
            ))}
          </div>
        }
    </div>
  )
}

export default TodayForecast