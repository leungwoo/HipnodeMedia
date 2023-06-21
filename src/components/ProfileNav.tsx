'use client';

import React, { useState } from 'react';

function ProfileNav() {
  const navItems = ['Posts', 'Meetups', 'Podcasts', 'Interviews', 'History'];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index: number) => setActiveIndex(index);

  return (
    <div className="flex flex-row gap-2 justify-between items-center px-4 rounded-2xl w-full md:h-[86px] h-[62px] bg-white dark:bg-dark3">
      <div className="flex justify-around w-full overflow-hidden">
        {navItems.map((item, index) => (
          <div
            key={index}
            // href="#"
            className={`dark:text-white ${activeIndex === index
              ? 'text-white bg-[#FF6934]'
              : 'text-[#97989D] hover:text-white hover:bg-[#FF6934] active:text-white active:bg-[#FF6934]'
            } focus:outline-none focus:ring focus:ring-[#FF6934] px-3 py-2 rounded-full text-base font-semibold ${index > 0 && 'cursor-not-allowed'}`}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileNav;
