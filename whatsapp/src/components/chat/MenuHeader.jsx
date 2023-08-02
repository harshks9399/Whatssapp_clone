import React from 'react'
import { useContext,useState } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { Box ,styled} from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import ProfileDrawer from './Leftheader/ProfileDrawer';
import HeaderMenu from './Leftheader/HeaderMenu';

const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px ; 
    display:flex;
    align-items:center;
`
const Wrapper = styled(Box) `
    display:flex;
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    &:nth-of-type(2) {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
      }
`;


const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%',
    cursor: 'pointer'
}) 

export default function Header() {
    const [openDrawer , setOpenDrawer] = useState(false);
    const {account} = useContext(AccountContext);
    const toggleDrawer = ()=>{
        setOpenDrawer(true);
    }
    return (
    <>
        <Component>
            <Image src={account.picture} alt='dp' onClick={()=>toggleDrawer()} />
            <Wrapper>
                <DataUsageIcon/>
                <ChatIcon /> 
                <HeaderMenu/>
            </Wrapper>
        </Component>  
        <ProfileDrawer open={openDrawer} setOpen= {setOpenDrawer} />
    </>
    )
}
