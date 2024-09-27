import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import FeatureCard from './FeatureCard';
import Car1 from '../../../assets/img/car1.png'
import Car2 from '../../../assets/img/car2.png'
import Car3 from '../../../assets/img/car3.png'
import Car4 from '../../../assets/img/car4.png'
import Car5 from '../../../assets/img/car5.png'
import Car6 from '../../../assets/img/car6.png'

const Featured = () => {

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


  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    SlidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          SlidesToScroll: 3,
          inifinte: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          SlidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          SlidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  }

  return (
    <div className='container mt-14'>
      <h1 className='font-bold text-4xl text-center'>
        Featured <span className='text-primary'>Cars</span>
      </h1>

      <p className='text-center'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, quod.
      </p>

      <div className='mt-8'>
        <Slider {...settings}>
          {carsData.map((item) => (
            <FeatureCard
              key={item.id}
              img={item.img}
              name={item.name}
              price={item.price} 
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Featured