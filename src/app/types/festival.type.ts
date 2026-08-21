export interface FestivalType {
    name: string;
    description: string;
    dates: Dates[];
    mainLocation: string;
    poster: string;
}
export interface Dates {
    startDate: Date;
    endDate: Date;
}