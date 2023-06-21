'use client';

import { useState } from 'react';
import Image from 'next/image';

import CreatePopUp from './PostPopUps/CreatePopUp';
import images from '../assets';

function CreatePostButton() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => { setModalVisible(!modalVisible); }} className="bg-[#F7F7F7] flex flex-row items-center md:gap-3 leading-4 text-xs md:text-sm py-2 px-2 md:py-4 md:px-6">
        Create - Post
        <Image src={images.DownArrow} alt="DownArrow" width={25}
          height={10} className="hidden md:inline-block h-3 w-3"
        />
      </button>
      {modalVisible && <CreatePopUp closeButton={setModalVisible} />}
    </div>
  );
}
export default CreatePostButton;
