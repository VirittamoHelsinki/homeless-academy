import React from 'react';
import img1 from '../../assets/image1.png'
import img2 from '../../assets/image2.png'
import img3 from '../../assets/image3.png'
import img4 from '../../assets/image4.png'
import img5 from '../../assets/image5.png'

const OurValues = () => {
  return (
    <div className='bg-dark-green pb-8 pt-4'>
      <h1 className='pt-8 lg:ml-16 text-white  lg:pb-5 font-sans text-2xl lg:text-4xl font-bold pt-10 text-center lg:text-left'>Tärkeimmät arvomme</h1>
      <div className='lg:grid lg:grid-cols-3 pt-8 lg:ml-16  gap-y-10 lg:gap-y-4 gap-x-24 lg:gap-x-2'>
        <div className='flex flex-col items-center lg:items-start gap-y-3 pb-10'>
          <img className='w-14 h-14' src={img1} alt="" />
          <h1 className='text-white lg:text-lg font-sans '>Yhdenvertaisuus</h1>
          <p className='text-white text-sm text-center lg:text-left pl-10 pr-10 lg:w-3/4 lg:p-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum d </p>
        </div>
        <div className='flex flex-col items-center lg:items-start gap-y-3 pb-10'>
          <img className='w-14 h-14' src={img2} alt="" />
          <h1 className='text-white lg:text-lg'>Rehellisyys</h1>
          <p className='text-white text-sm text-center lg:text-left pl-10 pr-10 lg:w-3/4 lg:p-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum d</p>
        </div>
        <div className='flex flex-col items-center lg:items-start gap-y-3 pb-10'>
          <img className='w-14 h-14' src={img3} alt="" />
          <h1 className='text-white lg:text-lg'>Päihteettömyys</h1>
          <p className='text-white text-sm text-center lg:text-left pl-10 pr-10 lg:w-3/4 lg:p-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum d</p>
        </div>
        <div className='flex flex-col items-center lg:items-start gap-y-3 pb-10'>
          <img className='w-14 h-14' src={img4} alt="" />
          <h1 className='text-white lg:text-lg'>Tasa-arvo</h1>
          <p className='text-white text-sm text-center lg:text-left pl-10 pr-10 lg:w-3/4 lg:p-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum d</p>
        </div>
        <div className='flex flex-col items-center lg:items-start gap-y-3 pb-10'>
          <img className='w-14 h-14' src={img5} alt="" />
          <h1 className='text-white lg:text-lg'>Toimintaan sitoutuminen</h1>
          <p className='text-white text-sm text-center lg:text-left pl-10 pr-10 lg:w-3/4 lg:p-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum d</p>
        </div>

      </div>
    </div>
  );
};

export default OurValues;