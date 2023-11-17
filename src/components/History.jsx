import React, { useContext } from 'react';
import AppContext from '../AppContext';

function History() {
  const { language } = useContext(AppContext);

  return (
    <div className='bg-medium-green text-white text-center py-10'>
      <h1 className='font-lexend font-extrabold text-3xl lg:text-5xl'>{language === 'FI' ? 'Homeless Academyn historia' : 'History of Homeless Academy'}</h1>
    </div>
  );
}

export default History;
