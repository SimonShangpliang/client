import React from 'react';
import './index.css'
import Button from 'react-bootstrap/Button';

import pic from './images/image_webchat.jpg'
export default function Frontpage({setShowApp}) {
    const setTrue=()=>
    {
        setShowApp(true);
    }
  return (
    <div>
        
      <header className="header">
        <a href="#Home" className="logo">Let's-Chat</a>

        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about" className="active">About</a>
          <Button variant= "outline-success" style={{marginLeft:'20px',borderRadius:'20px',backgroundColor:'black'}}onClick={setTrue}>Login</Button>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h3 className="heading_front">
            <span>Let's Explore: </span>
            <span className="webchat-name">Let's-Chat</span>
          </h3>
          <h1 className="multi-text-head">
            <span className="multi-text" id="multi-text">Group-Chat</span>
          </h1>
          <p style={{color:'whitesmoke'}}>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
          <div className="enter-chat">
            <Button variant='outline-info' style={{width:'300px'}}>
              Ready to start your Journey?
          </Button>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h1 className="hangout-title">About</h1>
        <div className="hangout-img-text">
          <img src={pic} alt="" style={{ height: '400px',borderRadius:'150px' }} />
          <p className="hangout-text">A great place to make friends online around the world and you are free to make new friends. Just Login freely and meet unknown and share your feeling. </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-info">
          <p>&copy; 2023 | All Rights Are Reserved</p>
        </div>
        <div className="footertotop">
          <a href="#home"><i className="bx bx-up-arrow-alt"></i></a>
        </div>
      </footer>
    </div>
  );
}
