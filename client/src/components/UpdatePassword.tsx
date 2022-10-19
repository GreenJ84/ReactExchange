import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { UPDATE_USER_PASSWORD } from '../graphQL/mutations';


const formStyle ={
    width: '40%',
    margin: '0 25%',
    backgroundColor: 'lightgrey',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    padding: '5%',
    borderRadius: '30px',
    boxShadow: '4px 3px black'
}
const UpdatePassword = () => {
    const [ username, setUsername ] = useState("");
    const [ oldPassword, setOldPassword ] = useState("");
    const [ newPassword, setNewPassword ] = useState("");

    const [ updatePassword, { error, data }] = useMutation(UPDATE_USER_PASSWORD)

    const submit = () => {
        let blank: string = "";
        updatePassword({
            variables: {
                username: username,
                oldPassword: oldPassword,
                newPassword: newPassword
            }
        });
        setUsername(blank);
        setOldPassword(blank);
        setNewPassword(blank);
        window.location.reload()
        }

    return (
        <div style={ formStyle }>
        <p>
        <input type="text" placeholder="Username" value={ username } onChange={(e) => setUsername(e.target.value)} />
        </p>

        <p>
        <input type="text" placeholder="Old Password" value={ oldPassword } onChange={(e) => setOldPassword(e.target.value)} />
        </p>

        <p>
        <input type="text" placeholder="New Password" value={ newPassword } onChange={(e) => setNewPassword(e.target.value)} />
        </p>

        <button onClick={() => submit()}>Create User</button>

    </div>
    )
}

export default UpdatePassword