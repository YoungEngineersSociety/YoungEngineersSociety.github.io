import React, { useState } from 'react';
import { Event } from '../../../../hooks/Apollo/useEvents/useEventData';
import ScrollContainer from 'react-indiana-drag-scroll'

interface Props {
    events: Event[],
    filters: string[],
}

export const evolveEvent = (event: Event) => (
    <div className="flex-shrink-0 slide">
        <div className="p-4 hover:bg-gray-200 rounded-xl">
            <img src={event.poster.url} alt={event.poster.alt} className="rounded h-70" />
            <div className="text-right ml-full smallcaps">{event.date}</div>
        </div>
    </div>
)

const EventsCarousel: React.FC<Props> = ({
    events,
    filters
}) => {
    const [isScrolling, setIsScrolling] = useState(false);
    return (
        <div className="py-18 text-primary">
            <ScrollContainer className={`flex flex-row w-full overflow-visible slider ${isScrolling? 'cursor-grabbing' : 'snap cursor-grab'}`} horizontal hideScrollbars onStartScroll={() => setIsScrolling(true)} onEndScroll={() => setIsScrolling(false)}>
                {events.filter(event => filters.length === 0? true : filters.filter(filterType => event.type.includes(filterType)).length > 0).map(event => evolveEvent(event))}
            </ScrollContainer>
        </div>
    )
}

export default EventsCarousel;