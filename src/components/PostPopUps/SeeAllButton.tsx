'use client';

import { useState } from 'react';
import SelectGroupExtended from './SelectGroupExtended';

function SeeAllButton() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setModalVisible(true)} className="w-[34px] h-[14px] ml-[12px] bg-[#E0E2FD] rounded-lg absolute">
        <p className="relative font-semibold text-[9px] leading-[14px] text-center text-[#6570F7]">See All</p>
      </button>
      {modalVisible && <SelectGroupExtended />}
    </div>
  );
}

export default SeeAllButton;
