import { useContext, useEffect, useState } from "react"
import TodaysForecastItem from "./TodaysForecastItem"
import WeatherContext from "@/context/WeatherContext"
import moment from "moment"

const TodayForecast = () => {
  const { datas } = useContext(WeatherContext)
  const [todayForecast, setTodayForecast] = useState('')
  useEffect(() => {
    if (datas) {
      const todaysDate = moment().format('YYYY-MM-DD')
      console.log('todaysDate',todaysDate);
      const todayForecastItem = datas.list.filter(item => item.dt_txt.includes(todaysDate))
      setTodayForecast(todayForecastItem)
      console.log('toda',todayForecast);
    }
  }, [datas])

  return (
    <div className='p-6 bg-slate-700 rounded-2xl mb-4'>
        <h3 className="text-sm font-semibold">TODAYS FORECAST</h3>
        {todayForecast &&
          <div className="flex gap-4 mt-6 flex-wrap md:flex-nowrap md:gap-0">
            {todayForecast.map((item,i) => (
              <TodaysForecastItem key={i} hour={item.dt_txt.split(' ')[1].slice(0,5)} celcius={Math.round(item.main.temp)} imgType={item.weather[0].main}/>
            ))}
          </div>
        }
    </div>
  )
}

export default TodayForecast