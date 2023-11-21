import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../AppContext';
import { client } from '../client';

function History() {
  const { language } = useContext(AppContext);
  const [timelineEvents, setTimelineEvents] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const response = await client.getEntries({
        content_type: 'timelineEvent',
        locale: language,
      })
      const entries = response.items.map(item => item.fields)
      setTimelineEvents(entries)
    }
    fetchData()
  }, [language])
  console.log(timelineEvents)

  const parseDate = (dateString) => {
    const dateObj = new Date(dateString);
    const formattedDate = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    return formattedDate;
  }

  return (
    <div className='bg-medium-green text-white text-center py-10 px-5'>
      <h1 className='font-lexend font-extrabold text-3xl lg:text-5xl mb-5'>
        {language === 'fi-FI' ? 'Homeless Academyn historia' : 'History of Homeless Academy'}
      </h1>
      <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical text-start">
        {timelineEvents.map((event, index) => (
          <li key={index}>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start mb-10">
              <time>{parseDate(event.date)}</time>
              <div className="text-lg text-black font-black">{event.title}</div>
              <p className='mb-5'>{event.description}</p> 
            </div>
            <hr/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
