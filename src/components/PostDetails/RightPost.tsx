import Image from 'next/image';
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import { Item } from '../HomePage/PostList';

interface Props {
  post: {
    _id: string;
    title: string;
    content: string;
    post_image: string;
    author: any;
    date: Date;
    posts: Item[];
  } | null;
}

function RightPost({ post }: Props) {
  return (
    <div className="flex flex-col items-center mx-auto gap-5 w-full md:w-fit order-2">
      <div className="bg-light1 dark:bg-[#262D34] flex flex-col items-center gap-2  rounded-[20px] px-5 py-[30px] w-full">
        <div className="flex flex-col items-center justify-start rounded-full">
          <Image
            src={post?.author.profile_photo}
            alt="icon"
            width={100}
            height={100}
            className="items-center justify-center object-cover mt-[10px] rounded-full w-24 h-24"
          />
        </div>
        <h1 className="text-center font-semibold text-[26px] pt-[20px]  leading-3">
          {post?.author.display_name}
        </h1>
        <span className="text-[#97989D] font-semibold text-[16px]">
          {!post?.author.tagline ? 'Tagline' : post?.author.tagline}
        </span>

        <button className="bg-[#347AE2] text-[#EBF2FC] py-[10px] font-semibold px-[116px] rounded-[6px] mt-[20px]">
          Follow
        </button>
        <div className="text-[#97989D] font-normal text-[16px] pt-5">
          {(() => {
            const date = new Date(post?.author.created_at);
            const formattedDate = formatDistanceToNow(date, {
              addSuffix: true,
            });
            return 'joined ' + formattedDate;
          })()}
        </div>
      </div>

      <div className="bg-light1 dark:bg-[#262D34]  flex flex-col gap-2 rounded-2xl p-5 w-full">
        <div>More about {post?.author.display_name}</div>
        <hr className="my-[10px] mr-5 border-black dark:border-white" />
        <p>{post?.author.about}</p>
      </div>
    </div>
  );
}

export default RightPost;
