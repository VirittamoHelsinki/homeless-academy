import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../AppContext';
import { client } from '../../client';
import img1 from '../../assets/eventimg.png'
import img2 from '../../assets/location.png'
import moment from 'moment';
import './EventsComponents.css';
import Pagination from '../Pagination';

const EventsComponent = () => {
  const { language } = useContext(AppContext);
  const [events, setEvents] = useState([]);
  // const [truncatedDescription, setTruncatedDescription] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(9);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.getEntries({
          content_type: 'event',
          locale: language,
        });
        const entries = res.items.map(item => item?.fields);
        setEvents(entries.map(formatEventTime));
      } catch (err) {
        console.log('Error fetching data from Contentful:', err);
      }
    }

    fetchData();
  }, [language]);

  const formatEventTime = (event) => {
    try {
      const startTime = moment(event?.starttime).format('HH:mm');
      const endTime = moment(event?.endtime).format('HH:mm');

      return {
        ...event,
        formattedTime: `${startTime} - ${endTime}`
      };
    } catch (error) {
      console.error('Error formatting time:', error);
      return {
        ...event,
        formattedTime: 'Invalid Time Range'
      };
    }
  };

  // Get current events based on currentPage
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  // const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const currentEvents = events
    .filter(event => moment(event?.endtime).isSameOrAfter(moment(), 'day'))
    .sort((a, b) => moment(a.starttime).diff(moment(b.starttime)))
    .slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='pt-4'>
      <div style={{ position: 'relative' }}>
        <img className='w-full' src={img1} alt='event image' />
        <div 
          className='events-header' 
          style={{ position: 'absolute', top: '35%', left: '20%', transform: 'translate(-50%, -50%)', textAlign: 'left', color: 'white', zIndex: 1 }}
        >
          <h1 className='text-3xl lg:text-8xl font-lexend p-3'>EVENTS</h1>
        </div>
      </div>
      <div className='pt-8 pl-8 pr-8 pb-6 lg:pl-16 lg:pr-16'>
        <div className='grid grid-cols-1 lg:gap-y-4 lg:grid-cols-3 lg:gap-4 w-full pb-4'>
          {currentEvents.map((event, index) => (
            <div key={index} className='card shadow-lg lg:shadow-sm items-left pb-3 ps-6 mb-2'>
              <div className='flex items-left gap-x-8 pt-6 lg:pt-10'>
                <h2 className='font-lexend font-bold'>
                  {event?.dates}
                </h2>
                <h2 className='font-lexend font-bold'>
                  {event?.formattedTime}
                </h2>
              </div>
              <h2 className='font-lexend py-2'>{event?.title}</h2>
              <div className='flex'>
                <img src={img2} alt='location icone' />
                <p className='text-blue'>{event?.eventlocation}</p>
              </div>
              <p className='font-lexend text-sm text-base py-2 lg:w-11/12 pb-8 pr-3 text-justify'>{event?.description}</p>
            </div>
          ))}
        </div>
        <Pagination articlesPerPage={eventsPerPage} totalArticles={events.length} paginate={paginate} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default EventsComponent;












