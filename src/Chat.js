import React from 'react'
import Grid from '@mui/joy/Grid';
import './chat.css';
import Chatlistheader from './chatlist/Chatlistheader';
import Chatboxheader from './chatbox/Chatboxheader';
import Chatboxfooter from './chatbox/Chatboxfooter';
import Chatbox from './chatbox/Chatbox';
import Chatlist from './chatlist/Chatlist';

const Chat = () => {
  return (
    <div className='layout'>

      <div className='chatlist'>
            <Chatlistheader/>
            <Chatlist/>
      </div>

      <div className='chatbox'>
            <Chatboxheader/>
            <Chatbox/>
            <Chatboxfooter/>
      </div>

    </div>
  )
}

export default Chat
