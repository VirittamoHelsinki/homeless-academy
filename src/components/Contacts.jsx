import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../AppContext';
import { client } from '../client'

function Contacts() {
  const { language } = useContext(AppContext);
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const response = await client.getEntries()
      const entries = response.items.map(item => item.fields)
      setContacts(entries)
    }
    fetchData()
  }, [])
  console.log(contacts)

  return (
  <div className='bg-medium-green font-lexend text-white font-extrabold text-3xl lg:text-5xl text-center py-5'>
    <h1>{language === 'FI' ? 'Homeless Academyn tiimi' : 'Meet our team'}</h1>
  </div>
  );
}

export default Contacts;
