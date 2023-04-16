import Image from 'next/image'
import React from 'react'

const FiveDayForecastItem = () => {
  return (
    <div className='flex gap-20 items-center flex-1 py-5 border-b-2 border-solid border-gray-300 last-of-type:border-none'>
        <p className='font-base '>Today</p>
        <div className='flex items-center gap-5'>
            <Image src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png"  alt="sunny" width={40} height={40}/>
            <span className='text-base font-semibold text-slate-400'>Sunny</span>
        </div>
        <span className='text-2xl text-slate-200 font-semibold'>31</span>
    </div>
  )
}

export default FiveDayForecastItem