import { Box, Typography, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { setConversation, getConversation } from "../../service/api";
import { formatDate } from "../../utils/commmon-utils";


const Component = styled(Box)`
    display: flex;
    height: 45px;
    padding: 13px 0px;
    cursor: pointer;

`

const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%',
    padding: '0 14px',
    objectFit: 'cover'
})

const ConversationData = ({user}) => {

    const {setPerson, account, newMessageFlag } = useContext(AccountContext);

    const [message , setMessage] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
          try {
            console.log("senderID:", account.sub);
            console.log("receiverID:", user.sub);
            const data = await getConversation({
              senderID: account.sub,
              receiverID: user.sub,
            });
            console.log("data_getConvDetails:", data); 
            setMessage({ text: data?.message, timestamp: data?.updatedAt });
            console.log('Message:', message);
          } catch (error) {
            console.log('Error:', error.message);
          }
        };
      
        getConversationDetails();
      }, [newMessageFlag]);
      

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderID: account.sub, reciverID: user.sub});
    }


    return (
        <Component onClick={()=> getUser()}>
            <Box>
                <Image src={user.picture} alt="DP"/>
            </Box>


            <Box>
                <Box>
                    <Typography> {user.name} </Typography>
                    {
                        
                        message?.text && 
                            <Typography>{formatDate(message?.timestamp)}</Typography>
                    }
                </Box>
                <Box>
                    <Typography>
                        {message?.text && message.text.includes('localhost') ? 'media' : message?.text}
                    </Typography>
                </Box>
            </Box>
        </Component>
    )
}

export default ConversationData;