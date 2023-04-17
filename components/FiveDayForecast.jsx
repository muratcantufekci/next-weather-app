import { useContext, useEffect, useState } from 'react'
import FiveDayForecastItem from './FiveDayForecastItem'
import WeatherContext from '@/context/WeatherContext'

const FiveDayForecast = () => {
  const { datas } = useContext(WeatherContext)
  const [fiveDays, setFiveDays] = useState('')
  const [imagePath, setImagePath] = useState([])
  const [type, setType] = useState('')

  useEffect(() => {
    if (datas) {
      setFiveDays(datas.list.filter(item=> item.dt_txt.split(' ')[1] === '12:00:00'))
    }
  }, [datas])

  const setImagePathHandler = (forecast) => {
    if (forecast.weather[0].main === 'Rain') {
      setImagePath('https://assets.api.uizard.io/api/cdn/stream/d12bc406-1c84-42b5-9f37-4d52460d0521.png')
      setType('Rainy')
    } else if (forecast.weather[0].main === 'Clouds') {
      setImagePath('https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png')
      setType('Cloudy')
    } else {
      setImagePath('https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png')
      setType('Sunny')
    }
    return imagePath
}

  return (
    <div className='p-8 bg-slate-700 rounded-2xl'>
      <h3 className="text-sm font-semibold">5 DAY'S FORECAST</h3>
      <div className='flex flex-col h-full'>
        {fiveDays && fiveDays.map((item,i) => (
          <FiveDayForecastItem key={i} day={new Date(item.dt_txt.split(' ')[0]).toLocaleString('en-us', {weekday:'long'})} img={() => setImagePathHandler(item)} type={type} celcius={Math.round(item.main.temp)}/>
        ))}
      </div>
    </div>
  )
}

export default FiveDayForecast