export type EventStatus = 'scheduled' | 'cancelled';

export interface FestivalEvent {
  id: number;
  artistId: number;
  venueId: number;
  date: string;      // "2026-08-21"
  startTime: string; // "20:00"
  endTime: string;   // "21:30"
  status: EventStatus;
}
