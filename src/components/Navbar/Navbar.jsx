import { useState,useContext } from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';

import AppContext from '../../AppContext';
import './navbar.css';
import img from '../../assets/footer.png';
//import { Icon } from '@iconify/react';
import NavMobile from '../NavMobile';
import { text } from '../../utils/text';

function Navbar() {
  const navigate = useNavigate();
  const { language, setLanguage, handleShowContactForm } = useContext(AppContext);
 /*  const [isMenuOpen, setIsMenuOpen] = useState(false); */

  /* const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  } */
  const currentPage = useLocation();
  const [activePage, setActivePage] = useState(currentPage.pathname);
  
  const getNavLinkStyles = ({isActive, isPending}) => ({
    color: isPending ? 'none' : isActive ? '#2383D1' : 'inherit',
    borderBottom: isActive ? '2px solid #2383D1' : 'none',
    paddingBottom: isActive ? '0' : '0.5rem',
  });

  const handleChangeLanguage = () => {
    language === 'fi-FI' ? setLanguage('en-US') : setLanguage('fi-FI')
  }

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

      {/* Desktop navNavLinks */}
      <nav className='hidden lg:flex flex-row gap-4 xl:gap-10'>
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
          to="/about">
          {text.about[language]}
        </NavLink>
        <NavLink
          className="navlink"
          style={getNavLinkStyles({isActive:activePage==='news', isPending:false})}
          onClick={() => { navigate('/news'); setActivePage('news'); }} 
          to="/news">
          {text.news[language]}
        </NavLink>
        <NavLink
          className="navlink"
          style={getNavLinkStyles({isActive:activePage==='events', isPending:false})}
          onClick={() => { navigate('/events'); setActivePage('events'); }} 
          to="/events">
          {text.events[language]}
        </NavLink>
      </nav>
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
      <div className='dropdown dropdown-bottom dropdown-end lg:hidden'>
        <NavMobile />
      </div>

      {/* Mobile burger menu */}
      {/* This does not work on ONLY on safari */}
      {/* <div className='dropdown dropdown-bottom dropdown-end lg:hidden'>
        <button onClick={toggleMenu} className='m-1 btn bg-inherit border-none'>
          {isMenuOpen ? ( */}
            {/* Change this icon to an 'X' when menu is open */ }
            {/* <Icon icon='iconamoon:close' width='30' height='30' />
          ) : ( */}
            {/* Display the burger icon when menu is closed */}
            {/* <Icon icon='iconamoon:menu-burger-horizontal-light' width='30' height='30' />
          )}
        </button> */}

       {/*  <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className='p-2 shadow menu dropdown-content z-50 bg-base-100 rounded-box w-52'>
            <li> */}
              {/* Mobile Contact button */}
             {/*  <button
                className='px-4 py-2 rounded-3xl bg-blue text-lg font-semibold text-white self-center m-4'
                onClick={() => { handleShowContactForm(); toggleMenu() }}
              >
                {text.contactUs[language]}
              </button>
            </li> */}
            {/* Mobile change language button */}
            {/* <li>
              <button onClick={() => { handleChangeLanguage(); toggleMenu() }}>{text.changeLanguage[language]}</button>
            </li> */}
            {/* Mobile navNavLinks */}
            {/* <li>
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
      </div> */}
    </div>
  )
}

export default Navbar;
