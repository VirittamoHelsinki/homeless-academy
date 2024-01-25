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
        });
        /* const entries = response.items.map((item) => ({
          id: item.sys.id,
          fields: item.fields, 
         })); */

        const entries = response.items.map(item => item.fields)
        setContacts(entries)
        console.log(entries);
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
  }

  return (
  <div className='bg-medium-green text-center py-10 text-white'>
    <h1 className='font-lexend font-extrabold text-3xl lg:text-5xl p-5'>{language === 'fi-FI' ? 'Homeless Academyn tiimi' : 'Meet our team'}</h1>
    <div className='flex flex-wrap w-full gap-12 mt-12 px-10'>
      {contacts.map((contact,index) => (
        <div key={index} className='flex flex-col gap-2 items-start justify-start max-w-40'>
          {/* if user does not put img, it comes empty image  */}
          <img src={contact.profilePicture?.fields?.file?.url} className='w-36 h-36 rounded-full lg:rounded-sm bg-white'/>
       {/*    {contact.profilePicture && contact.profilePicture.fields && contact.profilePicture.fields.file.url ? (
            <img src={contact.profilePicture.fields.file.url} className='w-36 h-36 rounded-full lg:rounded-sm'/>
          ):(
            <div className='font-semibold mt-3'>
              <p>No image</p>
            </div>
          )} */}
          <p className='font-semibold mt-3'>{contact.firstName} {contact.lastName}</p>
          <p>{contact.title}</p>
          <p>{contact.phoneNumber}</p>
          <p>{contact.email}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Contacts;
