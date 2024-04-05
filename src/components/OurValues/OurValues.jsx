import React from 'react';
import { useState, useEffect, useContext } from 'react';
import AppContext from '../../AppContext';
import { client } from '../../client';

const OurValues = () => {
  const { language } = useContext(AppContext);
  const [values, setValues] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.getEntries({
          content_type: 'ethics',
          locale: language,
        });
        const entries = res.items.map((item) => item.fields);
        setValues(entries);
      } catch (err) {
        console.log('Error fetching data from Contentful:', err);
      }
    }
    fetchData();
  }, [language]);

  return (
    <div className='bg-dark-green pb-8 pt-4'>
      <h1 className='font-lexend font-extrabold text-3xl lg:text-5xl text-white text-center my-8'>
        {language === 'fi-FI' ? 'Tärkeimmät arvomme' : 'Our key values'}
      </h1>
      <div className='lg:grid lg:grid-cols-3 pt-8 lg:ml-16 gap-y-10 lg:gap-y-4 gap-x-24 lg:gap-x-2'>
        {values.map((value, index) => (
          <div
            key={index}
            className='flex flex-col items-center lg:items-start gap-y-3 pb-10'
          >
            <img className='w-14 h-14' src={value?.icone?.fields?.file?.url} alt='Value icon' />
            <h1 className='text-white lg:text-lg'>{value.title}</h1>
            <p className='text-white text-sm text-center lg:text-left pl-10 pr-10 lg:w-3/4 lg:p-0'>
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;