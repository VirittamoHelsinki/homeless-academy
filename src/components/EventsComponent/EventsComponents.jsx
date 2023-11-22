import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../AppContext';
import { client } from '../../client';
import moment from 'moment';

const EventsComponent = () => {
  const { language } = useContext(AppContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.getEntries({
          content_type: 'event'
        });
        const entries = res.items.map(item => item.fields);
        setEvents(entries.map(formatEventTime));
      } catch (err) {
        console.log('Error fetching data from Contentful:', err);
      }
    }

    fetchData();
  }, [language]);

  const formatEventTime = (event) => {
    try {
      const startTime = moment(event.starttime).format('HH:mm');
      const endTime = moment(event.endtime).format('HH:mm');

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
    <div className='bg-wgite pt-6 pl-16 pr-16 pb-24'>
      <img src="" alt="" />
      <div className="grid grid-cols-1 gap-y-28 lg:grid-cols-3  lg:gap-8 w-full ">
        {events.map((event, index) => (
          <div key={index} className="h-56 bg-white  items-left pb-10 mb-10">
            <div className='flex items-left gap-x-8'>
              <h2 className="font-lexend font-bold ">
                {event.dates}
              </h2>
              <h2 className="font-lexend font-bold ">
                {event.formattedTime}
              </h2>

            </div>
            <p className='text-center font-lexend text-sm text-base'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsComponent;
