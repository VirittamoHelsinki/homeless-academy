import React from 'react';
import Contacts from '../components/Contacts';
import HeaderComponent from '../components/Headercomponent/HeaderComponent';
import Identity from '../components/Identity/Identity';

function Home() {
  return (
    <div >
      <HeaderComponent />
      <Identity />
      <Contacts />
    </div>
  )
}

export default Home;






