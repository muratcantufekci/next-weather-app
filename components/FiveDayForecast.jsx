import { useContext, useEffect, useState } from 'react'
import FiveDayForecastItem from './FiveDayForecastItem'
import WeatherContext from '@/context/WeatherContext'

const FiveDayForecast = () => {
  const { datas } = useContext(WeatherContext)
  const [fiveDays, setFiveDays] = useState('')
  
  // 5 günlük tava tahminlerini saat 12.00 ı baz alacak şekilde filtreleyerek itemlarıma datalarını gönderiyoruz
  useEffect(() => {
    if (datas) {
      setFiveDays(datas.list.filter(item=> item.dt_txt.split(' ')[1] === '12:00:00'))
    }
  }, [datas])

  return (
    <div className='p-4 bg-slate-700 rounded-2xl md:p-8'>
      <h3 className="text-sm font-semibold">5 DAYS FORECAST</h3>
      <div className='flex flex-col h-full'>
        {fiveDays && fiveDays.map((item,i) => (
          <FiveDayForecastItem key={i} day={new Date(item.dt_txt.split(' ')[0]).toLocaleString('en-us', {weekday:'long'})} imgType={item.weather[0].main} celcius={Math.round(item.main.temp)}/>
        ))}
      </div>
    </div>
  )
}

export default FiveDayForecast