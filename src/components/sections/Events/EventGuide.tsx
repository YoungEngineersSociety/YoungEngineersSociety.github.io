import React, { useState } from 'react';
import EventData from '../../../hooks/Apollo/useEvents/useEventData';
import FilterBox from './FilterBox/FilterBox';
import EventsCarousel from './EventsCarousel/EventsCarousel';
import { EventsBlock } from '../../../Blocks/EventsBlock';

interface Props {
    data: EventsBlock,
}

const EventGuide: React.FC<Props> = ({ data }) => {
    const {loading, error, events, types} = EventData();
    const [filters, setFilters] = useState([] as string[]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :({error.message + ' ' + error.graphQLErrors + ' ' + data}</p>;
  
    return (
      <div className="flex flex-col items-center my-48 primary-gray-700">
        <div className="w-full">
          <h2 className="mt-20 text-6xl">{data.title}</h2>
        </div>
        <FilterBox eventTypes={types} filters={filters} setFilters={setFilters} />
        <EventsCarousel events={events} filters={filters} />
        <div className="flex flex-row items-center justify-between w-full px-12 py-8 mx-40 max-w-content bg-orange-light text-primary">
            <p className="text-2xl text-center">data.disclaimer</p>
            <button className="btn">more about member benefits</button>
        </div>
      </div>
    )
  }

export default EventGuide;