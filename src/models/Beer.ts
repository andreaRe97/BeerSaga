export type Beer = {
  id?: string;
  brand: string;
  name: string;
  alcohol: number;
  isFavourite: boolean;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
};

export const BeerMock = {
  brand: "",
  name: "",
  alcohol: 0,
  isFavourite: false,
};
