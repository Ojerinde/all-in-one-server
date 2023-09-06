// const {
//   GraphQLObjectType,
//   //   GraphQLInt,
//   GraphQLString,
//   //   GraphQLList,
// } = require('graphql');
// const { UserType } = require('./types');

// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     CreateUser: {
//       type: UserType,
//       args: {
//         firstName: { type: GraphQLString },
//         lastName: { type: GraphQLString },
//         email: { type: GraphQLString },
//         password: { type: GraphQLString },
//         confirmPassword: { type: GraphQLString },
//       },
//       resolve(parent, args) {
//         console.log(parent, args);
//         // userData.push({ id: userData.length + 1, ...args });
//         return args;
//       },
//     },
//     // UpdateUser: {},
//   },
// });

// module.exports = Mutation;
