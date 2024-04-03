import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//import text from '../utils/text';
import AppContext from '../AppContext';
import {Icon} from '@iconify/react';


function DrawerMenu (){
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, handleShowContactForm } = useContext(AppContext);
    const navigate = useNavigate();
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }

    const handleChangeLanguage = () => {
        language === 'fi-FI' ? setLanguage('en-US') : setLanguage('fi-FI');
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
    

    return(
        <div className='lg:hidden'>
            <div className='dropdown dropdown-bottom dropdown-end lg:hidden'>
                <button onClick={toggleMenu} className='m-1 btn bg-inherit border-none'>
                    {isMenuOpen ? (
                    /* Change this icon to an 'X' when menu is open */
                    <Icon icon='iconamoon:close' width='30' height='30' />
                    ) : (
                    /* Display the burger icon when menu is closed */
                    <Icon icon='iconamoon:menu-burger-horizontal-light' width='30' height='30' />
                    )}
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className='p-2 shadow menu dropdown-content z-50 bg-base-100 rounded-box w-52'>
                        <li>
                        {/* Mobile Contact button */}
                        <button
                            className='px-4 py-2 rounded-3xl bg-blue text-lg font-semibold text-white self-center m-4'
                            onClick={() => { handleShowContactForm(); toggleMenu() }}
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

export default DrawerMenu;