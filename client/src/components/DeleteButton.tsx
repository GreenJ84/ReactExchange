import { useMutation } from '@apollo/client'
import React from 'react'
import { DELETE_USER } from '../graphQL/mutations';

interface deleteInterface{
    userId: number
}

const DeleteButton = (props: deleteInterface ) => {
    const userId = props.userId

    const [ deleteUser, { error }] = useMutation(DELETE_USER);

    return (
    <button onClick={() => {console.log(userId); deleteUser({ variables: {id: userId }}); }}>Delete</button>
    )
}

export default DeleteButton