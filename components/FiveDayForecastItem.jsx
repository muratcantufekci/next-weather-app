import Image from 'next/image'
import { useEffect, useState } from 'react'

const FiveDayForecastItem = ({ day, imgType, celcius }) => {
  const [dayName, setDayName] = useState(day)
  const [imagePath, setImagePath] = useState('')
  const [type, setType] = useState('')

  //Bugün olma durumunu kontrol ediyoruz
  useEffect(() => {
    if (day === new Date().toLocaleString('en-us', { weekday: 'long' })) {
      setDayName('Today')
    }

    //Hava koşuluna göre resimleri ve sıfatını belirliyoruz
    if (imgType === 'Rain') {
      setImagePath('https://assets.api.uizard.io/api/cdn/stream/d12bc406-1c84-42b5-9f37-4d52460d0521.png')
      setType('Rainy')
    } else if (imgType === 'Clouds') {
      setImagePath('https://assets.api.uizard.io/api/cdn/stream/2c926953-f968-411a-af55-893c6c0d8901.png')
      setType('Cloudy')
    } else {
      setImagePath('https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png')
      setType('Sunny')
    }
  }, [imgType])
  return (
    <div className='flex gap-12 items-center flex-1 py-5 border-b-2 border-solid border-gray-300 last-of-type:border-none md:gap-16'>
      <p className='font-base w-24'>{dayName}</p>
      {
        imagePath &&
        <div className='flex items-center gap-5'>
          <Image src={imagePath} alt="sunny" width={40} height={40} />
          <span className='text-base font-semibold text-slate-400'>{type}</span>
        </div>
      }
      <span className='text-2xl text-slate-200 font-semibold'>{celcius + '°'}</span>
    </div>
  )
}

export default FiveDayForecastItem