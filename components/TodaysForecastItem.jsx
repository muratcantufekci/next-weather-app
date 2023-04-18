import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const TodaysForecastItem = ({ hour, celcius, imgType }) => {
  const [imagePath, setImagePath] = useState('')
  useEffect(() => {
    if (imgType === 'Rain') {
      setImagePath('https://assets.api.uizard.io/api/cdn/stream/d12bc406-1c84-42b5-9f37-4d52460d0521.png')
    } else if (imgType === 'Clouds') {
      setImagePath('https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png')
    } else {
      setImagePath('https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png')
    }
  }, [imgType])
  return (
    <div className='flex flex-col justify-center items-center flex-1 gap-4 px-6 border-r-2 border-solid border-gray-300 last-of-type:border-none '>
      {
        imagePath &&
        <>
          <p className='text-base font-semibold text-slate-400'>{hour}</p>
          <Image src={imagePath} alt="sunny" width={64} height={64} className='h-16 w-16 object-contain'/>
          <span className='text-2xl text-slate-200 font-semibold'>{celcius + '°'}</span>
        </>
      }
    </div>
  )
}

export default TodaysForecastItem