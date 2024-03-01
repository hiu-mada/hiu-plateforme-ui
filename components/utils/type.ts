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
};
