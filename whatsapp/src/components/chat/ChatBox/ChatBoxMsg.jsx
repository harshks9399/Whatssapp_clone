import { Box, styled } from "@mui/material";
import Footer from "./ChatBoxFooter";
import { useContext, useState, useEffect, useRef } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";
import Message from "./Message";


const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    backgound-size: 20%;
`;

const Component = styled(Box)`
    height:80vh;
    overflow-y: scroll;
`
const Container = styled(Box)`
    padding: 1px 80px;
`


const Messages = ({ person, conversation }) => {

	const [value, setValue] = useState('');
	const { account,socket , newMessageFlag, setNewMessageFlag } = useContext(AccountContext);
	const [incomingMessage, setIncomingMessage] = useState(null);
	const [messages, setMessages] = useState([]);
	const [file , setFile] = useState();

	const scrollRef= useRef();

	useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, []);


	useEffect(() => {
		const getMessageDetails = async () => {
			if (conversation && conversation._id) { // Add null check here
				let data = await getMessages(conversation._id);
				/****DEBUG****/
				console.log("setMessage_data:",data); //->text is there but not real-time (IT IS NOT NEEDED REALTIME)

				/****DEBUG****/
				setMessages(data);
			}
		};
		getMessageDetails();
	}, [person._id, conversation._id , newMessageFlag]);


	useEffect(()=> {
		scrollRef.current?.scrollIntoView({transition: 'smooth'})
	} , [messages])  // to start from the latest message


	useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderID) && 
            setMessages((prev) => [...prev, incomingMessage]);
        
    }, [incomingMessage, conversation]);
	




	const sendText = async (e) => {
		const code = e.keyCode || e.which;
		if (code === 13) {
			if (conversation && conversation._id) {
				let message = {
					senderID: account.sub,
					receiverID: person.sub,
					coversationID: conversation._id,
					type: 'text',
					text: value
				};
				
				socket.current.emit('sendMessage', message);
				
				// console.log(message);
				await newMessage(message);
				setValue('');

				setNewMessageFlag(prev => !prev);
			} else {
				console.log('Conversation is null');
			}
		}
	};



	return (
		<Wrapper>
			<Component>
				{
					messages && messages.map(message => (
						<Container ref = {scrollRef}>
							<Message message={message} />
						</Container>
					))
				}
			</Component>
			<Footer
				sendText={sendText}
				setValue={setValue}
				value={value}
				file={file}
				setFile = {setFile}
			/>
		</Wrapper>
	)
}

export default Messages;