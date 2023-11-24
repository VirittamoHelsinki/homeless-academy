import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../AppContext';
import { client } from '../client';
import { Icon } from '@iconify/react';

function History() {
  const { language } = useContext(AppContext);

  const [timelineEvents, setTimelineEvents] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await client.getEntries({
          content_type: 'timelineEvent',
          locale: language,
        })
        const entries = response.items.map(item => item.fields)

        // Sort entries by date
        const sortedEntries = entries.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        
        setTimelineEvents(sortedEntries)
      } catch (error) {
        console.log('Error fetching timeline events from Contentful:', error);
      }
    }
    fetchData()
  }, [language])

  const parseDate = (dateString) => {
    const dateObj = new Date(dateString);
    const formattedDate = dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    return formattedDate;
  }

  if (timelineEvents.length === 0) {
    return (
      <div className='font-lexend font-extrabold text-3xl lg:text-5xl text-white bg-medium-green text-center py-10 px-5 pl-16 pr-16'>
          Loading...
      </div>
    );
  };

  return (
    <div className='bg-medium-green text-white text-center py-10 pl-16 pr-16'>

      {/* Title */}
      <h1 className='font-lexend font-extrabold text-3xl lg:text-5xl mb-5'>
        {language === 'fi-FI' ? 'Homeless Academyn historia' : 'History of Homeless Academy'}
      </h1>

      {/* Map first 3 events */}
      <ul className='timeline timeline-snap-icon timeline-compact timeline-vertical text-start'>
        {timelineEvents.slice(0, 3).map((event, index) => (
          <li key={index}>
            <hr />
            <div className='timeline-middle'>
              <Icon icon='icon-park-outline:dot' color='white' width='30' height='30' />
            </div>
            <div className='timeline-start mb-10'>
              <time>{parseDate(event.date)}</time>
              <div className='text-lg text-black font-black'>{event.title}</div>
              <p className='mb-5'>{event.description}</p>
            </div>
            <hr />
          </li>
        ))}
      </ul>

      {/* Show more button */}
      {!showAll && timelineEvents.length > 3 && (
        <button onClick={() => setShowAll(true)} className='mt-5 text-white flex mx-auto items-center gap-1'>
          {language === 'en-US' ? 'Show more' : 'Näytä lisää'}
          <Icon icon='mdi:arrow-down' color='white' />
        </button>
      )}

      {/* Map the rest of the events when "Show more" is clicked */}
      {showAll && 
        <ul className='timeline timeline-snap-icon timeline-compact timeline-vertical text-start'>
          {timelineEvents.slice(3).map((event, index) => (
            <li key={index}>
              <hr />
              <div className='timeline-middle'>
                <Icon icon='icon-park-outline:dot' color='white' width='30' height='30' />
              </div>
              <div className='timeline-start mb-10'>
                <time>{parseDate(event.date)}</time>
                <div className='text-lg text-black font-black'>{event.title}</div>
                <p className='mb-5'>{event.description}</p>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default History;
