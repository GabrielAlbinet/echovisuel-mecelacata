export type EventStatus = "scheduled" | "cancelled";

export interface CreateEventDTO {
  artistId: number;
  venueId: number;
  date: string;     
  startTime: string;
  endTime: string;  
  status?: EventStatus;
}

export interface EventDTO {
  id: number;
  artistId: number;
  venueId: number;
  date: string;
  startTime: string;
  endTime: string;
  status: EventStatus;
  artist: { id: number; name: string };
  venue: { id: number; name: string };
}