import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';

import images from '@/assets';
import { Item } from '../HomePage/PostList';
import Loading from '../Loading';

interface Props {
  post: {
    _id: string;
    title: string;
    content: string;
    post_image: string;
    author: any;
    date: Date;
    posts: Item[];
    post_tags: string[]
  } | null;
}

function DetailsPost({ post }: Props) {
  if (!post) return <Loading />;

  return (
    <div className="flex flex-col w-full bg-white dark:bg-dark3 rounded-[20px] order-0 md:order-1">
      {!!post.post_image && (
        <Image
          src={post?.post_image}
          alt="icon"
          width={700}
          height={300}
          className="items-center object-cover w-full h-72 rounded-tl-[20px] rounded-tr-[20px]"
        />
      )}
      <div className="flex items-center overflow-auto px-[30px] pb-[30px] pt-5">
        <div className="pt-3 pr-[26px]">
          <span className="text-lg text-slateGrayLight">H1</span>
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <h1 className="text-black dark:text-white font-source-sans-pro text-[26px] font-semibold text-left">
            {post?.title}
          </h1>
          <div className="py-5 flex flex-nowrap items-center justify-start w-full gap-6">
            {post.post_tags.map((tag: string, index: number) => (
              <span key={index} className="cursor-pointer font-source-sans-pro text-base font-normal text-[16px] text-primary-yellow90">
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-[#97989D] font-source-sans-pro text-base font-normal text-[16px]">
            {post?.content}
          </p>
        </div>
      </div>
    </div>
  );
}
export default DetailsPost;
