import React, { useContext, useEffect, useState } from 'react';
import img3 from '../../assets/ylogo.png';
import img4 from '../../assets/okmlogo.png';
import AppContext from '../../AppContext';
import { client } from '../../client';

const CoWorkers = () => {
  const { language } = useContext(AppContext);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.getEntries({
          content_type: 'partners',
          locale: language,
        });
        const entries = res.items.map((item) => item.fields);
        setPartners(entries);
      } catch (err) {
        console.log('Error fetching data from Contentful:', err);
      }
    }
    fetchData();
  }, [language]);

  return (
    <div className='bg-light-green pl-16 pb-8'>
      <h1 className='lg:pb-5 font-lexend text-xl lg:text-3xl font-bold pt-10 pb-6 text-left'>
        {language === 'fi-FI' ? 'Yhteistyökumppanit' : 'Partners'}
      </h1>
      <div className='lg:flex lg:flex-wrap lg:justify-between'>
        {partners.map((partner, index) => (
          <div key={index} className='lg:w-1/2'>
            <div>
              <img className='w-56 h-16' src={partner?.logo?.fields?.file?.url} alt='' />
              <p className='py-6 w-5/6'>{partner.description}</p>

            </div>
          </div>
        ))}
        <div className='lg:w-1/2'><a href="https://ysaatio.fi/" target='_blank' rel='noopener noreferrer'><img className='w-56 h-16 py-2 lg:py-0' src={img3} alt='' /></a></div>
        <div className='lg:w-1/2'><img className='w-56 h-16 py-2 lg:py-0' src={img4} alt='' /></div>
      </div>
    </div>
  );
};

export default CoWorkers;