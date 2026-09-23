export interface CreateFestivalDTO {
  name: string;
  description: string;
  mainLocation: string;
  poster: string;
  startDate: string;
  endDate: string;
}

export interface FestivalDTO {
  id: number;
  name: string;
  description: string;
  mainLocation: string;
  poster: string;
  startDate: string;
  endDate: string;
}