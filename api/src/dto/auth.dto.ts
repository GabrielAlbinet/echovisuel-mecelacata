export interface CredentialsDTO {
  email: string;
  password: string;
}

export interface UserDTO {
  id: number;
  email: string;
}

export interface AuthResponseDTO {
  token: string;
  user: UserDTO;
}