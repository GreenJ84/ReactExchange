import React, { useState } from 'react';
import './App.css';
import NewUserForm from './components/NewUserForm';
import UpdatePassword from './components/UpdatePassword';
import UserList from './components/UserList';


function App() {
  const [ updatePass, setUpdatePass] = useState(false)


  return (
      <>
      < UserList callback={() => { setUpdatePass(true)}} />
      { updatePass ? 
      <UpdatePassword /> :
      < NewUserForm />}
      </>
)};

export default App;
