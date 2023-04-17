import Image from 'next/image'
import React from 'react'

const TodaysForecastItem = ({hour, celcius, img}) => {
  const newImg = img()
  return (
    <div className='flex flex-col justify-center items-center flex-1 gap-4 px-6 border-r-2 border-solid border-gray-300 last-of-type:border-none'>
      <p className='text-base font-semibold text-slate-400'>{hour}</p>
      <Image src={newImg} alt="sunny" width={64} height={64}/>
      <span className='text-2xl text-slate-200 font-semibold'>{celcius + '°'}</span>
    </div>
  )
}

export default TodaysForecastItem