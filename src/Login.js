import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css';
function Login() {
    const navigate=useNavigate()
    const [user,setUser]=useState([
        {
            username:"admin1",
            pass:"243394"
        },
        {
            username:"admin2",
            pass:"693450"
        }
    ])
    const [usename,setName]=useState("")
    const [usepass,setPass]=useState("")
    const check=(e)=>{
        var flag=0
        e.preventDefault()
        for(var i=0;i<user.length;i++){
            if(user[i].username===usename && user[i].pass===usepass){
                flag=1
                break
            }
        }
        if(flag===1){
            navigate('/Home')
        }
        else{
            alert('Username and Password doesn\'t match')
        }
    }
  return (
    <div className='login'>
        <h1 className='y'>LOGIN</h1>
        <form  className='user' onSubmit={check}>
            <label className='yu'>USERNAME</label>
            <input className='yuu' type='text' placeholder='Enter the Username' value={usename} onChange={(e)=>setName(e.target.value)}/>
            <label className='yu'>PASSWORD</label>
            <input className='yuu' type='password' placeholder='Enter the Password' value={usepass} onChange={(e)=>setPass(e.target.value)}/>
            <input className='yuuu' type='submit' value="LOGIN"/>
        </form>
    </div>
  )
}

export default Login