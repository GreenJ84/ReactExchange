import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { UPDATE_USER_DETAILS } from '../graphQL/mutations';


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
const UpdateUserDetails = () => {
	const [ firstName, setFirstName ] = useState("");
	const [lastName, setLastName ] = useState("");
	const [ username, setUsername ] = useState("");
	const [ email, setEmail ] = useState("");

    const [ updateUserDetails, { error }] = useMutation(UPDATE_USER_DETAILS)
    if (error){ console.log(error) }

    const submit = () => {
        let blank: string = "";
        updateUserDetails({
            variables: {
		firstName: firstName,
		lastName: lastName,
		username: username,
		email: email
		}
        });
        setFirstName(blank);
    	setLastName(blank);
    	setUsername(blank);
    	setEmail(blank);
    	window.location.reload()
    }

    return (
        <div style={ formStyle }>
        <p>
        <input type="text" placeholder="First Name" value={ firstName } onChange={(e) => setFirstName(e.target.value)} />
        </p>

        <p>
        <input type="text" placeholder="Last Name" value={ lastName } onChange={(e) => setLastName(e.target.value)} />
        </p>

        <p>
        <input type="text" placeholder="username" value={ username } onChange={(e) => setUsername(e.target.value)} />
        </p>

        <p>
        <input type="text" placeholder="email" value={ email } onChange={(e) => setEmail(e.target.value)} />
        </p>

        <button onClick={() => submit()}>Update User</button>

    </div>)
    )
}

export default UpdateUserDetails
