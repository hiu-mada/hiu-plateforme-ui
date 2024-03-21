interface User {
  id: number;
  user_name: string;
  email: string;
  password: string;
  profile_picture: string;
  university: {
    name: string;
    description: string;
  };
  subject: {
    title: string;
    description: string;
    max_score: number;
  };
  team: {
    name: string;
    slogan: string;
  };
}

export const users: User[] = [
  {
    id: 0,
    user_name: "user name",
    email: "mail@gmail.com",
    password: "string",
    profile_picture: "",
    university: {
      name: "university",
      description: "description",
    },
    subject: {
      title: "subject",
      description: "description",
      max_score: 95,
    },
    team: {
      name: "team",
      slogan: "slogan",
    },
  },
];
