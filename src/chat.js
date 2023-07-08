import React from 'react'

function Chat( {socket,username,room,setmess}) {
    const [message,setmessage]=React.useState("");
    const inputRef = React.useRef(null);

    const sendmessage=async()=>
    {
      if(message!=="")
      {
        const messageData=
        {
          room:room,
          writer:username,
          message:message,

        };
        const arr=[[username,message]];
        setmess(prev=>prev.concat(arr));
        await socket.emit("send_message",messageData);
        inputRef.current.value = '';
      }
     
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        sendmessage();
      }
    };
    React.useEffect(() => {
        socket.on("receive_message", (data) => {

          const arr2=[[data.writer,data.message]];
          setmess(prev=>prev.concat(arr2));
        });
    
        return () => {
         socket.removeListener('receive_message') 
        };
      }, [socket]);

     
  return (
    <div className='chat'>
<div style={{display:'flex',justifyContent:'flex-end'}}>
<input 
type='text'
  
style={{width:'60%',backgroundColor:'black',background:'none',borderRadius:'0px 0px 0px 20px',border:'2px solid #17a2b8',color:'white'}}
onKeyDown={handleKeyDown}
ref={inputRef} 
 placeholder='send message'
onChange={(e)=>{
  setmessage(e.target.value)
}} />
<button
style={{width:'5%',float:'right',backgroundColor:'#00000050',border:'2px 2px 0px 0px ',borderColor:'#17a2b8',color:'white'}}
 onClick={sendmessage}>&#9658;</button>
</div>
    </div>
  )
}

export default Chat