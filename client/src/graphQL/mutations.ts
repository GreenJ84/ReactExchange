import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser(
        $firstName: String!
        $lastName: String!
        $username: String!
        $email: String!
        $password: String!){
            createUser(
                firstName: $firstName
                lastName: $lastName
                username: $username
                email: $email
                password: $password){
                    id
                    firstName
                    lastName
                    username
                    email
                    password
                }
    }
`

export const UPDATE_USER_PASSWORD = gql`
    mutation updatePassword(
        $username: String!
        $oldPassword: String!
        $newPassword: String!
        ){
            updatePassword(
                username: $username
                oldPassword: $oldPassword
                newPassword: $newPassword
                ){
                    firstName
                    lastName
                }
    }
`

export const DELETE_USER = gql`
    mutation deleteUser($id: ID!){
            deleteUser(id: $id){
                    message
                }
    }
`