import React, { useContext } from 'react';
import AppContext from '../AppContext';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Navbar() {
  const navigate = useNavigate();
  const { language, setLanguage, handleShowContactForm } = useContext(AppContext);

  const handleChangeLanguage = () => {
    language === 'FI' ? setLanguage('EN') : setLanguage('FI')
  }

  const text = {
    home: {
      FI: 'Etusivu',
      EN: 'Home',
    },
    about: {
      FI: 'Tietoa meistä',
      EN: 'About',
    },
    news: {
      FI: 'Ajankohtaista',
      EN: 'News',
    },
    events: {
      FI: 'Tapahtumat',
      EN: 'Events',
    },
    contactUs: {
      FI: 'Ota yhteyttä',
      EN: 'Contact us',
    },
    changeLanguage: {
      FI: 'EN',
      EN: 'FI',
    },
  };

  return (
    <div className='flex flex-row justify-between h-10 items-center py-10 px-5'>
      <div onClick={() => navigate('/')} className='flex gap-2 items-center'>
        <img src='/src/assets/logo.png' className='w-9 h-9' />
        <div className='flex flex-col font-lexend text-center'>
          <p className='border-b border-blue font-semibold text-dark-gray'>HOMELESS ACADEMY</p>
          <p className='text-blue'>DESIRE TO CHANGE</p>
        </div>
      </div>
      <div className='hidden lg:flex flex-row gap-8'>
        <button className='btn btn-ghost' onClick={() => navigate('/')}>{text.home[language]}</button>
        <button className='btn btn-ghost' onClick={() => navigate('/about')}>{text.about[language]}</button>
        <button className='btn btn-ghost' onClick={() => navigate('/news')}>{text.news[language]}</button>
        <button className='btn btn-ghost' onClick={() => navigate('/events')}>{text.events[language]}</button>
      </div>
      <div className='hidden lg:flex flex-row gap-6 items-center'>
        
        {/* Change language button */}
        <button className='btn btn-ghost' onClick={handleChangeLanguage}>{text.changeLanguage[language]}</button>

        {/* Contact us button */}
        <button 
          className='px-4 py-2 rounded-3xl bg-blue text-lg font-semibold text-white' 
          onClick={handleShowContactForm}
        >
          {text.contactUs[language]}
        </button>
      </div>

      {/* Mobile burger menu */}
      <details className='dropdown dropdown-bottom dropdown-end lg:hidden'>
        <summary className='m-1 btn bg-inherit border-none'><Icon icon='iconamoon:menu-burger-horizontal-light' width='30' height='30' /></summary>
        <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
          <li>
            {/* Contact us button */}
            <button 
              className='px-4 py-2 rounded-3xl bg-blue text-lg font-semibold text-white m-4'
              onClick={handleShowContactForm}
            >
              {text.contactUs[language]}
            </button>
          </li>
          <li>
            <p onClick={handleChangeLanguage}>{text.changeLanguage[language]}</p>
          </li>
          <li>
            <p onClick={() => navigate('/')}>{text.home[language]}</p>
          </li>
          <li>
            <p onClick={() => navigate('/about')}>{text.about[language]}</p>
          </li>
          <li>
            <p onClick={() => navigate('/news')}>{text.news[language]}</p>
          </li>
          <li>
            <p onClick={() => navigate('/events')}>{text.events[language]}</p>
          </li>
        </ul>
      </details>
    </div>
  )
}

export default Navbar;
