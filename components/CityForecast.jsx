import React, { useContext } from 'react'
import Image from 'next/image'
import WeatherContext from '@/context/WeatherContext'

const CityForecast = () => {
  const {datas,city}  = useContext(WeatherContext)
  console.log('datas', datas);
  return (
    <div className='p-8 flex justify-between'>
      <div>
        <h2 className='text-slate-300 text-4xl font-semibold mb-3'>{city.name}</h2>
        <p className='text-base mb-14'>Chance of Rain</p>
        <span className='text-slate-200 text-6xl font-semibold'>30</span>
      </div>
      <div className='w-3/12'>
        <Image src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png" alt="sunny" width={240} height={240} />
      </div>
    </div>
  )
}

export default CityForecast