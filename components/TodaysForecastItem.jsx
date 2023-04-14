import Image from 'next/image'
import React from 'react'

const TodaysForecastItem = () => {
  return (
    <div className='flex flex-col justify-center items-center flex-1 gap-4 px-6 border-r-2 border-solid border-gray-300 last-of-type:border-none'>
      <p className='text-base font-semibold text-slate-400'>6.00 AM</p>
      <Image src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png"  alt="sunny" width={64} height={64}/>
      <span className='text-2xl text-slate-200 font-semibold'>25</span>
    </div>
  )
}

export default TodaysForecastItem