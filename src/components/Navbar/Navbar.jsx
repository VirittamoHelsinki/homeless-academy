import { useContext, useState } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';

import AppContext from '../../AppContext';
import './navbar.css';
import img from '../../assets/footer.png';
//import { Icon } from '@iconify/react';
import NavMenu from '../NavMenu';
import { text } from '../../utils/text';

function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const currentPage = useLocation();
  const { language, setLanguage, handleShowContactForm } = useContext(AppContext);
  const [activePage, setActivePage] = useState(currentPage.pathname);
 /*  const [isMenuOpen, setIsMenuOpen] = useState(false); */

  /* const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  } */

  const handleChangeLanguage = () => {
    language === 'fi-FI' ? setLanguage('en-US') : setLanguage('fi-FI')
  }

  console.log(activePage);

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
      <nav className='hidden lg:flex flex-row gap-4 xl:gap-10'>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}
          onClick={() => { navigate('/'); setActivePage('home'); }}
          to="/"
        >
          {text.home[language]}
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}
          onClick={() => { navigate('/about'); setActivePage('/about'); }}
          to="/about"
        >
          {text.about[language]}
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}
          onClick={() => { navigate('/news'); setActivePage(pathname); }}
          to="/news"
        >
          {text.news[language]}
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}
          onClick={() => { navigate('/events'); setActivePage(pathname); }}
          to="/events"
        >
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
        <NavMenu />
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
            {/* Mobile navlinks */}
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
