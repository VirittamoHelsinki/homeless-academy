import React, { useContext } from 'react';
import AppContext from '../../AppContext';

const Identity = ({ introduction, image2, subtitle, activitiesDescription1, activitiesDescription2}) => {
  const { language } = useContext(AppContext);

  return (
    <div>
      <div className='bg-light-green'>
        <h1 
          className='text-center text-2xl font-bold lg:text-6xl pb-2 pt-8 lg:pb-4 lg:pt-12 font-sans'>
          <span className='text-dark-green'>{language === 'fi-FI' ? 'Keitä' : 'Who'}</span> {language === 'fi-FI' ? 'olemme?' : 'are we?'}
        </h1>
        <p 
          className='text-center lg:text-xl text-light-gray font-semibold w-11/12 p-8 lg:w-2/5 mx-auto pb-12'>
          {introduction && introduction}
        </p>
      </div>
      <div className='bg-light-green flex items-center justify-between mx-auto mb-[-50px] lg:mb-[-190px]'>
        {image2 && <img className='mx-auto w-4/6 h-4/6 lg:w-2/5 lg:h-2/5' src={image2} alt='image' />}
      </div>
      <div className='bg-dark-green'>
        <div>
          <h2 className='text-center text-white px-[10%] md:px-[20%] text-xl lg:text-4xl font-lexend pt-20 lg:pt-60 font-semibold'>
            {subtitle && subtitle}
          </h2>
          <p className='text-center text-white w-3/4 lg:w-1/3 mx-auto pb-10 pt-10 lg:text-xl font-lexend'>
            {activitiesDescription1 && activitiesDescription1}
          </p>
          <p className='text-center text-white w-3/4 lg:w-1/3 mx-auto pb-14 lg:text-xl font-lexend'>
            {activitiesDescription2 && activitiesDescription2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Identity;