'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

import SelectGroupPopUp from './PostPopUps/SelectGroupPopUp';
import images from '../assets';

function SelectGroupButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => { setIsMenuOpen(!isMenuOpen); }} className="bg-[#F7F7F7] flex flex-row items-center md:gap-3 leading-4 text-xs md:text-sm py-2 px-2 md:py-4 md:px-4">
        Select - Group

        <Image src={images.DownArrow} alt="DownArrow" width={25}
          height={10} className="hidden md:inline-block md:h-3 md:w-3"
        />
      </button>
      {isMenuOpen && <SelectGroupPopUp />}
    </div>
  );
}

export default SelectGroupButton;
