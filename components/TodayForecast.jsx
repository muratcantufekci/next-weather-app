import TodaysForecastItem from "./TodaysForecastItem"

const TodayForecast = () => {
  return (
    <div className='p-6 bg-slate-700 rounded-2xl mb-4'>
        <h3 className="text-sm font-semibold">TODAY' FORECAST</h3>
        <div className="flex mt-6">
          <TodaysForecastItem />
          <TodaysForecastItem />
          <TodaysForecastItem />
          <TodaysForecastItem />
          <TodaysForecastItem />
          <TodaysForecastItem />
        </div>
    </div>
  )
}

export default TodayForecast