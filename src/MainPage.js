import React from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import logo from './images/logo192.png'; 
import logo2 from './images/pngwing.com (1).png'
export default function MainPage({setmess, mess, username, peep ,restoreChats,joinRoom2,friendList,setFriendList,leaveUserName}) {
  const getCurrentTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours}:${minutes}`;
  };
  const [inputValue, setInputValue] = React.useState('');
  const [roomValue, setRoomValue] = React.useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setRoomValue(e.target.value);
  };
  const changeRoom=()=>
  {
    if (roomValue.trim() !== '') {
      setmess([]);

      leaveUserName();
      joinRoom2(roomValue);
    setRoomValue('');
    }
  }
  const addFriend = () => {
    if (inputValue.trim() !== '') {
      setFriendList(prevSet => new Set(prevSet).add(inputValue.trim()));
      setInputValue('');
    }
  };

  return (
    <div className="mpage">

      <div className="heading" style={{display:'flex',justifyContent:'space-between',height:'50px'}}>
        <Button variant="outline-success" style={{ backgroundColor: 'black',marginBottom:'2px' }}>ONLINE</Button>
      <div style={{height:'30px',marginBottom:'10px'}}>  <input
   style={{height:'50px',marginRight:'0px',backgroundColor:'black',background:'none',borderRadius:'10px 10px 10px 10px',color:'white',border:'2px solid #17a2b8',backgroundColor:'black'}}
    type='text'
    placeholder='Add Friend'
    value={inputValue}

    onChange={handleInputChange}
    /> <Button variant="outline-info" onClick={addFriend} style={{height:'50px',marginLeft:'0px',backgroundColor:'black'}}>Add</Button></div>

<div style={{height:'34px',marginBottom:'10px'}}>  <input
   style={{height:'50px',marginRight:'0px',backgroundColor:'black',background:'none',borderRadius:'10px 10px 10px 10px',color:'white',border:'2px solid #17a2b8'}}
    type='text'
    placeholder='JOIN ROOM'
    value={roomValue}

    onChange={handleInputChange2}
    /> <Button variant="outline-info" onClick={changeRoom} style={{height:'50px',marginLeft:'0px',marginBottom:'2px',backgroundColor:'black'}}>JOIN</Button></div>
        <Button variant="outline-danger" onClick={restoreChats} style={{justifyContent:'flex-end',width:'150px',background:'black'}}>ChatHistory</Button>

      </div>
      <div className="chat-container">
        <div style={{display:'flex',flexDirection:'column',width:'35%',marginTop:'10px'}} >
        <div className="left-container " style={{width:'100%',backgroundColor:'black'}}>
        {Array.from(peep).map((message, index) => (
  message !== username && (
    <>
    <Button
      variant="outline-info"
      style={{ padding: '5px', backgroundColor: 'black', width: '400px', borderRadius: '0px 25px 25px 0px' }}
      className="text-wrap"
      onClick={()=>
      {
var newRoom;
setmess([]);
        if(username[0]>=message[0]){ newRoom=username+message;}
        else{newRoom=message+username;}
        joinRoom2(newRoom);


      }}
      key={index}
    >
      <div className="d-flex align-items-center">
        <img src={logo} alt="#" className="photo" />
        <h4>{message}</h4>
        
      </div>
    </Button>
         <button onClick={()=>{ setFriendList(prevSet => new Set(prevSet).add(message));}} style={{background:'transparent',border:'none',height:'40px',padding:'0px'}}>   <img src={logo2} alt="add" style={{height:'45px',width:'45px',borderRadius:'22.5px',border:'2px solid black'}}/></button>
            </>

  )
))}
        </div>
        <div>
<Button variant="outline-warning" style={{height:'30px',backgroundColor: 'black',padding:'0px 0px 0px 0px'}}>
  FRIENDS
</Button>
<div className="left-container" style={{width:'100%',height:'270px',backgroundColor:'black',padding:'5px'}}>
{Array.from(friendList).map((message, index) => (
  message !== username && (
    <Button
      variant="outline-info"
      style={{ padding: '5px', backgroundColor: 'black', width: '400px', borderRadius: '0px 25px 25px 0px' }}
      className="text-wrap"
      onClick={()=>
      {
        var newRoom;
        setmess([]);

        if(username[0]>=message[0]){ newRoom=username+message;}
        else{newRoom=message+username;}
        joinRoom2(newRoom);


      }}
      key={index}
    >
      <div className="d-flex align-items-center">
        <img src={logo} alt="#" className="photo" />
        <h4>{message}</h4>
      </div>
    </Button>
  )
))}
</div>

        </div>

        </div>
        <div className="scrollable-chat">
          <div className="right-column">
            {mess.map((message, index) => {
              if (message[0] !== "") {
                if (message[0] === username) {
                  return (
                    <div key={index} className="message-right">
                      <Alert variant="danger">
                        <p className="message-sender">You</p>
                        <div className="message-content">{message[1]}</div>
                        <p className="message-time">{getCurrentTime()}</p>
                      </Alert>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="message-left">
                      <Alert variant="success">
                        <p className="message-sender">{message[0]}</p>
                        <div className="message-content">{message[1]}</div>
                        <p className="message-time">{getCurrentTime()}</p>
                      </Alert>
                    </div>
                  );
                }
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
