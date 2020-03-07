import React from "react";
import ChatMessage from "./ChatMessage.js";
import "./ChatStream.css";

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

function ChatStream(props) {
  
  let convos = props.msg.messages;

  return (
    <section className="chat-stream">
      {convos.map(message => {

        let messageType;
        if (message.user === props.current) {
          messageType = "sent";
        } else {
          messageType = "received";
        }
        return (
          <ChatMessage
            message={message.body}
            user={message.user.username}
            avatar={message.user.avatar}
            messageType={messageType}
          />
          
        );
        
      })}
    </section>
  
  );
}


export default ChatStream;
