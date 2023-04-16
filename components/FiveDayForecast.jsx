import React from 'react'
import FiveDayForecastItem from './FiveDayForecastItem'

const FiveDayForecast = () => {
  return (
    <div className='p-8 bg-slate-700 rounded-2xl'>
      <h3 className="text-sm font-semibold">5 DAY'S FORECAST</h3>
      <div className='flex flex-col h-full'>
        <FiveDayForecastItem />
        <FiveDayForecastItem />
        <FiveDayForecastItem />
        <FiveDayForecastItem />
        <FiveDayForecastItem />
      </div>
    </div>
  )
}

export default FiveDayForecast