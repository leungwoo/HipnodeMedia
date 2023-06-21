'use client';

import { useState } from 'react';
import Image from 'next/image';

import PostPopUp from './PostPopUps/CreatePopUp';
import images from '../assets';

function PopUpTest() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => { setOpen(true); }} className="bg-[#F7F7F7] flex flex-row my-4 pl-[10px] ml-[10px] p-2 pr-8 relative items-end gap-3">
        Create - Post
        <Image src={images.DownArrow} alt="DownArrow" width={25}
          height={10} className="absolute right-0 p-1"
        />
      </button>
      {open && <PostPopUp closeButton={setOpen} />}
    </div>
  );
}

export default PopUpTest;
