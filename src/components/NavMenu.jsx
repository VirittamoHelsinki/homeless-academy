import { useState, useContext, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { text } from '../utils/text';
import AppContext from '../AppContext';

function NavMenu (){
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, handleShowContactForm, handleHideNavMenu } = useContext(AppContext);
  const navBarRef = useRef(null); // Ref to reference the navigation bar button

  const toggleMenu = () =>{
      setIsMenuOpen(!isMenuOpen)
  }

  // Function to close menu when user clicked outside of nav menu
  const handleClickOutside = (event) => {
    if(isMenuOpen && !event.target.closest('.dropdown')){
      setIsMenuOpen(false);
    }
  }
  const handleClickNavBar = () =>{
    toggleMenu();
  };

  useEffect(()=>{
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen])

  const handleChangeLanguage = () => {
    language === 'fi-FI' ? setLanguage('en-US') : setLanguage('fi-FI');
  };

  return(
    <>
      <div className="navbar-end">
        <div id='dropdown-nav' className="dropdown lg:hidden" ref={navBarRef}>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" 
            onClick={handleClickNavBar}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className={`menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <button 
                className='px-4 py-2 rounded-3xl bg-blue text-lg font-semibold text-white self-center m-4'
                onClick={() => { handleShowContactForm(); setIsMenuOpen(false); }}
              >{text.contactUs[language]}</button>
            </li>
            <li>
              <button 
                onClick={()=>{handleChangeLanguage(); handleHideNavMenu();setIsMenuOpen(false)}}
                >{text.changeLanguage[language]}</button>
            </li>
            <li>
              <Link 
                to={"/"}
                onClick={()=>handleHideNavMenu()}
                >{text.home[language]}</Link>
            </li>
            <li>
              <Link 
                to={'/about'}
                onClick={()=>handleHideNavMenu()}
                >{text.about[language]}</Link>
            </li>
            <li>
              <Link 
                to={'/news'}
                onClick={handleHideNavMenu}
                >{text.news[language]}</Link>
            </li>
            <li>
              <Link 
                to={'/events'}
                onClick={handleHideNavMenu}
              >{text.events[language]}</Link>
            </li>
          </ul>
        </div>
      </div>
    </>  
  )
}

export default NavMenu;