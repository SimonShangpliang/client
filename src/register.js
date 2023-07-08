import React from "react";
import './App.css';
import Button from 'react-bootstrap/Button';

export default function Register({setusername,setroom,setsignal,joinRoom,setpassword,setchange,registerNow,isButtonDisabled}) {
  

  

  return (
    <div className='App' > 
    <div className="entry-input" style={{backgroundColor:'#FFFFFF80'}}>
    <input
    style={{margin:'10px'}}
    type='text'
    placeholder='username'
    onChange={(e)=>{setusername(e.target.value)}}
    />
<input
   style={{margin:'10px'}}
    type='password'
    placeholder='password'
    onChange={(e)=>{
      setpassword(e.target.value)
    }}
    />
    
     <Button  variant="dark" style={{borderRadius:'20px',margin:'10px'}}onClick={registerNow} disabled={isButtonDisabled}
      
       >Register</Button>

     <Button  variant="dark" style={{borderRadius:'20px',margin:'10px' ,width:'150px'}}onClick={()=>
     {
      setchange('login');
     }}
      
       >Login Page</Button>
 </div>

 </div>
  );
}
