// EventHeader.js
import { useState, useContext, useEffect } from 'react';
import { client } from '../../client';
import AppContext from '../../AppContext';


function EventHeader() {

    const { language } = useContext(AppContext);
    const [eventHeader, setEventHeader] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await client.getEntries({
                    content_type: 'eventHeader',
                    locale: language,
                });
                const entries = res.items[res.items.length - 1].fields.eventHeaderImage.fields.file.url;
                setEventHeader(entries);
            } catch (err) {
                console.log('Error fetching data from Contentful:', err);
            }
        }

        fetchData();
    }, [language]);

    return (
        <div className='events-header'>
            <img src={eventHeader} />
        </div>
    );
};

export default EventHeader;
