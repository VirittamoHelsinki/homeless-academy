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
      <h1 className='lg:ml-16 text-white lg:pb-5 font-sans text-2xl lg:text-4xl font-bold pt-10 text-center lg:text-left'>
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


// icone: fields
// :
// description
// :
// ""
// file
// :
// {url: '//images.ctfassets.net/16ds2ky5x15u/53gfKlblZbuhSx…f0QpU/f0c4bd62ae9ed030b8d09f302fa03dca/image2.png', details: {…}, fileName: 'image2.png', contentType: 'image/png'}
// title
// :
// "honesty"
// [[Prototype]]
// :
// Object
// metadata
// :
// {tags: Array(0)}
// how can i render icone url?










