export interface FestivalType {
  id: number;
  name: string;
  description: string;
  mainLocation: string;
  poster: string;
  startDate: string;
  endDate: string;
}

export type FestivalPayload = Omit<FestivalType, 'id'>;