import React from 'react'
import { Box, InputBase, styled } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Component = styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #f2f2f2;
    display:flex;
    align-items:center;
`
const Wrapper = styled(Box)`
    width: 100%;
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    border-radius:10px;
`
const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 6px 10px;
    color: #919191;

`
const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    height: 15px;
    padding-left: 65px;
    font-size: 14px;
`

export default function Search({setText}) {
    return (
        <Component>
            <Wrapper>
                <Icon>
                    <SearchOutlinedIcon
                        fontSize='small'
                    />
                </Icon>
                <InputField
                    placeholder='Search or start a new chat'
                    onChange={(e) => setText(e.target.value) }
                />

            </Wrapper>
        </Component>
    )
}
