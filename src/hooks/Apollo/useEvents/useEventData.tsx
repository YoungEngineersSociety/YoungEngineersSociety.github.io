import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { pathOr } from 'ramda';

const EVENTS_QUERY = gql`
query {
  allEvents {
    date
    dateConfirmed
    poster {
      url
      alt
    }
    eventType {
      name
    }
  }
  allEventTypes {
    name
  }
}
`;

interface RawEvent {
  date: string,
  dateConfirmed: boolean,
  poster: Image,
  eventType: {
    name: string,
  }[],
}

export interface Event {
  date: string,
  poster: Image,
  type: string[],
}

export interface Image {
  url: string,
  alt: string,
}

const displayDate = (date: Date) => {
  const day: string = date.getDate().toString();
  const month: string = convertMonth(date.getMonth());
  return day + " " + month;
}

const convertMonth = (month: number) => {
  switch(month) {
    default:
    case 0: return "JAN";
    case 1: return "FEB";
    case 2: return "MAR";
    case 3: return "APR";
    case 4: return "MAY";
    case 5: return "JUN";
    case 6: return "JUL";
    case 7: return "AUG";
    case 8: return "SEP";
    case 9: return "OCT";
    case 10: return "NOV";
    case 11: return "DEC";
  }
}

const evolveRawEvent = () => (raw: RawEvent): Event => ({
  date:  raw.dateConfirmed? displayDate(new Date(raw.date)) : "tbc",
  poster: raw.poster,
  type: raw.eventType.map(t => t.name.replace(" ", "_")),
} as Event)

const useEventData = () => {
  const { loading, error, data } = useQuery(EVENTS_QUERY);

  if (loading || error) return ({
    loading,
    error,
    events: [] as Event[],
    types: [] as {name: string, id: string}[],
  });
  
  const rawEvents = pathOr(
    {},
    ['allEvents'],
    data
  ) as any as RawEvent[];

  const events: Event[] = rawEvents.map(evolveRawEvent());

  const rawEventTypes = pathOr(
    {},
    ['allEventTypes'],
    data
  ) as any as { name: string }[];

  const eventTypes = rawEventTypes.map(eT => ({name: eT.name, id: eT.name.replace(" ", "_")}));

  return ({
    loading,
    error,
    events,
    types: eventTypes
  })
}

export default useEventData;