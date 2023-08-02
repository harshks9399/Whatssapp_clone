import { Server } from 'socket.io';

const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000',
    }, 
})


let users = [];

const addUser = (userData, socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}

const getUser = (userId) => {
    return users.find(user=> user.sub === userId);
}

// const removeUser = (socketId) => {
//     users = users.filter(user => user.socketId !== socketId);
// }


io.on('connection',  (socket) => {
    console.log('user connected')


    //*******DEBUG *************//
    

    //*******DEBUG *************//

    //connect
    socket.on("addUser", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
        //console.log("Current users:", users);    // WORKING , users list is working
    })

    //send message
    socket.on('sendMessage', (data) => {
        const user = getUser(data.receiverID);
        if (user) {
            console.log("checking sendMessage");
            io.to(user.socketId).emit('getMessage', data);
        } else {
            console.log("User not found:", data.receiverID);
        }
    });
    

    //disconnect
    // socket.on('disconnect', () => {
    //     console.log('user disconnected');
    //     removeUser(socket.id);
    //     io.emit('getUsers', users);
    // })
})