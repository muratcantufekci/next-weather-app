import { useContext, useEffect, useState } from 'react'
import AirConditionItem from './AirConditionItem'
import WeatherContext from '@/context/WeatherContext'
import { FaTemperatureHigh, FaWind, FaTemperatureLow } from 'react-icons/fa'
import { MdWaterDrop } from "react-icons/md";
import moment from "moment"

const AirConditions = () => {
  const { datas } = useContext(WeatherContext)
  const [todayForecast, setTodayForecast] = useState('')
  //Contextten bugünün tarihini bulup o datayı filtreleyerek hava koşullarını gösteriyoruz
  useEffect(() => {
    if (datas) {
      const todaysDate = moment().format('YYYY-MM-DD')
      const todayForecastItem = datas.list.filter(item => item.dt_txt.includes(todaysDate))
      setTodayForecast(todayForecastItem[0])
    }
  }, [datas])

  return (
    <div className='p-6 bg-slate-700 rounded-2xl'>
      <h3 className="text-sm font-semibold">AIR CONDITIONS</h3>
      {todayForecast &&
        <div className='flex flex-wrap mt-6 gap-3 justify-between'>
          <AirConditionItem title="Feels Like" number={Math.floor(todayForecast.main.feels_like) + '°'} icon={<FaTemperatureHigh></FaTemperatureHigh>} />
          <AirConditionItem title="Humudity" number={'%' + todayForecast.main.humidity} icon={<MdWaterDrop></MdWaterDrop>} />
          <AirConditionItem title="Wind" number={todayForecast.wind.speed + ' KM/H'} icon={<FaWind></FaWind>}/>
          <AirConditionItem title="Minimum Temptrature" number={Math.floor(todayForecast.main.temp_min) + '°'} icon={<FaTemperatureLow></FaTemperatureLow>}/>
        </div>
      }
    </div>
  )
}

export default AirConditions