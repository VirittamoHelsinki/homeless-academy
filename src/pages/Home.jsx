import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../AppContext';
import { client } from '../client';
import Contacts from '../components/Contacts';
import HeaderComponent from '../components/Headercomponent/HeaderComponent';
import Identity from '../components/Identity/Identity';

function Home() {
  const { language } = useContext(AppContext);
  const [content, setContent] = useState();

  // Fetch data from Contentful
  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await client.getEntries({
          content_type: 'homePageText',
          locale: language,
        })
        const entries = response.items[response.items.length - 1].fields
        setContent(entries)
      } catch (error) {
        console.log('Error fetching from Contentful:', error);
      }
    }
    fetchContent()
  }, [language])

  return (
    <div>
      {content && (
        <div>
          <HeaderComponent
            headerText={content.headerText}
            headerImage={content.headerImage.fields.file.url}
          />
          <Identity 
            introduction={content.introduction}
            image2={content.image2.fields.file.url}
            subtitle={content.subtitle}
            activitiesDescription1={content.activitiesDescription1}
            activitiesDescription2={content.activitiesDescription2}
          />
        </div>
      )}
      <Contacts />
    </div>
  )
}

export default Home;






