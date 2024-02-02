// src/Chat.js
import React, { useState, useEffect } from 'react';
import feathersClient from './feathers';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const messagesService = feathersClient.service('messages');

    const fetchMessages = async () => {
      const messageList = await messagesService.find();
      setMessages(messageList);
    };

    fetchMessages();

    messagesService.on('created', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      messagesService.removeAllListeners();
    };
  }, []);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() !== '') {
      await feathersClient.service('messages').create({ text: inputText });
      setInputText('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </div>
      <div>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

