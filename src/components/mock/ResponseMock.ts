import { TableRowData } from "../utils/type";

export const mockData: TableRowData[] = [
  {
    id: 1,
    response: "Response 1",
    commentary: "Great effort!",
    id_challenger_team: {
      id: 1,
      name: "Acme Inc",
      slogan: "We're the best!",
      id_university: {
        id: 1,
        name: "Varsity University",
        description: "Where champions are made.",
      },
      id_discipline: {
        id: 1,
        name: "Computer Science",
        description: "The study of computing systems.",
      },
    },
    id_subject: {
      id: 1,
      title: "Introduction to Programming",
      description:
        "A great start to your coding journey. This course introduces you to the world of programming. You will learn the basics of writing code, understanding algorithms, and solving problems using a computer.",
      max_score: 100,
    },
  },
  {
    id: 2,
    response: "Response 2",
    commentary: "Well done!",
    id_challenger_team: {
      id: 2,
      name: "Next Education",
      slogan: "Shaping the future.",
      id_university: {
        id: 2,
        name: "Science Academy",
        description: "Explore. Discover. Innovate.",
      },
      id_discipline: {
        id: 2,
        name: "Physics",
        description: "The study of matter and energy.",
      },
    },
    id_subject: {
      id: 2,
      title: "The Solar System",
      description:
        "An in-depth look at our cosmic neighborhood. Learn about the planets, moons, asteroids, and comets that make up our solar system.",
      max_score: 95,
    },
  },
  {
    id: 3,
    response: "Response 3",
    commentary: "Keep up the good work!",
    id_challenger_team: {
      id: 3,
      name: "Genius Academy",
      slogan: "Where brilliance shines.",
      id_university: {
        id: 3,
        name: "Math Masterclass",
        description: "Unlocking the secrets of numbers.",
      },
      id_discipline: {
        id: 3,
        name: "Mathematics",
        description: "The art of numbers and patterns.",
      },
    },
    id_subject: {
      id: 3,
      title: "The Magic of Numbers",
      description:
        "Explore the fascinating world of mathematics with this enchanting course. From ancient civilizations to modern-day marvels, you'll discover the beauty and power of numbers.",
      max_score: 98,
    },
  },
];
