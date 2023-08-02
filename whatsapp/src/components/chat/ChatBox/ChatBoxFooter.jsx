import { Box,InputBase,styled } from "@mui/material";
import { useEffect } from "react";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicIcon from '@mui/icons-material/Mic';
import { uploadFile } from "../../../service/api";
// import { useState } from "react";

const Wrapper = styled(Box)`
    display:flex;
    height: 55px;
    background: #ededed;
    width: 100%;
    align-items:center;
    padding: 0 15px;
    & > * {
        margin:5px;
        color: #919191;
    }
`;


const Search = styled(Box)`
    background-color: #ffffff;
    border-radius: 16px;
    width: calc(94% - 100px);
`;


const InputField = styled(InputBase)`
    width:100%;
    padding:20px;
    height:20px;
    padding-left: 25px;
    font-size: 14px;
`
const ClipIcon = styled(AttachFileOutlinedIcon)`
    transform: rotate(40deg);

`


const Footer = ({sendText,setValue, value, file, setFile    }) => {


    useEffect(() => {
        console.log('File value:', file);
        const getImage = async () => {
            if(file) {
                const data = new FormData();
                data.append("name" , file.name);
                data.append("file" ,file);
                
                console.log('data_file->',data);
                await uploadFile(data);
            }
        }
        getImage();
    }, [file])

    const onFileChange = (e) => {
        console.log('Selected file:', e.target.files[0]);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
      };
        

    return (
        <Wrapper>
            <EmojiEmotionsOutlinedIcon/>
            <label htmlFor="FileInput">
                <ClipIcon/>
            </label>
            <input 
                type="file" 
                id ="FileInput"
                style = {{display: 'none'}}
                onChange={(e)=> onFileChange(e)}
            />
            <Search>
                <InputField  
                    placeholder="Type a message"
                    onChange={(e)=>setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={value}
                />
            </Search>
            <MicIcon/>
        </Wrapper>
    )
};

export default Footer;