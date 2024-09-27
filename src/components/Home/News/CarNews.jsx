import React from 'react'
import Slider from 'react-slick'
import CarNewsCard from './CarNewsCard'
import News1 from '../../../assets/img/news1.jpg'
import News2 from '../../../assets/img/news2.jpg'
import News3 from '../../../assets/img/news3.jpg'
import News4 from '../../../assets/img/news4.jpg'
import News5 from '../../../assets/img/news5.jpg'
import News6 from '../../../assets/img/news6.jpg'


const CarNews = () => {
  const newsData = [
    {
      id: 0,
      img: News1,
      desc: 'Toyota touts internal combustion engine potential, even in EV age',
    },
    {
      id: 1,
      img: News2,
      desc: 'BMW Group North America clocks best-ever annual sales in 2023, leads luxury electric car segment',
    },
    {
      id: 2,
      img: News3,
      desc: 'MG Astor 2024 launched in US, price starts at $122,000',
    },
    {
      id: 3,
      img: News4,
      desc: 'Kia Sonet facelift launched in India at Rs 7.99 lakh, Tata Nexon & Maruti Suzuki Brezza rival',
    },
    {
      id: 4,
      img: News5,
      desc: 'First Shift: New-vehicle inventory reaches 3-year high',
    },
    {
      id: 5,
      img: News6,
      desc: 'UK sales rise 74% in Q3 on robust demand for Range Rover, Range Rover Velar, Defender',
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    SlidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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
        Car <span className='text-primary'>News & Advice</span>
      </h1>

      <p className='text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ratione?
      </p>

      <div className='mt-8'>
        <Slider {...settings} >
          {newsData.map((item) => (
            <CarNewsCard key={item.id} img={item.img} desc={item.desc} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CarNews