import React from 'react'
import AirConditionItem from './AirConditionItem'

const AirConditions = () => {
  return (
    <div className='p-6 bg-slate-700 rounded-2xl'>
        <h3 className="text-sm font-semibold">AIR CONDITIONS</h3>
        <div className='flex flex-wrap mt-6 gap-3 justify-between'>
            <AirConditionItem />
            <AirConditionItem />
            <AirConditionItem />
            <AirConditionItem />
        </div>
    </div>
  )
}

export default AirConditions