import React from 'react'
import img from '../../assets/img/vision.jpg'

const Vision = () => {
  return (
    <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-16'>
      {/* img section */}
      <div className='w-full md:w-2/5'>
        <img src={img} alt="img" className='rounded-lg' />
      </div>

      {/* content section */}
      <div className='w-full md:w-2/4 space-y-4'>
        <h1 className='text-4xl font-bold'>
          Our Vision
        </h1>
        <h2 className='font-semibold text-lg lg:text-2xl'>
          Empower individuals to achieve sustainable mobility solutions and inspire a positive impact on the environment
        </h2>
        <p className='text-sm lg:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fuga.
        </p>
        <p className='text-sm lg:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam laudantium blanditiis placeat veniam quae numquam dolorem possimus harum atque, similique, officia, odio ut accusantium!
        </p>
      </div>
    </div>
  )
}

export default Vision