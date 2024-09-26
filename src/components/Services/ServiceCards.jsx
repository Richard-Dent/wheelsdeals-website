import React from 'react'

const ServiceCards = ({icon, title}) => {
  return (
    <div className='text-center p-8 space-y-4 bg-slate-100 border-2 border-secondary hover:bg-secondary hover:text-white transition duration-300 ease-in-out rounded-md cursor-pointer'>
      <p>{icon}</p>
      <h1 className='text-primary text-3xl font-bold'>{title}</h1>
      <p className='text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, pariatur magnam. Inventore similique corporis sunt, porro ducimus obcaecati magnam enim labore, saepe velit harum tenetur reiciendis et ab voluptates illo.
      </p>
    </div>
  )
}

export default ServiceCards