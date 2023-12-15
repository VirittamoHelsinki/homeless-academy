import React, { useContext, useState } from 'react';
import AppContext from '../../AppContext';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './navbar.css';
import img from '../../assets/footer.png'

function Navbar() {
  const navigate = useNavigate();
  const { language, setLanguage, handleShowContactForm } = useContext(AppContext);
  const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (event) => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleChangeLanguage = () => {
    language === 'fi-FI' ? setLanguage('en-US') : setLanguage('fi-FI')
  }

  const text = {
    home: {
      'fi-FI': 'Etusivu',
      'en-US': 'Home',
    },
    about: {
      'fi-FI': 'Tietoa meistä',
      'en-US': 'About',
    },
    news: {
      'fi-FI': 'Ajankohtaista',
      'en-US': 'News',
    },
    events: {
      'fi-FI': 'Tapahtumat',
      'en-US': 'Events',
    },
    contactUs: {
      'fi-FI': 'Ota yhteyttä',
      'en-US': 'Contact us',
    },
    changeLanguage: {
      'fi-FI': 'EN',
      'en-US': 'FI',
    },
  };

  return (
    <div className='flex flex-row justify-between h-10 items-center py-10 px-5 fixed top-0 w-full bg-white z-50'>

      {/* Logo */}
      <div onClick={() => navigate('/')} className='flex gap-2 items-center cursor-pointer'>
        <img src={img} className='w-9 h-9' alt='logo' />
        <div className='flex flex-col font-lexend text-center'>
          <p className='border-b border-blue font-semibold text-dark-gray'>HOMELESS ACADEMY</p>
          <p className='text-blue'>DESIRE TO CHANGE</p>
        </div>
      </div>

      {/* Desktop navlinks */}
      <div className='hidden lg:flex flex-row gap-4 xl:gap-10'>
        <p
          className={`navlink ${activePage === 'home' && 'active'}`}
          onClick={() => { navigate('/'); setActivePage('home'); }}
        >
          {text.home[language]}
        </p>
        <p
          className={`navlink ${activePage === 'about' && 'active'}`}
          onClick={() => { navigate('/about'); setActivePage('about'); }}
        >
          {text.about[language]}
        </p>
        <p
          className={`navlink ${activePage === 'news' && 'active'}`}
          onClick={() => { navigate('/news'); setActivePage('news'); }}
        >
          {text.news[language]}
        </p>
        <p
          className={`navlink ${activePage === 'events' && 'active'}`}
          onClick={() => { navigate('/events'); setActivePage('events'); }}
        >
          {text.events[language]}
        </p>
      </div>

      <div className='hidden lg:flex flex-row gap-6 items-center'>
        {/* Desktop change language button */}
        <button className='btn btn-ghost' onClick={handleChangeLanguage}>{text.changeLanguage[language]}</button>
        {/* Desktop contact button */}
        <button
          className='px-4 py-2 rounded-3xl bg-blue hover:bg-medium-blue text-sm xl:text-lg font-semibold text-white'
          onClick={handleShowContactForm}
        >
          {text.contactUs[language]}
        </button>
      </div>

      {/* Mobile burger menu */}
      <div className='dropdown dropdown-bottom dropdown-end lg:hidden'>
        <button onClick={toggleMenu} className='m-1 btn bg-inherit border-none'>
          <Icon icon='iconamoon:menu-burger-horizontal-light' width='30' height='30' />
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
            <li>
              {/* Mobile Contact button */}
              <button
                className='px-4 py-2 rounded-3xl bg-blue text-lg font-semibold text-white self-center m-4'
                onClick={() => {handleShowContactForm(); toggleMenu()}}
              >
                {text.contactUs[language]}
              </button>
            </li>
            {/* Mobile change language button */}
            <li>
              <button onClick={() => { handleChangeLanguage(); toggleMenu() }}>{text.changeLanguage[language]}</button>
            </li>
            {/* Mobile navlinks */}
            <li>
              <button onClick={() => { navigate('/'); toggleMenu() }}>{text.home[language]}</button>
            </li>
            <li>
              <button onClick={() => { navigate('/about'); toggleMenu() }}>{text.about[language]}</button>
            </li>
            <li>
            <button onClick={() => { navigate('/news'); toggleMenu() }}>{text.news[language]}</button>
            </li>
            <li>
            <button onClick={() => { navigate('/events'); toggleMenu() }}>{text.events[language]}</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
