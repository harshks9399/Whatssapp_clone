import React from 'react'
import { Box, Drawer, Typography,styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';
const drawerStyle = {
    left: 20,
    top:17,
    height: '95%',
    width : '30%',
    boxShadow:'null'
}
const Header = styled(Box)`
    display:flex;
    background: #008069;
    height: 107px;
    color: #ffffff;
    & > svg, & > p {
        margin-top: auto;
        padding: 15px;
        font-weight: 650;
    }
`;

const Component = styled(Box)`
    background: #ededed;
    height: 85%;

`
const Text = styled(Typography)`
    font-size: 18px;
`

const ProfileDrawer = ({ open, setOpen }) => {

    const handleClose = ()=>{
        setOpen(false);
    }
    return (
        <>
            <Drawer
                open={open}
                onClose={handleClose}
                PaperProps={{sx:drawerStyle}}
                style={{zIndex:1500}}
            >
                <Header>
                    <ArrowBackIcon onClick={handleClose} />
                    <Text>Profile</Text>
                </Header>


                <Component>
                    <Profile/>
                </Component>

            </Drawer>
        </>
    )
}

export default ProfileDrawer;