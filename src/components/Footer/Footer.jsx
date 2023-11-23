import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext';
import img from '../../assets/footer.png'
import { Icon } from '@iconify/react';

const Footer = () => {
  const { language, handleShowContactForm } = useContext(AppContext);

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
    accountNumber: {
      'fi-FI': 'Tilinumero:',
      'en-US': 'Account number:',
    },
    businessId: {
      'fi-FI': 'Y-tunnus:',
      'en-US': 'Business ID:',
    },
  };

  return (
    <footer className='footer py-6 md:py-10 px-4 md:px-6 lg:px-10 bg-neutral text-white flex flex-col gap-5'>
      <div className='flex flex-row items-center justify-between w-full'>

        {/* Logo */}
        <div className='flex items-center gap-1 md:gap-3'>
          <img className='h-8 w-8' src={img} alt='logo' />
          <div className='flex flex-col shrink-0'>
            <p className='border-b border-blue font-semibold text-white text-center pb-2 text-xs md:text-sm lg:text-lg'>HOMELESS ACADEMY</p>
            <p className='text-center text-sky-600 text-xs md:text-sm lg:text-lg font-bold pt-1'>DESIRE TO CHANGE</p>
          </div>
        </div>

        {/* Contact us button */}
        <button 
          className='border border-white text-white p-2 w-32'
          onClick={handleShowContactForm}
        >
        {text.contactUs[language]}
        </button>
      </div>

      {/* Social media icons */}
      <div className='flex items-center gap-2 self-end'>
        <Link to='https://www.instagram.com/hwc.teamfinland/'><Icon icon='mdi:instagram' width='24' height='24' /></Link>
        <Link to='https://www.facebook.com/HWCTeamFinland/'><Icon icon='ic:baseline-facebook' width='24' height='24' /></Link>
      </div>

      {/* Page navigation links */}
      <nav className='grid grid-flow-col gap-4 md:gap-8 text-xs md:text-sm'>
        <Link to='/'>{text.home[language]}</Link>
        <Link to='/about'>{text.about[language]}</Link>
        <Link to='/news'>{text.news[language]}</Link>
        <Link to='/events'>{text.events[language]}</Link>
      </nav>

      {/* Info section */}
      <div className='mt-4 flex flex-col gap-4 text-xs md:text-sm'>
        <p>{text.accountNumber[language]} FI 81 8000 2710 1432 22</p>
        <p>{text.businessId[language]} 2289677-6</p>
        <p className='mt-4'>@ Homeless Academy 2023</p>
        <p>Terms - Privacy</p>
      </div>
    </footer>
  );
};

export default Footer;

