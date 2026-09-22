export interface CreateTicketDTO {
  name: string;
  description: string;
  price: number;
  quantity: number;
  condition: string;
  available: boolean;
}

export interface TicketDTO {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  condition: string;
  available: boolean;
}