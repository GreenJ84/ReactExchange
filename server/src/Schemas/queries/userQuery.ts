import { GraphQLList, GraphQLObjectType } from "graphql";
import { UserType } from "../typeDefs/UserType";
import { Users } from "../../Entities/User";

export const GET_ALL_USERS = {
    type: new GraphQLList( UserType ),
    resolve(){
        return Users.find();
    }
}