import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <ChatStream />
      <Footer />
    </div>
  );
}

export default App;
