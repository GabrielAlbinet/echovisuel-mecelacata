export interface CreateVenueDTO {
  name: string;
  type: string;
  description?: string;
  capacity: number;
  location: string;
  image: string;
}

export interface VenueDTO {
  id: number;
  name: string;
  type: string;
  description: string | null;
  capacity: number;
  location: string;
  image: string;
}