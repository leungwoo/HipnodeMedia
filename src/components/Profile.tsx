'use client';

import { useTheme } from 'next-themes';
import { Dispatch, FC, SetStateAction } from 'react';

import {
  ProfileSidebar,
  ProfileNav,
  InterviewBox,
  ProfileRightSidebar,
  Loading,
} from '.';
import PostList, { Item } from './HomePage/PostList';

type Props = {
  userData: any;
  posts: Item[];
  userLoading?: boolean;
  postsLoading?: boolean;
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  externalProfile?: boolean;
};

const Profile: FC<Props> = ({
  userData,
  posts,
  userLoading,
  postsLoading,
  currentPage,
  setCurrentPage,
  totalPages,
  externalProfile,
}) => {
  const { theme } = useTheme();
  if (!userData) return <Loading />;

  return (
    <div className="flex flex-col md:flex-row md:items-start items-center pt-4 pb-4 md:px-5 sm:mx-0 md:min-w-fit px-3 bg-layoutBackground dark:bg-dark2 gap-5 md:gap-5 justify-around h-full grow">
      <ProfileSidebar
        userData={userData}
        externalProfile={externalProfile}
      />
      <div className="grow justify-center items-center w-full overflow-hidden">
        <ProfileNav />
        <div className="w-full bg-layoutBackground dark:bg-dark2">
          {!!posts && (
            <PostList
              posts={posts}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              loading={postsLoading}
              totalPages={totalPages}
              userID={userData._id}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col md:items-center gap-5">
        <InterviewBox theme={theme ?? "light"} />
        <ProfileRightSidebar theme={theme ?? "light"} />
      </div>
    </div>
  );
};

export default Profile;
