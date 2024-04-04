import React, { useContext,useState } from 'react';
import AppContext from '../../AppContext';
import img from '../../assets/footer.png';
import { text } from '../../utils/text';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { Icon } from '@iconify/react';
//set activePage

const Footer = () => {

  //navigatPage
  const navigate = useNavigate();
  const { language, handleShowContactForm } = useContext(AppContext);
  // set ActivePage on Footer
  const currentPage = useLocation();
  const [activePage, setActivePage] = useState(currentPage.pathname);

  const getNavLinkStyles = ({isActive, isPending}) => ({
    color: isPending ? 'none' : isActive ? '#2383D1' : 'inherit',
    borderBottom: isActive ? '2px solid #2383D1' : 'none',
    paddingBottom: isActive ? '0' : '0.5rem',
  });

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
          className='border border-white text-white p-2 w-32 hover:bg-blue hover:border-blue'
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
        <NavLink
          className="navlink"
          style={getNavLinkStyles({isActive:activePage==='home', isPending:false})}
          onClick={() => { 
            navigate('/');
            setActivePage('home'); 
          }} 
          to='/'>
          {text.home[language]}
        </NavLink>
        <NavLink
          className="navlink"
          style={getNavLinkStyles({isActive:activePage ==='about', isPending:false})}
          onClick={() => { navigate('/about'); setActivePage('about'); }}
          to='/about'>{text.about[language]}</NavLink>
        <NavLink
          className="navlink"
          style={getNavLinkStyles({isActive:activePage==='news', isPending:false})}
          onClick={() => { navigate('/news'); setActivePage('news'); }}
          to='/news'>{text.news[language]}</NavLink>
        <NavLink
          className="navlink"
          style={getNavLinkStyles({isActive:activePage==='events', isPending:false})}
          onClick={() => { navigate('/events'); setActivePage('events'); }}
          to='/events'>{text.events[language]}</NavLink>
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

