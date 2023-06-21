import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';

function CreatePost() {
  const { data: session } = useSession();
//   const userId = session?.user?.id;
//   const userName = session?.user?.name;
  const userImage = session?.user?.image;
  return (
    <div className="flex flex-row gap-2 justify-between items-center mx-auto px-4 rounded-2xl md:w-full w-[335px] md:h-[86px] h-[58px] bg-white dark:bg-dark3">
       {session && (
       <Link
        href="/profile"
        type="button"
        className="flex items-center rounded-full p-1"
      >
        <Image
          src={userImage ?? images.MemojiBoys}
          width={40}
          height={40}
          alt="profile icon"
          className="w-[full] h-[auto] rounded-full object-cover border border-primary-gold bg-primary-yellow"
        />
      </Link>)}
      {/* <p>{userId}</p> */}
      <Link
        href="/create-post"
        className="flex text-slateGray dark:hover:bg-dark2 hover:bg-[#dee0e3] items-center pl-5 ml-2 md:grow w-[174px] lg:h-[46px] h-[34px] bg-light3 dark:bg-dark4 rounded-md font-sans font-semibold text-[12px] lg:text-[16px] "
      >
        Your thoughts...
      </Link>
      <Link href="/create-post">
        <button
          type="button"
          className="lg:text-sm text-[9px] font-medium text-white hover:bg-primary-orange bg-button rounded-md ml-5 py-2 px-3 md:w-[112px] md:h-[44px] w-[83px] h-[34px]"
        >
          {' '}
          Create Post
        </button>
      </Link>
    </div>
  );
}

export default CreatePost;
