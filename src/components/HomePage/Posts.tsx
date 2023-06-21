'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import Link from 'next/link';
import images from '../../assets';
import LikeIcon from '../../assets/Like';
import axios from 'axios';

interface Props {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  author: any;
  authorId: string;
  likes: string[];
  date: Date;
  tags: string[];
  isLiked: boolean;
}

function Posts({
  title,
  content,
  imageUrl,
  author,
  authorId,
  likes,
  date,
  id,
  tags,
  isLiked,
}: Props) {
  const [isLikedState, setIsLikedState] = useState(isLiked);
  // console.log(authorId);

  const handleLikeClick = () => {
    axios.post('/api/post/' + id + '/like');
    setIsLikedState((prev) => !prev);
  };
  const maxLength = 80;
  const tagLength = 10;
  // console.log(`this is the author id: ${author}`);
  // console.log(id);

  if (!author) return null;
  return (
    <div className="md:w-full w-[335px] h-[180px] bg-light1 dark:bg-[#262D34] mx-auto flex flex-row rounded-2xl mt-5">
      <Link
        href="/post-details/[id]"
        as={`/post-details/${id}`}
        id="postStockPhoto"
        className="shrink-0"
      >
        <Image
          src={imageUrl}
          width={256}
          height={256}
          alt="coverimage"
          className="md:h-[156px] h-[56px] md:w-[156px] w-[56px] ml-[14px] mt-[14px] mb-4 rounded-2xl"
        />
      </Link>

      <div className="flex flex-col p-[14px] md:w-full w-[260px]">
        <div className="flex flex-row justify-between gap-4 items-start">
          <Link
            href="/post-details/[id]"
            as={`/post-details/${id}`}
            className="flex-1 md:w-full text-clip font-sans font-semibold text-[12px] lg:text-[16px] text-darkGray dark:text-light2 hover:underline"
          >
            {title.length <= maxLength
              ? title
              : `${title.slice(0, maxLength - 3)}...`}
          </Link>
          <div
            className={`flex rounded-full dark:bg-dark4 p-1 bg-light3 ${isLikedState ? 'text-primary-orange ' : 'text-slateGrayLight'
              }`}
          >
            <LikeIcon
              onClick={handleLikeClick}
              className={`hidden lg:block cursor-pointer ${isLikedState
                ? 'drop-shadow-[0px_4px_4px_rgba(255,105,52,0.25)]'
                : ''
                }`}
              pathClassName=""
            />
            <Link href={'/profile/' + author._id} as={`/profile/${author.id}`}>
              <Image
                src={author.profile_photo}
                width={256}
                height={256}
                alt="profile"
                className="hover:cursor-pointer w-[40px] h-[40px] md:w-[35px] md:h-[35px] object-cover block lg:hidden rounded-full border border-primary-gold"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 text-[9px] md:text-[10px] font-normal md:font-semibold pt-[10px] max-w-[160px] overflow-ellipsis">
          {tags &&
            tags.length > 0 &&
            tags[0] !== '' &&
            tags.map((tag: any) => (
              <p
                key={tag}
                className="overflow-ellipsis text-slateGray dark:text-slateGrayLight rounded-lg bg-light3 dark:bg-dark4 text-center p-2 "
              >
                #{tag.length <= tagLength ? tag : `${tag.slice(0, tagLength - 3)}...`}
              </p>
            ))}
        </div>

        <div className="flex flex-row items-center justify-between pt-6 md:pt-[10px] xl:pt-[35px]">
          <div className="flex-1 hidden xl:block">
            <div className="flex flex-row gap-1">
              <Link href="/profile/[profileId]" as={`/profile/${author._id}`}>
                <Image
                  src={author.profile_photo}
                  width={256}
                  height={256}
                  alt="profile"
                  className="w-[40px] h-[40px] rounded-full border border-primary-gold"
                />
              </Link>
              <div className="flex flex-col">
                <Link href="/profile/[profileId]" as={`/profile/${author._id}`}>
                  <p className="font-semibold text-[14px] mb-0.5">
                    {author.name}
                  </p>
                </Link>
                <p className="text-[10px] text-gray-400 mb-0.5">
                  {date.toString()}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row xl:justify-between justify-center gap-5  font-normal text-[9px] md:text-[14px] text-lightGray dark:text-slateGrayLight ">
            <p>651,232 Views</p>
            <p>{likes?.length ?? 0} Likes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
