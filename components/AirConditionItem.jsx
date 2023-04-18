import Image from 'next/image'

const AirConditionItem = ({title, number, icon}) => {
  // Gelen proplarla birlikte ekrana aircontidionitem basar
  return (
    <div className='flex gap-3 w-5/12'>
        <div className='mt-2'>
            {icon}
        </div>
        <div>
            <p className='text-base font-semibold text-slate-400 mb-3 md:text-xl'>{title}</p>
            <span className='text-2xl text-slate-200 font-semibold md:text-3xl'>{number}</span>
        </div>
    </div>
  )
}

export default AirConditionItem