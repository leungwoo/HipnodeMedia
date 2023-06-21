import React from 'react';
import Image from 'next/image';
import images from '../../assets';

interface ChatPopUpProps {
  handleClosePopup: () => void;
  handleMaximize: () => void;
  handleMinimize: () => void;
  isOnline: boolean;
}

const messages = [
  {
    user: 'John Doe',
    userAvatar: images.Avatar,
    isUser: true,
    text: 'Hi, how are you doing today?',
  },
  {
    user: 'Jane Doe',
    userAvatar: images.Avatar4,
    isUser: false,
    text: "I'm doing well, thank you! How about you?",
  },
  {
    user: 'John Doe',
    userAvatar: images.Avatar,
    isUser: true,
    text: "I'm good too, thanks for asking.",
  },
];

const ChatPopUp: React.FC<ChatPopUpProps> = ({
  handleClosePopup,
  handleMaximize,
  handleMinimize,
  isOnline,
}) => (
  <div className="relative bottom-0 left-0 w-full h-full max-h-[650px] max-w-[350px] bg-white shadow-lg">
    <div className="flex justify-between items-center p-5 border-b border-[#F4F6F8] pb-8 w-full">
      <div className="flex items-center">
        <Image src={images.Avatar} alt="User Avatar" width={40} height={40} />
        <div className="ml-3">
          <p className="text-sm font-medium">John Doe</p>
          <p
            className={`text-xs ${isOnline ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {isOnline ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>
      <div className="flex">
        <Image
          src={images.expand}
          alt="Maximise"
          className="h-4 w-4 cursor-pointer"
          onClick={handleMaximize}
        />
        <Image
          src={images.down_arrow}
          alt="Minimise"
          className="h-4 w-4 ml-4 cursor-pointer"
          onClick={handleMinimize}
        />
      </div>
    </div>
    <div className="p-5">
      <div className="flex flex-col gap-y-5 mt-5">
        {messages.map((message, index) => (
          <div key={index} className={`flex items-center ${message.isUser
            ? 'justify-start'
            : 'justify-end'
          }`}
          >
            {!message.isUser ? (
              <Image
                src={message.userAvatar}
                alt={`${message.user} avatar`}
                width={40}
                height={40}
                className="ml-3 order-2"
              />
            ) : (
              <Image
                src={message.userAvatar}
                alt={`${message.user} avatar`}
                width={40}
                height={40}
                className="mr-3"
              />
            )}

            <div
              className={`p-3 font-medium ${message.isUser
                ? 'bg-[#FFECE6] text-[#FF6934] self-end chat-start'
                : 'bg-[#FF6934] text-white chat-end'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex border-t border-[#F4F6F8] justify-center items-center">
      <div className="flex w-full relative items-center">
        <div className="absolute left-8">
          <Image src={images.attach} alt="upload" className="w-5 h-5" />
        </div>
        <input
          className="w-full px-10 py-3 m-5 rounded-xl border border-[#C5D0E6] placeholder:text-[#858EAD]"
          type="text"
          placeholder="Type a message..."
        />
        <div className="absolute right-8">
          <Image src={images.mic} alt="mic" className="w-5 h-5" />
        </div>
      </div>
      <div className="mr-4">
        <Image src={images.send} alt="send" />
      </div>
    </div>
  </div>
);

export default ChatPopUp;
