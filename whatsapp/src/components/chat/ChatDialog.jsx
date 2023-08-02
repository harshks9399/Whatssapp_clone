import { Dialog  , Box , styled} from '@mui/material';
import Menu from './Menu';
import EmptyChat from './EmptyChat';
import React from 'react';
import ChatBox from './ChatBox';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';



const dialogstyle = {
  height: '95%',
  width : '100%' ,
  margin : '20px' ,
  maxWidth: '100%' ,
  maxHeight: '100%',
  borderRadius : 0,
  boxShadow : 'none' ,
  overflow : 'hidden'
}
const Component = styled(Box)`
  display : flex;
`

const LeftComp = styled(Box)`
  min-width: 450px;
`
const RighttComp = styled(Box)`
  width: 73%;
  min-width: 200px;
  heigth: 100%;
  border-left: 1px solid rgba(0,0,0,0.14);
`
export default function ChatDialog() {

  const {person} = useContext(AccountContext);

  return (
    <Dialog
      open={true} 
      PaperProps={{sx:dialogstyle}}
      hideBackdrop = {true}
      maxWidth={'md'}
    >
      <Component> {/*Parent Box */}
        <LeftComp>
          <Menu/>
        </LeftComp>


        <RighttComp>
          {/* <EmptyChat/> */}
          {/* <ChatBox/> */}
          { Object.keys(person).length ? <ChatBox/> : <EmptyChat/> }
        </RighttComp>
      </Component>

    </Dialog>
  )
}
