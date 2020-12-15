type Role = {
  id?: string;
  name: string;
  description: string;
  type: string;
} 

export type User = {
  id?: string;
  username: string;
  email: string;
  role: Role;
}

export type AuthFields = {
  identifier: string;
  password: string;
}