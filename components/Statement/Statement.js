import React,{useContext} from 'react'
import {UserContext} from '../../context/UserContext'

export default function Statement() {
  let {usuario} = useContext(UserContext)
  console.log(usuario)

  return (
    <>
    <div>Statemen {usuario}</div>
    {(usuario && <div>id de usuario {usuario}</div>)}
      
    </>
  )
}
