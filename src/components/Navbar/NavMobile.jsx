import { useState, useContext, useEffect, useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { text } from '../../utils/text';
import AppContext from '../../AppContext';

function NavMobile({activePage, setActivePage}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, handleShowContactForm } = useContext(AppContext);
  const navBarRef = useRef(null); // Ref to reference the navigation bar button

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Function to close menu when user clicked outside of nav menu
  const handleClickOutside = (event) => {
    if (isMenuOpen && !event.target.closest('.dropdown')) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen])

  const handleChangeLanguage = () => {
    language === 'fi-FI' ? setLanguage('en-US') : setLanguage('fi-FI');
  };

  const handleCurrentLinkClick=(to)=> {
    if(pathname === to) setIsMenuOpen(false);
    setActivePage(to);
  };

  return (
    <>
      <div className="navbar-end">
        <div
          id='dropdown-nav'
          className="dropdown lg:hidden"
          ref={navBarRef}
        >
          <div
            tabIndex={0} role="button"
            className="btn btn-ghost btn-circle"
          >
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              )}
            </button>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul tabIndex={0}
              //className={'menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'}
              className='absolute menu dropdown-content right-0 p-2 shadow bg-base-100 rounded-box w-52 text-lg'
            >
              <li>
                <button
                  className='px-4 py-2 rounded-3xl bg-blue text-lg font-semibold text-white self-center m-4'
                  onClick={() => { handleShowContactForm();}}
                >{text.contactUs[language]}</button>
              </li>
              <li>
                <button
                  onClick={() => { handleChangeLanguage();}}
                >{text.changeLanguage[language]}</button>
              </li>
              <li>
                <Link
                  to={"/"}
                  onClick={() => handleCurrentLinkClick('/')}
                >{text.home[language]}</Link>
              </li>
              <li>
                <Link
                  to={'/about'}
                  onClick={() => handleCurrentLinkClick('/about')}
                >{text.about[language]}</Link>
              </li>
              <li>
                <Link
                  to={'/news'}
                  onClick={()=>handleCurrentLinkClick('/news')}
                >{text.news[language]}</Link>
              </li>
              <li>
                <Link
                  to={'/events'}
                  onClick={()=>handleCurrentLinkClick('/events')}
                >{text.events[language]}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default NavMobile;