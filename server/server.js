const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  # default
#   schema {
#     query: Query
#   }

  type Query {
    greetings: String
  }
`;

const resolvers = {
  Query: {
    greetings: () => 'Hello GraphQL World!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 9000 }).then(({ url }) => {
  console.log(`Server running at ${url}`);
});
