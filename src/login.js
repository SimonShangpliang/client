import React from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
export default function Login({setusername,setroom,setsignal,joinRoom,setpassword,setchange,tryLogin,isButtonDisabled2,isButtonDisabled3})
 {

   

return (

    <div className='App' > 
    <div className="entry-input" style={{backgroundColor:'#FFFFFF80'}} >
   {isButtonDisabled3&&(<> <input
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
    /> </>)}
  {!isButtonDisabled3&&  <input
   style={{margin:'10px'}}
    type='text'
    placeholder='ROOM'
    onChange={(e)=>{
      setroom(e.target.value)
    }}
    />}
  {isButtonDisabled3&&   <Button  variant="dark" style={{borderRadius:'20px',margin:'10px'}} onClick={tryLogin} disabled={isButtonDisabled2}
      
       >JOIN</Button>}
{!isButtonDisabled3&&(<>
 <Button  variant="dark" style={{borderRadius:'20px',margin:'10px'}} onClick={joinRoom} disabled={isButtonDisabled3}
      
      >ROOM</Button>
      <Button  variant="dark" style={{borderRadius:'20px',margin:'10px'}} onClick={()=>{setroom('default');joinRoom();}} disabled={isButtonDisabled3}
      
      >JUST ENTER</Button>
</>
      )
      }
    {isButtonDisabled3&& <Button  variant="dark" style={{borderRadius:'20px',margin:'10px'}}onClick={()=>
     {
        setchange('register')
     }}
      
       >Register</Button>}
 </div>

 </div>

   
);
}