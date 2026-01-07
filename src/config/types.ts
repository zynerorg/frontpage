export type Partner = {
  id: string;
  title: string;
  icon: string;
  link: string | null;
};

export type Team = {
  id: string;
  title: string;
  summary: string;
  description: string;
};

export type Role = {
  id: string;
  name: string;
  weight: number;
};

export type UserTeamAssociation = {
  id: string;
  roles: string[] | null;
};

export type UserLinkAssociation = {
  type: string;
  link: string;
};

export type User = {
  id: string;
  name: string;
  avatar: string | null;
  teams: UserTeamAssociation[];
  links: UserLinkAssociation[] | null;
};

export type WebConfig = {
  partners: Partner[];
  teams: Team[];
  roles: Role[];
  users: User[];
};
