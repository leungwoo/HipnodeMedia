'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

import images from '../../assets';
import Loading from '../Loading';
import { useRouter } from 'next/navigation';

interface NotificationPopUpProps {
  handleClosePopup: () => void;
}

const NotificationPopUp: React.FC<NotificationPopUpProps> = ({
  handleClosePopup,
}) => {
  const [selectedTab, setSelectedTab] = useState('All notifications');
  const [notifications, setNotifications] = useState([]); // For all notifications
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };


  const handleMarkRead = async () => {
    try {
      await axios.delete('/api/notifications');
      setLoading(true);
      fetchNotifications();
    } catch (error) {
      console.error('Error deleting notifications:', error);
    }
  };

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('/api/notifications/');
      const data = response.data;
      setNotifications(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const onClick = async (notification: any) => {
    router.push(`/profile/${notification.fromUser._id}`);
    axios.delete('/api/notification/' + notification._id);
    handleClosePopup();
  };

  return (
    <div className="absolute top-16 z-50 right-20 w-full h-full overflow-y-scroll scrollbar-none max-h-[418px] max-w-[300px] bg-white text-black dark:text-white dark:bg-dark4 shadow-lg">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-dark font-semibold">Notifications</p>
          <button type="button" onClick={handleMarkRead}>
            <Image src={images.mark_read_btn} alt="mark read" className="" />
          </button>
        </div>
        <div className="flex flex-col gap-y-5 mt-5">
          <div className="flex gap-2 justify-center">
            <div
              className={`w-1/3 text-center notificationTextStyle ${selectedTab === 'All notifications'
                ? 'notificationActiveTextStyle'
                : ''
                }`}
              onClick={() => handleTabChange('All notifications')}
            >
              All notifications
            </div>
            {/* <div className={`w-1/3 flex gap-1 items-center text-center notificationTextStyle ${selectedTab === 'Reactions' ? 'notificationActiveTextStyle' : ''}`} onClick={() => handleTabChange('Reactions')}>
              <Image src={images.heart} alt="heart" className="w-3 h-3" />
              Reactions
            </div>
            <div className={`w-1/3 flex gap-1 items-center text-center notificationTextStyle ${selectedTab === 'Comments' ? 'notificationActiveTextStyle' : ''}`} onClick={() => handleTabChange('Comments')}>
              <Image src={images.comment} alt="comment" className="w-3 h-3" />
              Comments
            </div> */}
          </div>
          <hr className="my-[5px] mr-5 w-full border-black dark:border-white" />
          {/* <div className="flex flex-col gap-y-5">
            {getSelectedTabData().map((notification, index) => (
              <div className="flex gap-x-5" key={index}>
                <div className="w-1/6">
                  <Image src={notification.senderAvatar} alt="avatar" />
                </div>
                <div className="w-5/6">
                  <p className="text-xs text-[#97989D] font-semibold">{notification.senderName} <small>commented on your post</small> </p>
                  <p className="notificationComment">{notification.message}</p>
                  <p className="notificationTitle">{notification.title}</p>
                  <p className="notificationDate">{notification.date}</p>
                </div>
              </div>
            ))}
          </div> */}

          <div className="notification-popup">
            {loading ? (
              <Loading />
            ) : notifications.length === 0 ? (
              <div className="flex justify-center items-center h-full">
                <p className="text-gray-500">No notifications</p>
              </div>
            ) : (
              <ul>
                {notifications.map((notification: any) => (
                  <li
                    key={notification._id}
                    className="cursor-pointer"
                    onClick={() => onClick(notification)}
                  >
                    <div className="flex gap-x-5 my-4">
                      <div className="w-1/6">
                        <Link href={`/profile/${notification.fromUser._id}`}>
                          <img
                            src={notification.fromUser.profile_photo}
                            alt="Profile"
                            className="w-[40px] h-[40px] rounded-full"
                          />
                        </Link>
                      </div>
                      <div className="w-5/6">
                        <p className="text-xs text-[#97989D] font-semibold">
                          {notification.fromUser.name}
                        </p>
                        <p
                          className={
                            !notification.read
                              ? 'notificationDescription font-semibold'
                              : 'notificationDescription'
                          }
                        >
                          {notification.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopUp;
