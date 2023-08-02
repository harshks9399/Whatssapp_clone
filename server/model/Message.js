

import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    coversationID: {
        type: String
    },
    receiverID: {
        type: String
    },
    senderID: {
        type: String
    },
    text: {
        type: String
    },
    type: {
        type: String
    }
},
   { timestamps: true}
);

const message = mongoose.model('Message', MessageSchema);
export default message;