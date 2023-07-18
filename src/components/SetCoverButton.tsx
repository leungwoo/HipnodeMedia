/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

import { toast } from 'react-hot-toast';
import PhotoImage from '../assets/Photo';

interface SetCoverButtonProps {
  theme: string | undefined;
  setImageSelected: (image: any) => void;
  handleImageChange:(imageSrc:string)=> void;
}

function SetCoverButton({ setImageSelected, theme, handleImageChange }: SetCoverButtonProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const inputRef = useRef<any>();

  const imageLoaded = () => {
    if (!isImageLoaded) {
      setIsImageLoaded(true);
      toast.success('Image uploaded Successfully');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImageSelected(file);
      setIsImageLoaded(false);
      handleImageChange(URL.createObjectURL(file));
      toast.success('Image uploaded Successfully');
    } else {
      setImageSelected(null); // Set null when no file is selected
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex flex-col ">
      <button
        type="button"
        onClick={handleClick}
        className="bg-[#F7F7F7] dark:bg-dark4 hover:bg-[#5D95E8] dark:hover:bg-[#5D95E8] rounded-[4px] flex flex-row  w-[120px] h-[35px] justify-center items-center gap-[10px] px-[12px] py-[8px] md:font-semibold text-[11px] text-[#3F4354] dark:text-[#F7F7F7] hover:text-white "
      >
        <PhotoImage />
        Set Cover
      </button>
      <div className="flex flex-col items-left gap-4 mt-2">
        <input
          ref={inputRef}
          type="file"
          
          onChange={handleInputChange}
          className="rounded-xs text-darkGray dark:text-lightGray"
          required
        />
      </div>
    </div>
  );
}

export default SetCoverButton;
