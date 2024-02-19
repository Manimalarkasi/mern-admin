import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Atshome() {
  const navigate = useNavigate()
  const logout =() =>{
    localStorage.removeItem("loggedin")
    navigate('/')
  }
  const username = JSON.parse( localStorage.getItem("user"));
  return (
    <div>
      <h2>home Page</h2>
      <h4>welcome - {username.name}</h4>
      <Button type='submit' variant='contained' color='info' onClick={logout}>Log Out</Button>
    </div>
  )
}

export default Atshome
