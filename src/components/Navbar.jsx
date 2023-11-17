import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Navbar({ language, setLanguage }) {
  const navigate = useNavigate();

  const handleChangeLanguage = () => {
    language === 'FI' ? setLanguage('EN') : setLanguage('FI')
    console.log('language:', language)
  }

  return (
    <div className='flex flex-row justify-between m-3 h-10 items-center p-10'>
      <div onClick={() => navigate('/home')} className='flex gap-2 items-center'>
        <img src='/src/assets/logo.png' className='w-9 h-9' />
        <div className='flex flex-col font-lexend text-center'>
          <p className='border-b border-blue font-semibold text-dark-gray'>HOMELESS ACADEMY</p>
          <p className='text-blue'>DESIRE TO CHANGE</p>
        </div>
      </div>
      <div className='hidden lg:flex flex-row gap-8'>
        <p onClick={() => navigate('/home')}>{language === 'FI' ? 'Etusivu' : 'Home'}</p>
        <p onClick={() => navigate('/about')}>{language === 'FI' ? 'Tietoa meistä' : 'About'}</p>
        <p onClick={() => navigate('/news')}>{language === 'FI' ? 'Ajankohtaista' : 'News'}</p>
        <p onClick={() => navigate('/events')}>{language === 'FI' ? 'Tapahtumat' : 'Events'}</p>
      </div>
      <div className='hidden lg:flex flex-row gap-6 items-center'>
        <p onClick={handleChangeLanguage}>{language === 'FI' ? 'EN' : 'FI'}</p>
        <button className='px-4 py-2 rounded-3xl bg-blue text-lg font-semibold text-white'>
          {language === 'FI' ? 'Ota yhteyttä' : 'Contact us'}
        </button>
      </div>

      {/* Mobile burger menu */}
      <details className="dropdown dropdown-bottom dropdown-end lg:hidden">
        <summary className="m-1 btn bg-inherit border-none"><Icon icon="iconamoon:menu-burger-horizontal-light" width="30" height="30" /></summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <button className='px-4 py-2 rounded-3xl bg-blue text-lg font-semibold text-white m-4'>
              {language === 'FI' ? 'Ota yhteyttä' : 'Contact us'}
            </button>
          </li>
          <li>
            <p onClick={handleChangeLanguage}>{language === 'FI' ? 'EN' : 'FI'}</p>
          </li>
          <li>
            <p onClick={() => navigate('/home')}>{language === 'FI' ? 'Etusivu' : 'Home'}</p>
          </li>
          <li>
            <p onClick={() => navigate('/about')}>{language === 'FI' ? 'Tietoa meistä' : 'About'}</p>
          </li>
          <li>
            <p onClick={() => navigate('/news')}>{language === 'FI' ? 'Ajankohtaista' : 'News'}</p>
          </li>
          <li>
            <p onClick={() => navigate('/events')}>{language === 'FI' ? 'Tapahtumat' : 'Events'}</p>
          </li>
        </ul>
      </details>
    </div>
  )
}

export default Navbar;
