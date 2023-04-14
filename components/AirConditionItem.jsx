import Image from 'next/image'

const AirConditionItem = () => {
  return (
    <div className='flex gap-3 w-5/12'>
        <div>
            <Image src="https://assets.api.uizard.io/api/cdn/stream/e555eccb-fbe4-4a3c-8917-933a41798140.png"  alt="sunny" width={24} height={24}/>
        </div>
        <div>
            <p className='text-xl font-semibold text-slate-400 mb-3'>Real Feel</p>
            <span className='text-3xl text-slate-200 font-semibold'>30</span>
        </div>
    </div>
  )
}

export default AirConditionItem