'use client';

import React, {
  useState,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
} from 'react';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';

import Posts from './Posts';
import Loading from '../Loading';

export interface Item {
  _id: string;
  title: string;
  content: string;
  post_tags?: string[];
  post_image: string;
  author: string;
  created_at: Date;
  likes: string[];
}
type Props = {
  posts: Item[];
  loading?: boolean;
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  userID?: string;
};

const PostList: FC<Props> = ({
  loading,
  posts,
  currentPage,
  setCurrentPage,
  totalPages,
  userID,
}) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      {loading && <Loading />}
      {!loading && (
        <div>
          {posts.map((item: any, index: number) => {
            const date = new Date(item.created_at);
            const formattedDate = formatDistanceToNow(date, {
              addSuffix: true,
            });
            console.log(item.likes, userID);
            return (
              <div
                key={item._id}
                className="flex flex-col gap-20 bg-layoutBackground dark:bg-dark2"
              >
                <Posts
                  title={item.title}
                  content={item.content}
                  imageUrl={item.post_image}
                  id={item._id}
                  author={item.author}
                  authorId={item.author._id}
                  tags={item.post_tags}
                  likes={item.likes}
                  date={formattedDate as any}
                  isLiked={userID ? item.likes?.includes(userID) : false}
                />
              </div>
            );
          })}
          <div className="flex justify-between items-center mb-5 mt-30 md:mb-5">
            <button
              type="button"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center justify-center border border-black dark:border-white text-[15px] mt-[20px] font-medium text-white bg-button rounded-md py-2 px-3 md:w-[112px] md:h-[44px] w-[83px] h-[34px] ${currentPage === 1
                  ? 'cursor-not-allowed'
                  : 'cursor-pointer hover:bg-primary-orange hover:text-white '
                }`}
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center border border-black dark:border-white text-[15px] mt-[20px] font-medium text-white bg-button rounded-md py-2 px-3 md:w-[112px] md:h-[44px] w-[83px] h-[34px] ${currentPage === totalPages
                  ? 'cursor-not-allowed'
                  : 'cursor-pointer hover:bg-primary-orange hover:text-white'
                }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostList;
