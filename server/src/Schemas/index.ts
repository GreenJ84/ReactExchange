import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./queries/userQuery";
import { CREATE_USER } from "./mutations/userMutation";


export const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getAllUsers: GET_ALL_USERS
    }
})

export const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: { 
        createUser: CREATE_USER  }
})


export const ReactExchangeSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})