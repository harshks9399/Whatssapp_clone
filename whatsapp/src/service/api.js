import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        let response = await axios.post(`${url}/add`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}

export const getUsers = async () => {
    try{
        let response = await axios.get(`${url}/users`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('error while calling getUsers API', error.message);
    }
}


export const setConversation = async (data) => {
    try{
        await axios.post(`${url}/conversation/add` , data);
    } catch (error) {
        console.log('error while calling setConversation API', error.message);
    }
}

export const getConversation = async (data) => {
    try{
        let response = await axios.post(`${url}/conversation/get` , data);
        // console.log("data in API:" ,data); // -> DATA IS THERE i.e. IT IS NOT EMPTY
        console.log('api getConver0>',response.data);  // ->THIS IS NULL (FIXED)
        return response.data;
    } catch (error) {
        console.log('error while calling getConversation API', error.message);
    }
}


export const newMessage = async (data) => {
    try{
        await axios.post(`${url}/message/add`, data);
    } catch(error) {
        console.log('error while calling newMessage api', error.message);
    }
}

export const getMessages = async (id) => {
    try{
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch(error) {
        console.log('error while calling getMessages api', error.message);
    }
}



export const uploadFile = async (data) => {
    console.log('Received data:', data);
    try{
        return await axios.post(`${url}/file/upload` , data);
    }catch(error){
        console.log('data->',data);
        console.log('error in uploadFile api', error.message);
    }
}