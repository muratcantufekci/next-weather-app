import Image from 'next/image'

const AirConditionItem = ({title, number, icon}) => {
  return (
    <div className='flex gap-3 w-5/12'>
        <div className='mt-2'>
            {icon}
        </div>
        <div>
            <p className='text-xl font-semibold text-slate-400 mb-3'>{title}</p>
            <span className='text-3xl text-slate-200 font-semibold'>{number}</span>
        </div>
    </div>
  )
}

export default AirConditionItem