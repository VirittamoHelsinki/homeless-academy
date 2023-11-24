import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../../AppContext';
import { client } from '../../client';

const HeaderComponent = ({ headerText, headerImage }) => {
  const { language } = useContext(AppContext);

  const [statistics, setStatistics] = useState([]);

  // Fetch data from Contentful
  useEffect(() => {
    async function fetchStatistics() {
      try {
        const response = await client.getEntries({
          content_type: 'statistic',
          locale: language,
        })
        const entries = response.items.map(item => item.fields)
        setStatistics(entries)
      } catch (error) {
        console.log('Error fetching statistics from Contentful:', error);
      }
    }
    fetchStatistics()
  }, [language])
    
  return (
    <div>
      {/* Header text */}
      <h1 className='font-MPlus text-center text-lg lg:text-3xl font-semibold p-8 lg:py-16 border-b-2 border-gray-300 w-11/12 mx-auto'>
        {headerText && headerText}
      </h1>

      {/* Statistics */}
      <div className='grid grid-cols-2 lg:grid-cols-4 ml-4 mr-4 text-center pt-8 pb-6 mb-4 md:mb-0 md:pb-0'>
        {statistics.length > 0 && statistics.map((statistic, index) => (
          <div key={index} className='p-4'>
            <p className='text-4xl lg:text-6xl text-blue pb-2'>{statistic.number}</p>
            <p className='text-sm lg:text-xl'>{statistic.description}</p>
          </div>
        ))}
      </div>

      {/* Header image */}
      <div>
        {headerImage && <img src={headerImage} alt='header image' className='h-auto max-w-full' />}
      </div>
    </div>
  );
};

export default HeaderComponent;
