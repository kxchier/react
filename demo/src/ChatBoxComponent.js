import React, { useState } from 'react';
import { ChatBox } from 'react-chatbox-component';
import 'react-chatbox-component/dist/style.css';

const ChatBoxComponent = () => {
  const botAvatar = "https://www.w3schools.com/howto/img_avatar.png";
  const userAvatar = "https://www.w3schools.com/howto/img_avatar2.png";

  const [messages, setMessages] = useState([
    {
      "text": "Hello, how can I help",
      "id": "1",
      "sender": {
        "name": "ChatBot",
        "uid": "bot",
        "avatar": botAvatar,
      }
    }
  ]);

  const user = { 
    "uid": "user1",
    "name": "User",
    "avatar": userAvatar 
  };

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, {
      text: newMessage,
      id: String(messages.length + 1),
      sender: user,
    }]);
  };

  return (
    <div className="chatbox">
      <ChatBox
        messages={messages}
        user={user}
        onSubmit={handleSendMessage}
      />
    </div>
  );
};

export default ChatBoxComponent;
