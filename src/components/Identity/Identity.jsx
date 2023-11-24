import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import './identity.css';

const Identity = ({ introduction, image2, subtitle, activitiesDescription1, activitiesDescription2}) => {
  const { language } = useContext(AppContext);

  return (
    <div>
      <div className='bg-light-green'>
        <h1 
          className='text-center text-4xl font-bold lg:text-6xl pb-2 pt-8 lg:pb-4 lg:pt-12 font-sans'>
          <span className='text-dark-green'>{language === 'fi-FI' ? 'Keitä' : 'Who'}</span> {language === 'fi-FI' ? 'olemme?' : 'are we?'}
        </h1>
        <p 
          className='text-center lg:text-xl text-light-gray font-semibold w-3/4 lg:w-[50%] mx-auto pb-10 pt-10'>
          {introduction && introduction}
        </p>
      </div>

      {/* Image */}
      <div className='bg-split'>
        {image2 && <img className='mx-auto w-4/6 h-4/6 lg:w-[50%] lg:h-[50%] xl:w-[35%] xl:h-[35%]' src={image2} alt='Football team' />}
      </div>

      <div className='bg-dark-green'>
        <div>
          <h2 className='text-center text-white px-[10%] md:px-[20%] text-xl lg:text-4xl font-lexend pt-14 font-semibold'>
            {subtitle && subtitle}
          </h2>
          <p className='text-center text-white w-3/4 lg:w-[50%] mx-auto pb-10 pt-10 lg:text-xl font-lexend'>
            {activitiesDescription1 && activitiesDescription1}
          </p>
          <p className='text-center text-white w-3/4 lg:w-[50%] mx-auto pb-14 lg:text-xl font-lexend'>
            {activitiesDescription2 && activitiesDescription2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Identity;