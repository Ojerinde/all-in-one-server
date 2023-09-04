const { GraphQLObjectType, GraphQLInt, GraphQLList } = require('graphql');
const { UserType } = require('./types');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType), //return a list of UserType
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        console.log(parent, args);
        // This is a function and every logic to return the data we want will be written here.
        // Connecting to the database and doing your find, etc.
        // return {};
      },
    },
    getUserById: {
      type: UserType, //return UserTyoe Object
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        console.log(parent, args);

        // const user = userData.find((user) => +user.id === +args.id);
        // return user;
      },
    },
  },
});

module.exports = RootQuery;
