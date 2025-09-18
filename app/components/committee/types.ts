export type Team = {
  name: string;
  image?: string;
  members: {
    name: string;
    role?: string;
    image?: string;
    filter?: string;
  }[];
};

export type Executive = {
  name: string;
  role: string;
  image?: string;
  filter?: string;
};

export type Director = {
  name: string;
  role: string;
  image?: string;
};
