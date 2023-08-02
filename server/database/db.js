import mongoose from 'mongoose';

const Connection = async (username, password) => {
    // const url = `mongodb+srv://${username}:${password}@clone-whatsapp.caljquj.mongodb.net/?retryWrites=true&w=majority` ;
    const URL = `mongodb+srv://${username}:${password}@clone-whatsapp.caljquj.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error:', error.message);
    }
};

export default Connection;
