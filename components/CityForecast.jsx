import React from 'react'

const CityForecast = () => {
  return (
    <div className='p-8 flex justify-between'>
        <div>
            <h2 className='text-slate-300 text-4xl font-semibold mb-3'>Madrid</h2>
            <p className='text-base mb-14'>Chance of Rain</p>
            <span className='text-slate-200 text-6xl font-semibold'>30</span>
        </div>
        <div className='w-3/12'>
            <img src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png" alt="" />
        </div>
    </div>
  )
}

export default CityForecast