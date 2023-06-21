import Image from 'next/image';

import { sidebarInfo } from '../utils/SideBar';

function Sidebar() {
  return (
    <div className="flex flex-row justify-between md:items-start items-center md:flex-col bg-white dark:bg-dark3 rounded-2xl md:w-[210px] w-[335px] mx-auto md:mx-0 p-[10px]">
      {sidebarInfo.map((item, id) => (
        <div
          key={id}
          className="flex flex-row justify-start items-center rounded-lg hover:bg-light3 dark:hover:bg-dark4 p-2.5 gap-2 w-full cursor-pointer"
        >
          <div className="flex bg-light3 rounded-lg w-[30px] h-[30px] items-center justify-center">
            <Image
              src={item.icon}
              alt="icon"
              className=" w-6 h-6 object-contain"
            />
          </div>
          <div className="flex-col">
            <div className="flex flex-row gap-1 items-center">
              <div className="relative flex flex-row gap-1 items-center">
                <p className="hidden md:flex font-semibold text-xs dark:text-white text-darkGray">
                  {item.title}
                </p>
                {item.follows && (
                  <p className="rounded hidden md:flex bg-primary-orange items-center justify-center font-semibold text-[9px] w-3 h-3">
                    {item.follows}
                  </p>
                )}
              </div>
            </div>
            <div className="relative flex flex-row gap-1">
              <p className="md:hidden font-semibold text-xs">
                {item.mobileTitle}
              </p>
              {item.follows && (
                <p className="notification-rounded md:hidden flex bg-primary-orange justify-center items-center font-semibold text-[9px] w-3 h-3">
                  {item.follows}
                </p>
              )}
            </div>
            <p className="hidden md:flex font-normal text-[9px] text-lightGray">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
