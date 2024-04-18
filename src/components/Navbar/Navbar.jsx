import { useContext } from 'react';

import { NavLink, Link } from 'react-router-dom';

import AppContext from '../../AppContext';
import NavMobile from './NavMobile';
import { text } from '../../utils/text';
import img from '../../assets/footer.png';
import './navbar.css';


function Navbar({activePage, setActivePage}) {
  const { language, setLanguage, handleShowContactForm } = useContext(AppContext);

  const handleChangeLanguage = () => {
    language === 'fi-FI' ? setLanguage('en-US') : setLanguage('fi-FI')
  }

  return (
    <div className='flex flex-row justify-between h-10 items-center py-10 px-5 fixed top-0 w-full bg-white z-50'>

      {/* Logo */}
      <Link 
        to='/'
        className='flex gap-2 items-center cursor-pointer'
        >
        <img src={img} className='w-9 h-9' alt='logo' />
        <div className='flex flex-col font-lexend text-center'>
          <p className='border-b border-blue font-semibold text-dark-gray'>HOMELESS ACADEMY</p>
          <p className='text-blue'>DESIRE TO CHANGE</p>
        </div>
      </Link>

      {/* Desktop navNavLinks */}
      <nav className='hidden lg:flex flex-row gap-4 xl:gap-10'>
        <NavLink
          className={`navlink ${activePage === '/' ? 'active': 'inactive'}`}
          to="/"
          isactive={()=>activePage === '/'}
          onClick={()=>setActivePage('/')}>
          {text.home[language]}  
        </NavLink>
        <NavLink
          className={`navlink ${activePage === '/about' ? 'active': 'inactive'}`}
          to="/about"
          isactive={()=>activePage === '/about'}
          onClick={()=>setActivePage('/about')}>
          {text.about[language]}  
        </NavLink>
        <NavLink
          className={`navlink ${activePage === '/news' ? 'active': 'inactive'}`}
          to="/news"
          isactive={()=>activePage === '/news'}
          onClick={()=>setActivePage('/news')}>
          {text.news[language]}  
        </NavLink>
        <NavLink
          className={`navlink ${activePage === '/events' ? 'active': 'inactive'}`}
          to="/events"
          isactive={()=>activePage === '/events'}
          onClick={()=>setActivePage('/events')}>
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
        <NavMobile activePage={activePage} setActivePage={setActivePage} />
      </div>
    </div>
  )
}

export default Navbar;
