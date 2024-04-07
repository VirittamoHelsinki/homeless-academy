import { useContext } from 'react';

import { useNavigate, NavLink, useLocation } from 'react-router-dom';

import AppContext from '../../AppContext';
import NavMobile from './NavMobile';
import { text } from '../../utils/text';
import img from '../../assets/footer.png';
import './navbar.css';


function Navbar({activePage, setActivePage}) {
  const { pathname } = useLocation();

  const { language, setLanguage, handleShowContactForm } = useContext(AppContext);

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
          to="/"
          isactive={()=>activePage === '/'}
          style={{
            color: activePage === '/' ? '#2383D1' : 'inherit',
            borderBottom: activePage === '/' ? '2px solid #2383D1' : 'none',
            paddingBottom: activePage === '/' ? '0.5rem' : '0',
          }}
          onClick={()=>setActivePage('/')}>
          {text.home[language]}  
        </NavLink>
        <NavLink
          className="navlink"
          to="/about"
          isactive={()=>activePage === '/about'}
          style={{
            color: activePage === '/about' ? '#2383D1' : 'inherit',
            borderBottom: activePage === '/about' ? '2px solid #2383D1' : 'none',
            paddingBottom: activePage === '/about' ? '0.5rem' : '0',
          }}
          onClick={()=>setActivePage('/about')}>
          {text.about[language]}  
        </NavLink>
        <NavLink
          className="navlink"
          to="/news"
          isactive={()=>activePage === '/news'}
          style={{
            color: activePage === '/news' ? '#2383D1' : 'inherit',
            borderBottom: activePage === '/news' ? '2px solid #2383D1' : 'none',
            paddingBottom: activePage === '/news' ? '0.5rem' : '0',
          }}
          onClick={()=>setActivePage('/news')}>
          {text.news[language]}  
        </NavLink>
        <NavLink
          className="navlink"
          to="/events"
          isactive={()=>activePage === '/events'}
          style={{
            color: activePage === '/events' ? '#2383D1' : 'inherit',
            borderBottom: activePage === '/events' ? '2px solid #2383D1' : 'none',
            paddingBottom: activePage === '/events' ? '0.5rem' : '0',
          }}
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
        <NavMobile />
      </div>
    </div>
  )
}

export default Navbar;
