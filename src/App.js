import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Register from './register';
import io from 'socket.io-client';
import Chat from './chat';
import MainPage from './MainPage'
import Login from './login'
import 'bootstrap/dist/css/bootstrap.min.css'
const socket = io.connect("http://localhost:3002");

function App({setShowApp}) {
  const [username,setusername]=React.useState("");
  const [password,setpassword]=React.useState("");
    const [room,setroom]=React.useState("");
    const [mess,setmess]=React.useState([["",""]]);
    const [signal,setsignal]=React.useState("");
    const [peep, setPeep] = React.useState(new Set());
    const [change,setchange]=React.useState("login");
const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);
const [isButtonDisabled2, setIsButtonDisabled2] = React.useState(false);
const [isButtonDisabled3, setIsButtonDisabled3] = React.useState(true);
const [friendList,setFriendList]=React.useState(new Set());



React.useEffect(() => {
  const friendArray = Array.from(friendList);
  const lastFriend = friendArray[friendArray.length - 1];

  socket.emit("sendFriend",{
    friend:lastFriend,
    username:username,
  });

  return () => {
    socket.off("sendFriend");
  };
}, [friendList]);



const leaveUserName =()=>
{
  socket.emit("leave",username);

}

const setFalse=()=>
{
  leaveUserName();
  setShowApp(false);

}

const restoreChats=()=>
{
  socket.emit("trigger",room)
}

React.useEffect(() => {
  socket.on("restore", (data) => {
    if (!data) {
      setmess([]);
    } else {
      setmess(data);
    }
  });

  return () => {
    socket.off("restore");
  };
}, []);








React.useEffect(() => {
  socket.on("receive_username", (data) => {
    const oneDArray = data.map((subArray) => subArray[1]);
    const uniqueArray = [...new Set(oneDArray)]; // Remove duplicates
    setPeep(uniqueArray);
restoreChats();
  });

  return () => {
    socket.off("receive_username");
  };
}, [username]);

const tryLogin=()=>
{  
  setIsButtonDisabled2(true);
  const jpass={
    username:username,
    password:password};
   
  if(username&&password){socket.emit("checkLogin",jpass);}
}

const registerNow=()=>
{
setIsButtonDisabled(true);
  const jpass={
    username:username,
    password:password};
  if(username&&password){socket.emit("receiveRegister",jpass);}
  
}

React.useEffect(() => {
  socket.on('alert', (data)=>
  {
    alert(data);
    setIsButtonDisabled(false);

  });

  return () => {
    socket.off('alert',(data)=>
    {
      alert(data);
      setIsButtonDisabled(false);

    });
  };
}, []);

const getFriend=()=>
{
  socket.emit("updateFriend",username);
  socket.on("getBff",(data)=>
  {
    setFriendList(data);

  })
}



                  const joinRoom=()=>
                  {
                    getFriend();
                  if(username){
                    setIsButtonDisabled2(true);
  
                    setPeep(prevSet => new Set([...prevSet, username]));
                    setsignal("a");
              const jroom={
                username:username,
                room:room};
              if(username&&room){socket.emit("join_room",jroom); 
              } 
                    }  }

                    const joinRoom2=(roomName)=>
                    {
                    if(username){
                      setroom(roomName);

    
                      setPeep(prevSet => new Set([...prevSet, username]));

                      setsignal("a");
                const jroom={
                  username:username,
                  room:roomName};
                if(username&&room){
                  socket.emit("join_room",jroom); 
                } 
                      }  }




                  React.useEffect(() => {
                    socket.on('loginSuccess', (data)=>
                    {
                      if(data==='success')
                      {
                      console.log(room);
                      setIsButtonDisabled2(false);
                      setIsButtonDisabled3(false);
                      
                      }
                      else
                      {
                        setIsButtonDisabled2(false);

                        alert('wrong username or password');
                  
                      }
                    });
                  
                    return () => {
                      socket.off('loginSuccess',(data)=>
                      {
                  
                      });
                    };
                  }, []);
                  



  return (
    <div>
      {!signal &&(
      <>
<div style={{display:'flex',justifyContent: 'space-between',backgroundColor:'black'}}>
    <h1 className='chatHeading'>LET'S CHAT</h1>

    </div>


    
    {
        change==='login'?<Login setusername={setusername} setroom={setroom} setsignal={setsignal} joinRoom={joinRoom} setpassword={setpassword} setchange={setchange} tryLogin={tryLogin} isButtonDisabled2={isButtonDisabled2} isButtonDisabled3={isButtonDisabled3}/>:<Register setusername={setusername} setroom={setroom} setsignal={setsignal} joinRoom={joinRoom} setpassword={setpassword} setchange={setchange} registerNow={registerNow} isButtonDisabled={isButtonDisabled}/>
      }
   </>
   )}
   <div>

{signal&&<div style={{backgroundColor:' #282c3410',display:'flex',justifyContent:'space-between'}}>
<div><h5 style={{color:'#17a2b8',display: 'inline',margin:'2px'}}>  Hello </h5><h2 style={{color:'white',display: 'inline',margin:'2px'}}>{username}</h2></div>

  <Button variant="outline-info" onClick={setFalse} style={{borderRadius:'10px'}}>BACK</Button></div>}
{signal&&<MainPage setmess={setmess} mess={mess} username={username} peep={peep} restoreChats={restoreChats} joinRoom2={joinRoom2} friendList={friendList} setFriendList={setFriendList} leaveUserName={leaveUserName} />}
{signal &&<Chat socket={socket} username={username} room={room} setmess={setmess}  />}

</div>
   </div>
  );
}

export default App;
