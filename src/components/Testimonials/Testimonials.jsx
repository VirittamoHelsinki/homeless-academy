import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../AppContext';
import './testimonials.css';
import { client } from '../../client';

const Testimonials = () => {
  const { language } = useContext(AppContext);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.getEntries({
          content_type: 'testimonial',
          locale: language,
        });
        const entries = res.items.map(item => item.fields);
        setTestimonials(entries);
      } catch (err) {
        console.log('Error fetching data from Contentful:', err);
      }
    }
    fetchData();
  }, [language]);

  return (
    <div className='bg-light-green pt-6 pb-32'>
      <h1 className='font-lexend font-extrabold text-3xl lg:text-5xl text-black text-center pb-10 pt-5'>
        {language === 'en-US' ? 'Testimonials' : 'Kokemuksia'}
      </h1>
      <div className='grid grid-cols-1 gap-y-36 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 lg:gap-8 w-11/12 mx-auto'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='card h-80 bg-white shadow-2xl relative pb-10 mb-10'>
            <div className='card-body'>
              <h2 className='text-center font-lexend font-bold p-1'>{testimonial.title}</h2>
              <p className='text-center font-lexend text-sm text-base'>{testimonial.content}</p>
            </div>
            <div className='bottom-arrow'></div>
<<<<<<< HEAD
            <div className='info-section flex flex-col items-center  '>
              <img
                src={testimonial.profilePicture.fields.file.url}
                className='w-10 h-10 rounded-full'
                alt={`Profile ${index}`}
=======
            <div className='info-section flex flex-col items-center'>
              <img 
                src={testimonial.profilePicture.fields.file.url} 
                className='w-10 h-10 rounded-full' 
                alt={`Profile ${index}`} 
>>>>>>> 6a5bc6cf0c1ab937efbbaf26a2452138636a8381
              />
              <div className='flex gap-2'>
                <p className='text-dark-gray font-bold py-2'>{testimonial.firstName}</p>
                <p className='text-dark-gray font-bold py-2'>{testimonial.lastName}</p>
              </div>
              <p className='text-sm'>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
<<<<<<< HEAD

      <style>
        {`
          .bottom-arrow {
            position: absolute;
            left: 0;
            right: 0;
            bottom: -25px;
            margin: 0 auto;
            width: 0;
            height: 0;
            border-top: 25px solid #FFFF;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
          }
          .info-section{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            margin-top:350px
          }
        `}
      </style>
=======
>>>>>>> 6a5bc6cf0c1ab937efbbaf26a2452138636a8381
    </div>
  );
};

export default Testimonials;



