import React, { useEffect, useState} from 'react';
import { Icon } from '@iconify/react';
import { scrollToTop } from '../utils/utils';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);
  
  // Button is displayed after scrolling 500px
  useEffect(() => {
    const handleShowButton = () => {
      window.pageYOffset > 500 ? setShowButton(true) : setShowButton(false)
    }

    window.addEventListener('scroll', handleShowButton)

    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);
  
  return (
    <div>
      {showButton &&
        <button 
          className='btn btn-circle border-none bg-dark-gray fixed bottom-10 right-[3%] z-50'
          onClick={scrollToTop}
        >
          <Icon icon='tabler:arrow-up' color='white' width='30' />
        </button>
      }
    </div>
  );
}

export default ScrollToTopButton;
