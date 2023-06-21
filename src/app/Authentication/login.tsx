import { useSession, signIn, signOut } from 'next-auth/react';
import { FaPowerOff, FaUserCircle, FaSignInAlt } from 'react-icons/fa';

import Link from 'next/link';

import { UserCard } from './userCard';
import images from '../../assets';

interface LoginProps {
  theme: string | undefined;
}

export default function Login({ theme }: LoginProps) {
  const { data: session, status } = useSession();

  // if the user exists -> show a Sign Out button and their information
  if (session && status === 'authenticated') {
    return (
      <>
        <UserCard
          user={session?.user}
          theme={theme}
        // setTheme={setTheme}
        />
        {/* <div>
          <button onClick={() => signOut()} type="button" className="hidden md:block relative group">
            <FaPowerOff size={20} className="w-4 h-4 hover:text-primary-orange" />
            <span className="absolute left-full text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              Sign Out
            </span>
          </button>
        </div> */}
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => signIn()}
        type="button"
        className=" md:flex flex-row justify-center items-center gap-1 border border-opacity-25 rounded-lg py-2 px-4 bg-slate-100 hover:bg-gray-200 text-black "
      >
        <FaUserCircle
          size={50}
          className={`w-5 h-5 ${theme === 'light'
              ? 'hover:text-primary-orange text-black'
              : 'text-[#858ead] hover:text-primary-orange'
            }`}
        />
        <span className='hidden md:flex'>Sign In</span>
      </button>

      {/* <button onClick={() => signOut()} type="button" className="hidden md:block relative group">
        {theme === 'light'
          ? (
            <FaPowerOff
              size={20}
              className="w-4 h-4 text-[#858ead] group-hover:text-primary-orange"
            />
          )
          : (
            <FaPowerOff
              size={20}
              className="w-4 h-4 text-[#858ead] group-hover:text-primary-orange"
            />
          )}
        <span className="absolute left-full text-base whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          Sign Out
        </span>
      </button> */}
    </>
  );
  // if a user doesn't exist -> show a Sign In button
  // additional if check  added so that the signIn option won't be shown while session check is going on
  if (!session && status === 'unauthenticated') {
    return (
      <>

        <button
          onClick={() => {
            signIn();
          }}
          type="button"
          className="hidden md:flex justify-center items-center gap-1 border rounded-full py-2 px-4 bg-slate-100 hover:bg-gray-200  dark:bg-dark3 dark:hover:bg-dark4"
        >

          {theme === 'light' ? <FaUserCircle size={20} className="w-4 h-4 hover:text-primary-orange text-[#858ead]" /> : <FaUserCircle size={20} className="w-4 h-4 text-white hover:text-primary-orange" />}
          Sign In
        </button>

        <button
          onClick={() => {
            signIn();
          }}
          type="button"
          className="flex md:hidden justify-center items-center gap-1 border rounded-full py-2 px-2 bg-slate-100 hover:bg-gray-200"
        >

          {theme === 'light' ? <FaSignInAlt size={20} className="w-4 h-4 hover:text-primary-orange text-[#858ead]" /> : <FaSignInAlt size={20} className="w-4 h-4  hover:text-primary-orange text-white" />}
        </button>

      </>
    );
  }
  // this return is made for the typescript error :Its return type 'Element | undefined' is not a valid JSX element.
  // Type 'undefined' is not assignable to type 'Element | null'
  return <Link href="/api/auth/signin" />;
}
