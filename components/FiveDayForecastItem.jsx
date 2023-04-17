import Image from 'next/image'
import { useEffect, useState } from 'react'

const FiveDayForecastItem = ({day, img, type, celcius}) => {
  const [dayName, setDayName] = useState(day)
  useEffect (() => {
    if(day === new Date().toLocaleString('en-us', {weekday:'long'})) {
      setDayName('Today')
    }
  }, [])
  return (
    <div className='flex gap-16 items-center flex-1 py-5 border-b-2 border-solid border-gray-300 last-of-type:border-none'>
        <p className='font-base w-24'>{dayName}</p>
        <div className='flex items-center gap-5'>
            <Image src={img()}  alt="sunny" width={40} height={40}/>
            <span className='text-base font-semibold text-slate-400'>{type}</span>
        </div>
        <span className='text-2xl text-slate-200 font-semibold'>{celcius + '°'}</span>
    </div>
  )
}

export default FiveDayForecastItem