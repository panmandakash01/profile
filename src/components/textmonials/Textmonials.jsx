import React from "react";
import "./textmonials.css";
import akash from "../../assets/akash.JPG";

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Textmonials = () => {

  const data =[
    {
      avtar:akash,
      name:'akash panmnad',
      review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla libero cupiditate corporis voluptates enim quaerat amet numquam.iaosjda lasd a sad',

    },

    {
      avtar:akash,
      name:'shankar dere',
      review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla libero cupiditate corporis voluptates enim quaerat amet numquam.iaosjda lasd a sad',

    },
    
    
    {
      avtar:akash,
      name:'sandesh panmnad',
      review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla libero cupiditate corporis voluptates enim quaerat amet numquam.iaosjda lasd a sad',

    },

  ]

  return (
    <section id="testmonials">
      <h5>Review From Clients</h5>
      <h2>TestMonials</h2>

      <Swiper className="container textmonials_container"
      
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        
        {
          data.map(({avtar,name,review},index)=> {
            return(
              <SwiperSlide key={index} className="testmonials">
                <div className="client_avtar">
                  <img src={avtar} alt={name} />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}</small>

              </SwiperSlide>
            )
          })
        }


        
      </Swiper>
    </section>
  );
};

export default Textmonials;
