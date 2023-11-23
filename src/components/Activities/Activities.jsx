import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../AppContext';
import { client } from '../../client';

const Activities = () => {
  const { language } = useContext(AppContext);
  const [activities, setActivities] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.getEntries({
          content_type: 'activitySection',
          locale: language,
        });
        const entries = response.items[response.items.length - 1].fields
        setActivities(entries);
      } catch (error) {
        console.log('Error fetching activities from Contentful:', error);
      }
    }
    fetchData();
  }, [language]);
  console.log(activities)

  return (
    <div>
      {activities && 
        <div className='lg:grid lg:grid-cols-2 bg-dark-green laptop:gap-y-5'>
          <div className='lg:ml-16 lg:pt-16'>
            <h1 className='text-white  lg:pb-5 font-sans text-xl lg:text-2xl font-bold pt-10 text-center lg:text-left'>
              {activities.title1}
            </h1>
            <p className='text-white text-center font-sans text-base lg:text-lg  p-10 pt-6 lg:p-2 w-full laptop:w-full lg:text-left'>
              {activities.description1}
            </p>
          </div>
          <div className=' lg:p-4 lg:pt-0 lg:pr-0 lg:ml-4 '>
            <img className='w-full' src={activities.image1.fields.file.url} alt='Football' />
          </div>
          <div className=' lg:hidden'>
            <h1 className='text-white  lg:pb-5 font-sans text-xl lg:text-2xl font-bold  lg:p-2 pt-10 text-center lg:text-left'>
              {activities.title2}
            </h1>
            <p className='text-white text-center font-sans text-base lg:text-lg  p-10 pt-6 lg:p-2 w-full  lg:w-11/12 lg:text-left'>
              {activities.description2}
            </p>
          </div>
          <div className='lg:p-4 lg:pb-0 lg:pl-0 lg:mr-4 laptop:pt-18 '>
            <img className='w-full' src={activities.image2.fields.file.url} alt='Football' />
          </div>
          <div className='hidden  lg:flex flex-col lg:ml-14 lg:mr-12 lg:pt-12'>
            <h1 className='text-white pb-5 font-sans text-2xl font-bold'>
              {activities.title2}
            </h1>
            <p className='text-white font-sans text-lg  w-5/6 lg:w-11/12 laptop:pb-4'>
              {activities.description2}
            </p>
          </div>
        </div>
      }
    </div>
  );
};

export default Activities;








