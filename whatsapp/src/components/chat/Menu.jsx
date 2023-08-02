import React from 'react';
import { Box } from '@mui/material';
import { useState } from 'react';
import Header from './MenuHeader';
import Search from './SearchChat';
import Conversation from './Conversation';

export default function Menu() {

  const [text , setText] = useState('');

  return (
    <Box>
        <Header/>
        <Search setText={setText} />
        <Conversation text={text}/>
    </Box>
  )
}
