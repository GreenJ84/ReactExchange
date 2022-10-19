import { useMutation } from '@apollo/client'
import React from 'react'
import { DELETE_USER } from '../graphQL/mutations';

interface deleteInterface{
    userId: number
}

const DeleteButton = (props: deleteInterface ) => {
    const { userId } = props;

    const [ deleteUser, { error }] = useMutation(DELETE_USER);
    if (error){ console.log(error.message) }

    return (
    <button onClick={() => { deleteUser({ variables: {id: userId }}); window.location.reload()}}>Delete</button>
    )
}

export default DeleteButton