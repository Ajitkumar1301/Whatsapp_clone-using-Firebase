import { SearchOutlined } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='header'>
            <Avatar src='https://i.pinimg.com/564x/f7/75/7d/f7757d5977c6ade5ba352ec583fe8e40.jpg'/>
            <div className='side_header_right'>
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>    
                    <MoreVertIcon/>
                    </IconButton>
            </div>
        </div>
      <div className='sidebar_search'>
        <div className='sidebar_Search_container'>
            <SearchOutlined />
            <input type='text' placeholder='search the chat'/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
