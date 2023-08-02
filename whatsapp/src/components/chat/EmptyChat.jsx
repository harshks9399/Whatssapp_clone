import React from 'react'
import { Box, Typography, styled  , Divider} from '@mui/material'
import { emptyChatImage } from '../../constants/Data'

const Component = styled(Box)`
  background: #f8f9f8;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`
const Contanier = styled(Box)`
  padding: 0 200px;


`

const Image = styled('img')({
  width:400,
  marginTop:100
})

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
`
const Subtitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`
const StyleDivider = styled(Divider)`
  margin: 40px 0;
  opacity: 0.6;
`


export default function EmptyChat() {
  return (
    <Component>
      <Contanier>
        <Image src={emptyChatImage} alt='IMG' />
        <Title>WhatsApp Web</Title>
        <Subtitle>Now send and receive messages without keeping your phone online.</Subtitle>
        <Subtitle>Use WhatsApp on up to 4 linked devices and 1 linked phone at the same time.</Subtitle>
        <StyleDivider/>
      </Contanier>
    </Component>
  )
}
