export interface CreateParticipantDTO {
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  ticketId: number;
}

export interface ParticipantDTO {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  ticketId: number;
  ticket: { id: number; name: string };
}