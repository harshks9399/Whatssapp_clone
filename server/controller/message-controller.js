
import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";
import message from "../model/Message.js";




export const newMessage = async (request, response) => {
    const { conversationID, text } = request.body;
    try {
      const newMessage = new Message(request.body);
      await newMessage.save();
  
      await Conversation.findOneAndUpdate(
        { _id: conversationID },
        { $set: { message: text } }
      );

      console.log("message is:",message);
      console.log("convID:", conversationID);
      console.log("message updated is:", Conversation.message);

  
      response.status(200).json("Message has been sent successfully");
    } catch (error) {
      response.status(500).json('Error in New Message Controller', error.message);
    }
  }
  

export const getMessage = async (request, response) => {
    try {
        const messages = await Message.find({coversationID: request.params.id });
        console.log('getMessage running successfully');
        return response.status(200).json(messages);
    }
    catch (error) {
        response.status(500).json('Error in Get Message Controller', error.message);
    }
}
