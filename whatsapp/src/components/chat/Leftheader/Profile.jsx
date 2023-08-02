import React from 'react'
import { useContext } from 'react'
import { Box ,Typography,styled} from '@mui/material'
import { AccountContext } from '../../../context/AccountProvider'

const ImageBox = styled(Box)`
    display: flex;
    justify-content: center;

`
const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0'
})
const BoxName = styled(Box)`
    background: #ffffff;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
    & :first-child {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    }
    & :last-child {
        margin: 14px 0;
        color: #4a4a4a;
    }

`
const DescriptionBox = styled(Box)`
    padding:15px 20px 28px 30px;
    & > p {
        font-size: 13px;
        color: #8696A0;
    }
`

export default function Profile() {

    const {account} = useContext(AccountContext);
    return (
        <>
            <ImageBox>
                <Image src={account.picture} alt='dp' />
            </ImageBox>

            <BoxName>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </BoxName>


            <DescriptionBox>
                <Typography>This is not your username or pin. This name will be visible to your whatsapp contacts  </Typography>
            </DescriptionBox>
            
            <BoxName>
                <Typography>About</Typography>
                <Typography>STATUS\n</Typography>
            </BoxName>

        </>
    )
}
