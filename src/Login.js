import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'
import { actionType } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
  const [state, dispatch ] = useStateValue();

  const signIn = () =>{
    auth.signInWithPopup(provider).then((result)=>{
      dispatch({
        type: actionType.SET_USER,
        user: result.user
      })
      console.log(result)
    }).catch(
      (error)=>{
        console.log(error)
      }
    )

  }
  return (
    <div className='login'>
       <div className="login__logos">
        <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="" />
        <img className='login__textLogo' src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg" alt="" />
       </div>
       <Button type='submit' onClick={signIn}>
        Log In
       </Button>
    </div>
  )
}

export default Login