import { Box } from "@mui/material";
import ChatBoxHeader from "./ChatBox/ChatBoxHeader";
import Messages from "./ChatBox/ChatBoxMsg";
import { useContext, useState,useEffect } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { getConversation } from "../../service/api";


const ChatBox = () => {
    const { person,account } = useContext(AccountContext);


    const [conversation, setConversation] = useState({});
    
    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderID: account.sub, receiverID: person.sub });
            // console.log('data->',data);
            setConversation(data);
        }
        getConversationDetails();
    }, [person.sub]);


    return (
        <Box style={{height: '75%'}}>
            <ChatBoxHeader person={person}/>
            <Messages person={person} conversation={conversation}/>
        </Box>
    )
} 

export default ChatBox;