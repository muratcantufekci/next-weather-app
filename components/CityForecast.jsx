import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import WeatherContext from '@/context/WeatherContext'

const CityForecast = () => {
  const { datas, city } = useContext(WeatherContext)
  const [todayForecast, setTodayForecast] = useState('')
  const [imagePath, setImagePath] = useState('')
  useEffect(() => {
    if (datas) {
      const todaysDate = new Date().toISOString().split('T')[0]
      const todayForecastItem = datas.list.filter(item => item.dt_txt.includes(todaysDate))
      setTodayForecast(todayForecastItem[0])
    }
  }, [datas])

  useEffect(() => {
    if (todayForecast) {
      if (todayForecast.weather[0].main === 'Rain') {
        setImagePath('https://assets.api.uizard.io/api/cdn/stream/d12bc406-1c84-42b5-9f37-4d52460d0521.png')
      } else if (todayForecast.weather[0].main === 'Clouds') {
        setImagePath('https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png')
      } else {
        setImagePath('https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png')
      }
    }
  },[todayForecast])


  return (
    <div className='p-8 flex justify-between'>
      {todayForecast &&
        <>
          <div>
            <h2 className='text-slate-300 text-4xl font-semibold mb-3'>{city.name}</h2>
            <p className='text-base mb-14'>Chance of Rain : %{(todayForecast.pop) * 100}</p>
            <span className='text-slate-200 text-6xl font-semibold'>{Math.round(todayForecast.main.temp)}°</span>
          </div>
          <div className='w-3/12'>
            <Image src={imagePath} alt={todayForecast.weather[0].main} width={240} height={240} />
          </div>
        </>
      }

    </div>
  )
}

export default CityForecast