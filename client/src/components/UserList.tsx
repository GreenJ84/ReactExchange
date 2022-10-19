import React from 'react'
import { GET_ALL_USERS } from "../graphQL/queries";
import { useQuery } from "@apollo/client"
import DeleteButton from './DeleteButton';

interface User{
    id: number
    firstName: string
    lastName: string
    username: string
    email: string
}


const tableStyle = {
    width: '80%',
    margin: '5% 10% 5% 10%',
    border: '2px solid black',
    boxShadow: '2px 4px black'
}
const cellStyle = {
    borderBottom: '1px solid black'
}
const linkStyle ={
    color: 'blue'
}

interface UserInterface{
    callback: Function
}

function UserList(props: UserInterface) {
    const callback = props.callback

    const { data } = useQuery(GET_ALL_USERS)
    
    
    return (<>
    { data && <>
    <h1 style={{backgroundColor: 'lightblue', width: '40%', margin: '5% 30% 0', textAlign: 'center', fontSize: '5vw', borderRadius: '10px', boxShadow: '3px 2px blue'}}> Create your own User!</h1>

    <table style={ tableStyle }>
        <thead>
            <tr>
                <th style={ cellStyle }>First Name</th>
                <th style={ cellStyle }>Last Name</th>
                <th style={ cellStyle }>Username</th>
                <th style={ cellStyle }>Email</th>
                <th style={ cellStyle }>Actions</th>
            </tr>
        </thead>
        <tbody>
            {data.getAllUsers.map((user: User): any => {
            return <tr key={user.username}>
                <td>{ user.firstName }</td>
                <td>{ user.lastName }</td>
                <td><div style={ linkStyle } onClick={() => callback()}>{ user.username }</div></td>
                <td>{ user.email }</td>
                <td><DeleteButton userId={ user.id }/></td>
            </tr>
            
            })}
        </tbody>
    </table> </>}
    </>)}

export default UserList;