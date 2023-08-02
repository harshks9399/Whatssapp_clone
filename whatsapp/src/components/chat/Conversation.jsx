import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { getUsers } from '../../service/api';
import { Box, styled, Divider } from '@mui/material';
import ConversationData from './ConversationData';
import { AccountContext } from '../../context/AccountProvider';

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`
const StyleDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef ;
    opacity: .6
`

const Conversation = ({text}) => {

    const [users, setUsers] = useState([]);

    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(()=> {
            const fetchData = async () => {
                let response = await getUsers();
                let fiteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
                setUsers(fiteredData);
            }
            fetchData();
        },
        [text]
    );

    useEffect(() => {
        socket.current.emit('addUser', account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <React.Fragment key={user.sub}>
                    <ConversationData user={user}  />
                    <StyleDivider/>
                    </React.Fragment>
                ))
            }
        </Component>
    );
};


export default Conversation;