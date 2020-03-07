import React from "react";

import Header from "./Header";
import ChatStream from "./ChatStream";
import Footer from "./Footer";

import "./App.css";

function App(props) {
  //console.log(props.conversation);
  return (
    <div className="wrapper">
      <Header parts={props} />
      <ChatStream msg={props.conversation} current={props.currentUser} />
      <Footer />
    </div>
  );
}

export default App;
