import React from 'react';

function Navbar({ language, setLanguage }) {

  const handleChangeLanguage = () => {
    language === 'FI' ? setLanguage('EN') : setLanguage('FI')
    console.log('language:', language)
  }

  return (
    <div className='flex flex-row justify-between m-3 h-10 items-center'>
      <div className='flex gap-2 items-center'>
        <img src='/src/assets/logo.png' className='w-9 h-9'/>
        <div className='flex flex-col font-lexend text-center'>
          <p className='border-b border-blue font-semibold text-dark-gray'>HOMELESS ACADEMY</p>
          <p className='text-blue'>DESIRE TO CHANGE</p>
        </div>
      </div>
      <div className='flex flex-row gap-10'>
        <p>{language === 'FI' ? 'Etusivu' : 'Home'}</p>
        <p>{language === 'FI' ? 'Tietoa meistä' : 'About'}</p>
        <p>{language === 'FI' ? 'Ajankohtaista' : 'News'}</p>
        <p>{language === 'FI' ? 'Tapahtumat' : 'Events'}</p>
      </div>
      <div className='flex flex-row gap-6 items-center'>
        <p onClick={handleChangeLanguage}>{language === 'FI' ? 'EN' : 'FI'}</p>
        <button className='px-4 py-2 rounded-3xl bg-blue text-lg font-semibold text-white'>{language === 'FI' ? 'Ota yhteyttä' : 'Contact us'}</button>
      </div>
    </div>
  )
}

export default Navbar;
