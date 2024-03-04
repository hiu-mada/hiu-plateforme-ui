export type TeamChallenge = {
  id: number;
  name: string;
  slogan: string;
  subject: {
    name: string;
    description: string;
  };
  User: {
    id: number;
    username: string;
    email: string;
    password: string;
    profile_picture: string;
  }[];
  University: {
    name: string;
    url: string;
  };
  votes: number;
  vote: () => void;
};

export interface TableRowData {
  id: number;
  response: string;
  commentary: string;
  id_challenger_team: {
    id: number;
    name: string;
    slogan: string;
    id_university: {
      id: number;
      name: string;
      description: string;
    };
    id_discipline: {
      id: number;
      name: string;
      description: string;
    };
  };
  id_subject: {
    id: number;
    title: string;
    description: string;
    max_score: number;
  };
}
