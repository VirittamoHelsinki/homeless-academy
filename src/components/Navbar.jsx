import React from 'react';

function Navbar({ language, setLanguage }) {

  const handleChangeLanguage = () => {
    language === 'FI' ? setLanguage('EN') : setLanguage('FI')
    console.log('language:', language)
  }

  return (
    <div>
      <img src='/src/assets/logo.png'/>
      <p>HOMELESS ACADEMY</p>
      <p>DESIRE TO CHANGE</p>
      <div>
        <p>About</p>
        <p>News</p>
        <p>Events</p>
        <p>Stories</p>
      </div>
      <p onClick={handleChangeLanguage}>FI</p>
      <button>Contact us</button>
    </div>
  )
}

export default Navbar;
