import { GraphQLObjectType, GraphQLString } from "graphql";
import { UserType } from "../typeDefs/UserType";

interface argsI{
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        password: string;
}

export const CREATE_USER = {
    type: UserType,
    args:{
        firstName: { type: GraphQLString},
        lastName: { type: GraphQLString},
        username: { type: GraphQLString},
        email: { type: GraphQLString},
        password: { type: GraphQLString}
    },
    resolve(parent: any, args: argsI){
        const { firstName, lastName, username, email, password } = args;
        return args;
    }
}