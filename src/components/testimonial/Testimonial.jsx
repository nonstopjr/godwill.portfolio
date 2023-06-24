import React from 'react'
import './testimonial.css'
import T1 from '../../assets/sancho.jpg'
import T2 from '../../assets/pau.jpg'
import T3 from '../../assets/mokole.jpg'
import T4 from '../../assets/arnold.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
      id: 1,
      review:
        "He does amazing works. Very glad he did this for me",
      avatar: T1,
      name: "Sanchh",
    },
    {
      id: 2,
      review:
        "An absolute professional. What a man",
      avatar: T2,
      name: "pau",
    },
    {
      id: 3,
      review:
        "This guy is a genius; pure gem. Wonderful work he does for me.",
      avatar: T3,
      name: "mokoline",
    },
    {
      id: 4,
      review:
        "Trust him with your work and be confident as he makes it exquisite.",
      avatar: T4,
      name: "gordon",

    },
  ];

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
          return(
         
        <SwiperSlide  key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
         </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
            {review}
            </small>
          
        </SwiperSlide>
          )
           })
         
         }
        
      </Swiper>
    </section>
  )
}

export default Testimonial
