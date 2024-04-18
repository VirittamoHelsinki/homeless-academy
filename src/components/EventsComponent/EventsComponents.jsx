import { useContext, useEffect, useState, useRef  } from 'react';
import AppContext from '../../AppContext';
import { client } from '../../client';
import img2 from '../../assets/location.png'
import moment from 'moment';
import './EventsComponents.css';
import Pagination from '../Pagination';
import EventHeader from '../EventHeader/EventsHeader';

const EventsComponent = () => {
  const { language } = useContext(AppContext);
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(9);
  const eventsSectionRef = useRef(null); // Reference to the events section
  
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

  const filteredEvents = events
    .filter(event => moment(event?.endtime).isSameOrAfter(moment(), 'day'))
    .sort((a, b) => moment(a.starttime).diff(moment(b.starttime)));

  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  
   // Function to scroll to the events section
   const scrollToEventsSection = () => {
    if (window.innerWidth >= 768 && eventsSectionRef.current) {
      eventsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToEventsSection(); // Scroll to events section when pagination changes
  };

  return (
    <div className='pt-4'>
      <div style={{ position: 'relative' }}>
        {/* This image should be changed by user */}
        <EventHeader />
        <div
          className='events-header'
          style={{ position: 'absolute', top: '20%', textAlign: 'left', color: 'white', zIndex: 1 }}
        >
          <h1 className='text-3xl lg:text-8xl font-lexend font-extrabold ml-16'>
            {language === 'en-US' ? 'EVENTS' : 'TAPAHTUMAT'}
          </h1>
        </div>
      </div>
      <div ref={eventsSectionRef} id="eventsSection" className='pt-8 pl-8 pr-8 pb-6 lg:pl-16 lg:pr-16'>
        <div className='grid grid-cols-1 lg:gap-y-4 lg:grid-cols-3 lg:gap-4 p-4 w-full'>
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
        {filteredEvents.length > 9 &&
          <Pagination scrollToEventsSection={scrollToEventsSection} articlesPerPage={eventsPerPage} totalArticles={filteredEvents.length} paginate={paginate} currentPage={currentPage} />
        }
      </div>
    </div>
  );
};

export default EventsComponent;












