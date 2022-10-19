import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { CREATE_USER } from '../graphQL/mutations';


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

function NewUserForm() {
  const [ firstName, setFirstName ] = useState("");
  const [lastName, setLastName ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const [createUser, { error, data }] = useMutation(CREATE_USER)

  const submit = () => {
    let blank = ""
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password
      }
    });
    setFirstName(blank);
    setLastName(blank);
    setUsername(blank);
    setEmail(blank);
    setPassword(blank);
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

        <p>
        <input type="text" placeholder="password" value={ password } onChange={(e) => setPassword(e.target.value)} />
        </p>

        <button onClick={() => submit()}>Create User</button>

    </div>)
}

export default NewUserForm