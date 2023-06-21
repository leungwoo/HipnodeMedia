import React from 'react';
import Image from 'next/image';
import images from '../../assets';

interface MessagePopupProps {
  handleClosePopup: () => void;
}

const MessagePopup: React.FC<MessagePopupProps> = ({ handleClosePopup }) => {
  const messageData = [
    {
      senderAvatar: images.Avatar,
      senderName: 'John Doe',
      time: '1 hour ago',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum.',
      unreadCount: 2,
    },
    {
      senderAvatar: images.Avatar,
      senderName: 'Jane Doe',
      time: '2 hours ago',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum.',
      unreadCount: 3,
    },
    {
      senderAvatar: images.Avatar,
      senderName: 'John Smith',
      time: '3 hours ago',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum.',
      unreadCount: 1,
    },
  ];

  return (
    <div className="absolute top-16 z-50 right-40 w-full h-full max-h-[370px] max-w-[300px] text-black bg-white dark:text-white dark:bg-dark4 shadow-lg">
      <div className="p-5">
        <p className="text-sm font-bold">Messages</p>
        <div className="flex flex-col gap-y-5 mt-5">
          {messageData.map((message) => (
            <div className="flex" key={message.senderName}>
              <Image src={message.senderAvatar} alt={`${message.senderName} avatar`} className="w-12 h-12 object-cover rounded-full" />
              <div className="flex-1 pl-2">
                <span className="flex gap-1 justify-start items-center">
                  <p className="text-sm text-[#3F4354] dark:text-white font-bold">{message.senderName}</p>
                  <p className="text-xs text-[#97989D]">{message.time}</p>
                </span>
                <p className="text-xs text-[#97989D]">{message.message}</p>
              </div>
              <div className="flex items-center justify-center w-6 h-6 bg-[#FF6934] rounded-full">
                <p className="text-xs text-white">{message.unreadCount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative bottom-0 text-center cursor-pointer" onClick={handleClosePopup}>
        <p className="text-sm text-[#347AE2]">See all in Messenger</p>
      </div>
    </div>
  );
};

export default MessagePopup;
