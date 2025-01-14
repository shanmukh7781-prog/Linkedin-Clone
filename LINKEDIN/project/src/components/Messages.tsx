import React, { useState } from 'react';

const messages = [
  {
    id: 1,
    sender: {
      name: 'Jeff Bezos',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Jeff_Bezos%27_iconic_laugh_crop.jpg/800px-Jeff_Bezos%27_iconic_laugh_crop.jpg'
    },
    messages: [
      "Hey, interested in discussing some space exploration ideas?",
      "Blue Origin has some exciting projects coming up."
    ],
    unread: true
  },
  {
    id: 2,
    sender: {
      name: 'Elon Musk',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/800px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg'
    },
    messages: [
      "Would love to collaborate on AI safety initiatives",
      "Let's make AI beneficial for humanity"
    ],
    unread: false
  }
];

export function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      alert('Message sent: ' + newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow h-[600px] flex">
      {/* Conversations List */}
      <div className="w-1/3 border-r">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Messages</h2>
        </div>
        <div className="divide-y overflow-y-auto h-[calc(600px-64px)]">
          {messages.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`p-4 hover:bg-gray-50 cursor-pointer ${
                selectedConversation === conversation.id ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex items-center">
                <img
                  src={conversation.sender.imageUrl}
                  alt={conversation.sender.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{conversation.sender.name}</p>
                    {conversation.unread && (
                      <span className="bg-blue-600 h-2 w-2 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {conversation.messages[conversation.messages.length - 1]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Content */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            <div className="p-4 border-b">
              <div className="flex items-center">
                <img
                  src={messages.find(m => m.id === selectedConversation)?.sender.imageUrl}
                  alt="Profile"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <h3 className="ml-3 font-medium">
                  {messages.find(m => m.id === selectedConversation)?.sender.name}
                </h3>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages
                .find(m => m.id === selectedConversation)
                ?.messages.map((message, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] self-start">
                      <p>{message}</p>
                    </div>
                  </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage} className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
}