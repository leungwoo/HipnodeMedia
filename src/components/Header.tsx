
import Image from 'next/image';
import Link from 'next/link';
import { FiMoon, FiSun } from 'react-icons/fi';

import { Searchbar } from './index';
import Login from '../app/Authentication/login';
import images from '../assets';


const icons = [
  { src: images.home, src2: images.homedarkmode, alt: 'home', link: '/' },
  {
    src: images.calendar,
    src2: images.calendardarkmode,
    alt: 'calendar',
    link: '',
  },
  { src: images.group, src2: images.groupdarkmode, alt: 'group', link: '' },
  {
    src: images.podcast,
    src2: images.podcastdarkmode,
    alt: 'podcast',
    link: '',
  },
  {
    src: images.interview,
    src2: images.interviewdarkmode,
    alt: 'interview',
    link: '',
  },
];

interface HeaderProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

function Header({ theme, setTheme }: HeaderProps) {

  if (!theme) {
    setTheme('dark');
  }

  return (

    <div className="flex flex-row items-center h-[60px] lg:h-[80px] md:px-[40px] md:py-[25px] px-4 py-[15px] w-full gap-6 bg-white dark:bg-dark3">
      <Link href="/" className="flex flex-row gap-2.5 items-center">
        <div className="flex">
          <Image
            src={theme === 'light' ? images.logolightmode : images.logodarkmode}
            alt="logo"
            className="h-[30px] w-[30px] min-w-[30px] object-cover"
          />
        </div>
        <div className="hidden xl:flex flex-row justify-center items-center">
          <p className="text-primary-orange text-[26px] font-bold ">Hipnode</p>
          <span className="text-4xl">.</span>
        </div>
      </Link>
      <div className="hidden lg:flex flex-row justify-center items-center gap-x-5 ml-[35px]">
        {icons.map((items, index) => (
          <Link href={items.link} className="w-[40px] h-[40px] ">
            <Image
              key={index}
              src={theme === 'light' ? items.src : items.src2}
              alt={items.alt}
              width={20}
              height={20}
              className={` bg-light3 dark:bg-dark4 p-2 rounded-lg w-[40px] h-[40px] 
              ${items.src === images.home ? 'cursor-pointer' : 'cursor-not-allowed'}
                ${items.src === images.home ? 'hover:bg-primary-orange hover:duration-1000 dark:hover:bg-primary-orange dark:hover:duration-1000 ' : ''}
               `}
            />
          </Link>
        ))}
      </div>
      <div className="flex-grow justify-center items-start lg:ml-[65px]">
        <Searchbar />
      </div>
      <div className="flex flex-row items-center gap-[20px] md:gap-[25px] md:ml-[50px] ">
        {/* logged out user button */}
        <Login theme={theme} />
        {/* light / dark mode button */}
        <button
          type="button"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        >
          {theme === 'light' ? (
            <FiMoon
              size={20}
              className=" md:w-[25px] md:h-[25px] w-[20px] h-[20px] text-[#858ead] hover:text-primary-orange"
            />
          ) : (
            <FiSun
              size={20}
              className="md:w-[25px] md:h-[25px] w-[20px] h-[20px] hover:text-primary-orange text-[#fff]"
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
