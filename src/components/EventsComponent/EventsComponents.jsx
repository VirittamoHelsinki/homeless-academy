import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../AppContext';
import { client } from '../../client';
import img1 from '../../assets/eventimg.png'
import img2 from '../../assets/location.png'
import moment from 'moment';
import './EventsComponents.css';



const EventsComponent = () => {
  const { language } = useContext(AppContext);
  const [events, setEvents] = useState([]);
  const [truncatedDescription, setTruncatedDescription] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.getEntries({
          content_type: 'event'
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


  console.log('events', events);

  return (
    <div className='pt-4'>
      <div style={{ position: 'relative' }}>
        <img className='w-full' src={img1} alt="event image" />
        <div className='events-header' style={{ position: 'absolute', top: '35%', left: '20%', transform: 'translate(-50%, -50%)', textAlign: 'left', color: 'white', zIndex: 1 }}>
          <h1 className='text-3xl lg:text-8xl font-lexend p-3'>EVENTS</h1>

        </div>
      </div>
      <div className='bg-wgite pt-8 pl-8 pr-8 pb-8  lg:pl-16 lg:pr-16 lg:pb-16'>

        <div className="grid grid-cols-1 lg:gap-y-4 lg:grid-cols-3  lg:gap-4 w-full ">
          {events.map((event, index) => (
            <div key={index} className="card shadow-lg h-56 lg:h-64 bg-white  items-left pb-3 ps-6  mb-2">
              <div className='flex items-left gap-x-8 pt-6 lg:pt-10'>
                <h2 className="font-lexend font-bold  ">
                  {event?.dates}
                </h2>
                <h2 className="font-lexend font-bold ">
                  {event?.formattedTime}
                </h2>
              </div>
              <h2 className='font-lexend py-2'>{event?.title}</h2>
              <div className='flex'>
                <img src={img2} alt="location icone" />
                <p className='text-blue'>{event?.eventlocation}</p>
              </div>
              <p className=' font-lexend text-sm text-base py-2 pb-4 lg:w-3/4'>{event?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsComponent;





