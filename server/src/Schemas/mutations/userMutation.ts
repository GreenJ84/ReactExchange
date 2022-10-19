import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
import { Users } from "../../Entities/User";
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
        Users.insert(args)
        return args;
    }
};

export const UPDATE_USER_PASSWORD = {
    type: UserType,
    args:{
        username: { type: GraphQLID },
        oldPassword: { type: GraphQLString },
        newPassword: { type: GraphQLString }
    },
    async resolve(parent: any, args: any){
        const { username, oldPassword, newPassword } = args;
        let thisUser = await Users.findOne({where:{ username: username }});
        if (!thisUser){
            throw new Error("No User found with username provided");
        }
        const userPassword = thisUser?.password;
        if (oldPassword === userPassword){
            await Users.update({username: username}, {password: newPassword });
        } else{
            throw new Error("Password does not match!")
        }
        thisUser = await Users.findOne({where:{ username: username }});
        return thisUser;
    }
}

export const DELETE_USER = {
    type: UserType,
    args:{
        id: { type: GraphQLID }
    },
    async resolve(parent: any, args: any){
        const id = args.id;
        await Users.delete(id);
        return { successfull: true, message: `Deleted id: ${args.id}`};
    }
};