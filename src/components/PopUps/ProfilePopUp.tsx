'use client';

/* eslint-disable react/function-component-definition */

import React, { useState, Suspense } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { FaPowerOff, FaUser } from 'react-icons/fa';
import images from '../../assets';
import Loading from '../Loading';

interface ProfilePopUpProps {
  handleClosePopup: () => void;
}

const ProfilePopUp: React.FC<ProfilePopUpProps> = ({ handleClosePopup }) => {
  const [selectedTab, setSelectedTab] = useState('All notifications');
  const { data: session } = useSession();
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };


  return (
    <div className="absolute top-14 z-50 right-10 w-full h-full max-h-[150px] max-w-[200px] text-black bg-white dark:text-white dark:bg-dark4 shadow-lg rounded-lg">
      <div className="p-5">
        <div className="flex flex-col gap-y-5 mt-2">
          <Suspense fallback={<Loading />}>
            {session && (
              <Link href="/profile">
                <div className="w-full  text-darkGray dark:text-light2 font-semibold text-base flex gap-3 items-center text-center notificationTextStyle hover:bg-button p-2 hover:rounded-lg">
                <FaUser size={20} className="w-5 h-5" />
                  Profile
                </div>
              </Link>
            )}
          </Suspense>
          <div className="w-full  text-darkGray dark:text-light2 font-semibold text-base flex gap-3 items-center text-center notificationTextStyle p-2 hover:bg-button cursor-pointer hover:rounded-lg" onClick={() => signOut()}>
            <FaPowerOff size={20} className="w-5 h-5" />
            Sign Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePopUp;
