import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../AppContext';
import { client } from '../client'

function Contacts() {
  const { language } = useContext(AppContext);
  const [contacts, setContacts] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.getEntries({
          content_type: 'contact'
        })
        const entries = response.items.map(item => item.fields)
        setContacts(entries)
      } catch (error) {
        console.log('Error fetching contacts data from Contentful:', error);
      }
    }
    fetchData()
  }, [])

  if (contacts.length === 0) {
    return (
      <div className='bg-medium-green text-center py-10 text-white font-lexend font-extrabold text-3xl lg:text-5xl'>
          Loading...
      </div>
    );
  };

  return (
  <div className='bg-medium-green text-center py-10 text-white'>
    <h1 className='font-lexend font-extrabold text-3xl lg:text-5xl p-5'>{language === 'fi-FI' ? 'Homeless Academyn tiimi' : 'Meet our team'}</h1>
    <div className='flex flex-wrap w-full justify-center gap-12 mt-12 px-10'>
      {contacts.map((contact, index) => (
        <div key={index} className='flex flex-col gap-2 items-center lg:items-start'>
          <img src={contact.profilePicture.fields.file.url} className='w-36 h-36 rounded-full lg:rounded-sm'/>
          <p className='font-semibold mt-3'>{contact.firstName} {contact.lastName}</p>
          <p>{contact.phoneNumber}</p>
          <p>{contact.email}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Contacts;
