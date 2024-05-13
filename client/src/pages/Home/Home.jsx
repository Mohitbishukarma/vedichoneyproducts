import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import One from '../../heplers/swiper/One';
import Two from '../../heplers/swiper/Two';
import Three from '../../heplers/swiper/Three';
import Slider from '../../heplers/swiper/slider';
import honey from '/honey3.png'
import honey1 from '/honey1.png'
import honey2 from '/honey2.jpg'
import CustomSlider from '../../heplers/swiper/CustomCarousel'
function Home() {

  const images = [
    {
      imgURL:
        "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgAlt: "img-1"
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1613548058193-1cd24c1bebcf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgAlt: "img-2"
    },
    {
      imgURL:
        "https://plus.unsplash.com/premium_photo-1664273586932-ab870d61f7e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
      imgAlt: "img-3"
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1626285094816-39f688104ce0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imgAlt: "img-4"
    }
  ];





  return (
   
      <div className='px-side mt-top flex items-center border flex-col'>
        <div className="slider">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      </div>
      <div className='districts flex bg-white h-screen mt-top justify-between  w-full'>
        <h1 className='font-bold font-inter transform rotate-3'>Dang</h1>
        <h1 className='font-bold font-inter transform -rotate-3'>Chitwan</h1>
        <h1 className='font-bold font-inter transform rotate-6'>Nepalgunj</h1>
        <h1 className='font-bold font-inter transform -rotate-3'>Dang</h1>
        <h1 className='font-bold font-inter transform -rotate-3'>Chitwan</h1>
        <h1 className='font-bold font-inter transform rotate-5'>Nepalgunj</h1>

      </div>
      </div>
  );
}

export default Home;
