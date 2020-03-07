import React from "react";
import "./ChatMessage.css";
import SentMsg from "./sent.js";
import ReceivedMsg from "./received.js";

function ChatMessage(props) {
  if (props.messageType === "sent") {
    return (
      <div className="chat-message-sent">
        <SentMsg message={props.message} />
        <div className="img-sent">
          
          <img src={"/assets/tip-sent.svg"} ></img>
        </div>
        <div className="container">
          <div className="user">{props.user}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="chat-message-received">
        <div className="img-received">
          <img src={props.avatar} alt="userAvatar"></img>
          <img src={"/assets/tip-received.svg"} ></img>
        </div>
        <ReceivedMsg message={props.message} />
        <div className="container">
          <div className="user">{props.user}</div>
        </div>
      </div>
    );
  }
}

export default ChatMessage;
