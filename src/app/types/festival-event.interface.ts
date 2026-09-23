export type EventStatus = 'scheduled' | 'cancelled';

export interface FestivalEvent {
  id: number;
  artistId: number;
  venueId: number;
  date: string;
  startTime: string;
  endTime: string;
  status: EventStatus;
  artist?: { id: number; name: string };
  venue?: { id: number; name: string };
}

export type EventPayload = Omit<FestivalEvent, 'id' | 'artist' | 'venue'>;