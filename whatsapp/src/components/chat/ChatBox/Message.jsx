import styled from "@emotion/styled";
import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { formatDate } from "../../../utils/commmon-utils";
import { AccountContext } from "../../../context/AccountProvider";

const Sent_msg = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding:5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Recived_msg = styled(Box)`
  background: #FFFFFF;
  max-width: 60%;
  margin-right: auto;
  padding:5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;
const Text = styled(Typography)`
  fint-size: 14px;
  padding: 0 25px 0 5px;
`
const Time = styled(Typography)`
  font-size:10px;
  color: #919191;
  margin-top: 6px;
  word-break:keep-all;
  margin-top:auto;
`

function Message({ message }) {

  const {account} = useContext(AccountContext);

  // if(1)
  // {
  //   console.log('senderID->', message.senderID);
  //   console.log('account-> ', account);
  // }

  return (
    <>
      {
        account.sub === message.senderID ? 
        <Sent_msg>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
        </Sent_msg> 
        
        :

        <Recived_msg>
        <Text>{message.text}</Text>
        <Time>{formatDate(message.createdAt)}</Time>
        </Recived_msg>


      }

      
    </>
  )
}

export default Message