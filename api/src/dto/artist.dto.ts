export interface CreateArtistDTO {
  name: string;
  category: string;
  image: string;
  description: string;
}

export interface ArtistDTO {
  id: number; // On fait pas rentrer d'id (il s'auto-incrémente) mais on en renvoie un évidemment
  name: string;
  category: string;
  image: string;
  description: string;
}