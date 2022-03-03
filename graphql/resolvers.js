const people = [
  {
    name: "Steave",
    age: 20,
    gender: "male",
  },
];

const resolvers = {
  Query: {
    people: () => people,
  },
};

export default resolvers;
