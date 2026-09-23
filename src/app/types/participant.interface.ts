export interface Participant {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  ticketId: number;
  ticket?: { id: number; name: string };
}

export type ParticipantPayload = Omit<Participant, 'id' | 'ticket'>;