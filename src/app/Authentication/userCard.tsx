'use client';
import { DefaultSession } from 'next-auth';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMoon, FiSun } from 'react-icons/fi';

import {
  MessagePopup,
  NotificationPopUp,
  ProfilePopUp,
  Searchbar,
} from '../../components/index';
import images from '../../assets';

const icons = [
  { src: images.home, src2: images.homedarkmode, alt: 'home', link: '/' },
  {
    src: images.calendar,
    src2: images.calendardarkmode,
    alt: 'calendar',
    link: '/',
  },
  { src: images.group, src2: images.groupdarkmode, alt: 'group', link: '/' },
  {
    src: images.podcast,
    src2: images.podcastdarkmode,
    alt: 'podcast',
    link: '/',
  },
  {
    src: images.interview,
    src2: images.interviewdarkmode,
    alt: 'interview',
    link: '/',
  },
];

interface UserCardProps {
  user: DefaultSession['user'];
  theme: string | undefined;

}

// Default session Type

export function UserCard({ user, theme }: UserCardProps) {
  const [showProfilePopUp, setProfilePopUp] = useState(false);
  const [showMessagePopup, setMessagePopup] = useState(false);
  const [showNotificationPopUp, setNotificationPopUp] = useState(false);

  const handleClosePopup = (skip?: (state: boolean) => void) => {
    if (skip !== setProfilePopUp) {
      setProfilePopUp(false);
    }
    if (skip !== setMessagePopup) {
      setMessagePopup(false);
    }
    if (skip !== setNotificationPopUp) {
      setNotificationPopUp(false);
    }
  };
  return (
    <>
      <div
        onClick={() => {
          handleClosePopup(setMessagePopup);
          setMessagePopup(!showMessagePopup);
        }}
        className="flex w-[40px] h-[40px] bg-light3 dark:bg-dark4 items-center justify-center rounded-lg hover:bg-primary-orange dark:hover:bg-primary-orange hover:duration-1000"
      >
        <Image
          src={theme === 'light' ? images.messagegray : images.messagedarkmode}
          alt="message"
          width={20}
          height={20}
          className="w-[full] h-[auto] cursor-pointer object-cover"
        />
      </div>
      {showMessagePopup && <MessagePopup handleClosePopup={handleClosePopup} />}

      <div
        onClick={() => {
          handleClosePopup(setNotificationPopUp);
          setNotificationPopUp(!showNotificationPopUp);
        }}
        className="flex w-[40px] h-[40px] bg-light3 dark:bg-dark4 items-center justify-center rounded-lg hover:bg-primary-orange dark:hover:bg-primary-orange hover:duration-1000"
      >
        <Image
          src={
            theme === 'light'
              ? images.notification
              : images.notificationdarkmode
          }
          alt="notification"
          width={20}
          height={20}
          className="w-[full] h-[auto] cursor-pointer object-cover"
        />
      </div>
      {showNotificationPopUp && (
        <NotificationPopUp handleClosePopup={handleClosePopup} />
      )}

      <div
        onClick={() => {
          handleClosePopup(setProfilePopUp);
          setProfilePopUp(!showProfilePopUp);
        }}
        className="flex gap-2 items-center justify-center "
      >
        <div className='border border-primary-borderyellow rounded-lg p-0.5'>
          <Image
            src={user?.image ?? images.MemojiBoys}
            alt="profileicon"
            className="cursor-pointer rounded-lg max-w-[40px] h-auto w-auto md:h-[40px] md:w-[40px] object-cover bg-primary-yellow p-1"
            width={40}
            height={40}
          />
        </div>
        <div className="hidden md:flex justify-center items-center gap-1 cursor-pointer ">
          <p className={theme === 'light' ? 'text-base font-bold text-[#858ead]' : 'text-base font-bold text-[#fff]'}>{user?.name}</p>
          {/* <p className={`text-base font-bold text-[#fff]`}>{user?.name}</p> */}
          <Image
            src={theme === 'light' ? images.userMenu : images.userMenudarkmode}
            alt="menu"
            className="w-2 h-2"
          />
        </div>
      </div>
      {showProfilePopUp && <ProfilePopUp handleClosePopup={handleClosePopup} />}
    </>
  );
}
