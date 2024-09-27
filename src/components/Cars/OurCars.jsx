import React from 'react'
import Car1 from '../../assets/img/car1.png'
import Car2 from '../../assets/img/car2.png'
import Car3 from '../../assets/img/car3.png'
import Car4 from '../../assets/img/car4.png'
import Car5 from '../../assets/img/car5.png'
import Car6 from '../../assets/img/car6.png'


import CarsCard from './CarsCard'

const OurCars = () => {

  const carsData = [
    {
      id: 0,
      img: Car1,
      name: 'Cadillac Escalade',
      price: '22,440'
    },
    {
      id: 1,
      img: Car2,
      name: 'BMW 3 Series',
      price: '54,890'
    },
    {
      id: 2,
      img: Car3,
      name: 'Mercedes',
      price: '75,890'
    },
    {
      id: 3,
      img: Car4,
      name: 'BMW 7 Series',
      price: '55,789'
    },
    {
      id: 4,
      img: Car5,
      name: 'Mercedes-Benz',
      price: '95,776'
    },
    {
      id: 5,
      img: Car6,
      name: 'Range Rover',
      price: '88,450'
    },
  ]

  return (
    <div className='container pt-24'>
      <div>
        <h1 className='font-bold text-4xl text-center'>
          Our <span className='text-primary'>Cars</span>
        </h1>
      </div>

      

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
        {carsData.map((item) => (
          <div>
            <CarsCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurCars