'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGlobe } from 'react-icons/fa';

import axios from 'axios';
import { ProfileModal } from './index';
import images from '../assets';
import { toast } from 'react-hot-toast';

interface Props {
  userData: any;
  externalProfile?: boolean;
}

function ProfileLeftSidebar({ userData, externalProfile }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    ...userData,
  });

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleProfileFormSubmit = async (data: any) => {
    setProfileData(data);
    handleModalClose();

    // Send this data to the API
    const result = await axios.patch('/api/user', data);
  };

  // Find the age of the user profile based on the created_at property
  const getProfileAge = () => {
    const joinedDate = new Date(profileData.created_at);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - joinedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const followUser = async () => {
    await axios.post('/api/user/' + userData._id + '/follow');
    toast.success('User succesfully ');

    // Update the profile userData
    const result = await axios.get('/api/user/' + userData._id);
    console.log(result);
    setProfileData(result.data);
  };

  return (
    <>
      <ProfileModal
        closeModal={handleModalClose}
        isOpen={isOpen}
        initialValues={profileData}
        onSubmit={handleProfileFormSubmit}
      />
      <div className=" flex relative flex-col gap-2.5 md:items-center ">
        <div className="w-[335px] md:w-[210px] min-h-[850px] ">
          <div className="inset-0 absolute rounded-2xl bg-white dark:bg-dark3" />

          <div className="relative">
            <Image
              src={images.Background}
              className="object-contain w-full absolute"
              alt="background"
            />
          </div>

          <div className=" absolute inline-flex flex-col items-center left-[9.52%] right-[9.52%] top-[5.26%] bottom-[2.63%] gap-[30px]">
            <Link href="/">
              <div className="relative w-[130px] h-[130px]">
                <Image
                  src={profileData.profile_photo}
                  width={130}
                  height={130}
                  className="contain width={130} height={130} rounded-full border-2 border-dark4"
                  alt="avatar"
                />
              </div>
            </Link>

            <div className="flex flex-col items-center gap-1">
              <p className="flex font-semibold dark:text-white text-darkGray text-[20px] px-4">
                {profileData.name}
              </p>
              <p className="flex gap-2.5 font-normal text-[#97989D]">
                {profileData.tagline ?? 'No tagline provided'}
              </p>
            </div>

            <div className="gap-2.5 flex flex-col items-start text-white text-left font-semibold">
              {externalProfile && (
                <button
                  type="button"
                  className="gap-2.5 flex justify-center items-center rounded-md p-1.5 w-[124px] bg-[#347AE2]"
                  onClick={followUser}
                >
                  Follow
                </button>
              )}
              {!externalProfile && (
                <button
                  type="button"
                  onClick={handleModalOpen}
                  className="gap-2.5 flex justify-center items-center rounded-md p-1.5 w-[124px] bg-lightGray"
                >
                  Edit
                </button>
              )}
            </div>

            <p className="text-sm font-semibold text-center m-0 leading-[22px] dark:text-white text-darkGray">
              {profileData.followers.length} Followers
            </p>
            <div className="flex flex-col items-center text-center font-semibold gap-[15px]">
              <p className="text-sm m-0 leading-[22px] dark:text-white text-darkGray">
                Following {profileData.following.length}
              </p>

              <div className="gap-2.5 flex flex-col items-start text-[rgba(63,67,84,1)]">
                <div className="gap-2.5 flex items-start">
                  <Link href="/">
                    <div className="relative w-[200px] md:w-[150px] h-[70px]">
                      <Image
                        src={images.Memo}
                        className="object-contain width={150} height={70} "
                        alt="memo"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="gap-5 flex flex-col items-center text-center font-semibold">
              <p className="text-sm m-0  leading-[22px] dark:text-white text-darkGray">
                {profileData.about}
              </p>
              <div className="md:w-[150px] gap-5 flex flex-col justify-center items-center dark:text-white text-darkGray">
                {!!profileData.userUrl && (
                  <div className="gap-2 flex flex-col items-center">
                    <Link href="/" target="_blank">
                      <div className="relative w-[14px] h-[14px]">
                        <FaGlobe className="object-contain width={14} height={14} dark:text-white text-darkGray" />
                      </div>
                    </Link>
                    <Link
                      href={profileData.userUrl}
                      target="_blank"
                      className="truncate md:w-[150px] md:text-xs text-sm m-0 leading-[22px]"
                    >
                      {profileData.userUrl}
                    </Link>
                  </div>
                )}
                <div className="flex gap-5 justify-center items-center">
                  {!!profileData.twitter && (
                    <Link href={profileData.twitter}>
                      <FaTwitter className="object-contain width={20} height={20} dark:text-white text-darkGray" />
                    </Link>
                  )}
                  {!!profileData.facebook && (
                    <Link href={profileData.facebook}>
                      <FaFacebook className="object-contain width={20} height={20} dark:text-white text-darkGray" />
                    </Link>
                  )}
                  {!!profileData.instagram && (
                    <Link href={profileData.instagram}>
                      <FaInstagram className="object-contain width={20} height={20} dark:text-white text-darkGray" />
                    </Link>
                  )}
                </div>
                <Link href="/">
                  <div className="relative w-[170px] h-[1px]">
                    <Image
                      src={images.Rectangle}
                      className="object-contain width={170} height={1px} dark:text-white text-darkGray"
                      alt="rectangle"
                    />
                  </div>
                </Link>
              </div>
              <p className="text-sm font-semibold text-center m-0 leading-[22px] dark:text-white text-darkGray">
                Joined {getProfileAge()} days ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileLeftSidebar;
