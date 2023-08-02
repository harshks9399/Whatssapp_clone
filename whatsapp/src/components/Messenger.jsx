import React from 'react';
import LoginDialogue from './account/LoginDialogue';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import ChatDialog from './chat/ChatDialog';
const LoginHeader = styled(AppBar)`
    height: 180px;
    background-color : #00bfa5;
    box-shadow : none;
`;
const Header = styled(AppBar)`
    height: 100px;
    background-color : #00A884;
    box-shadow : none;
`;
const Component = styled(Box)`
    height :100vh;
    background-color : #dcdcdc;
`;

export default function Messenger() {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {
        account ?
          <>
            <Header>
              <Toolbar>

              </Toolbar>
            </Header>
            <ChatDialog />
          </>
          :
          <>
            <LoginHeader>
              <Toolbar>

              </Toolbar>
            </LoginHeader>
            <LoginDialogue />
          </>
      }
    </Component>
  )
}
