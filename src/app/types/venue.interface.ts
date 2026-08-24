export interface Venue {
  id: number;
  name: string;
  type: string;
  description?: string,
  capacity: number;
  location: string;
  image: string;
}