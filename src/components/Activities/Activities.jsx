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

  return (
    <div>
      {activities && 
        <div className='pt-12 lg:pt-0 bg-dark-green flex flex-col gap-8 lg:gap-16'>

          <div className='flex flex-col lg:flex-row gap-6'>
            {/* Text 1 */}
            <div className='flex flex-col gap-6 px-10 flex-1 lg:pt-14'>
              <h1 className='text-white font-sans text-xl xl:text-3xl font-bold text-center'>
                {activities.title1}
              </h1>
              <p className='text-white text-center font-sans text-base xl:text-xl'>
                {activities.description1}
              </p>
            </div>

            {/* Image 1 */}
            <div className='flex-1'>
              <img className='w-full lg:h-full lg:object-cover' src={activities.image1.fields.file.url} alt='Football' />
            </div>
          </div>

          <div className='flex flex-col lg:flex-row-reverse gap-6'>
            {/* Text 2 */}
            <div className='flex flex-col gap-6 px-10 flex-1 lg:pb-10'>
              <h1 className='text-white font-sans text-xl xl:text-3xl font-bold text-center'>
                {activities.title2}
              </h1>
              <p className='text-white text-center font-sans text-base xl:text-xl'>
                {activities.description2}
              </p>
            </div>

            {/* Image 2 */}
            <div className='flex-1'>
              <img className='w-full lg:h-full lg:object-cover' src={activities.image2.fields.file.url} alt='Football' />
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Activities;








