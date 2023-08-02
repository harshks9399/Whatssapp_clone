import Conversation from "../model/Conversation.js";

export const newConversation = async (request, response) => {
    try{
        const senderID = request.body.senderID;
        const reciverID = request.body.reciverID;

        const exists = await Conversation.findOne({members: { $all: [reciverID, senderID] }});
        console.log('newConversation working succussfully')
        if(exists){
            return response.status(200).json('Conversation exists');
        }

        const newConversation = new Conversation({
            members: [reciverID, senderID]
            // members: []
        });

        await newConversation.save();
        return response.status(200).json('conversation saved succussfully');
    } catch(error) {
        response.status(500).json('error in conversation-controller', error.message);
    }
}



export const getConversation = async (request, response) => {
    try {
      const senderID = request.body.senderID;
      const receiverID = request.body.receiverID;
      // console.log("senderID:", senderID);  // -> NOT EMPTY
      // console.log("receiverID:", receiverID); // NOT EMPTY
      const conversation = await Conversation.findOne({ members: { $all: [ senderID, receiverID] }});
      // console.log(conversation); // -> THIS WORKS WHEN NEW CHAT IS OPENED, BUT DOESNT WORK WHEN ANY MSG IS SENT

      //**********DEBUG ***********//

      console.log("message:", conversation.message );
      // console.log("request:",request.body);
      // if (conversation) {
      //   console.log("Members:", conversation.members); // -> MEMBERS list is not empty !!!!!!
      //   return response.status(200).json(conversation);
      // } else {
      //   return response.status(200).json("Conversation not found");
      // }

      //**********DEBUG ***********//

      return response.status(200).json(conversation);
  
    } catch (error) {
      return response.status(500).json('error in getConversation', error.message);
    }
  } 
  