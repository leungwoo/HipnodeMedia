/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
'use client';

import { useEffect, useState, lazy, Suspense } from 'react';
import { useTheme } from 'next-themes';

import {
  ChatPopUp,
  Sidebar,
  PinnedGroup,
  Popular,
  Meetups,
  Podcast,
  CreatePost,
  MessagePopup,
  NotificationPopUp,
  Loading,
} from '../components/index';
import { useSession } from 'next-auth/react';

const PostList = lazy(() =>
  import('../components/index').then((module) => ({ default: module.PostList }))
);

const getPosts = async (page: number) => {
  const res = await fetch('/api/post?page=' + page);
  const posts = await res.json();
  return posts;
};

function Home() {
  const { theme } = useTheme();
  const [posts, setPosts] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data: session } = useSession();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setPosts(await getPosts(currentPage));
      setIsLoading(false);
    })();
  }, [currentPage]);

  // console.log(posts?.posts);

  return (
    <div className="flex flex-col md:flex-row md:items-start items-center pt-4 pb-4 md:px-5 sm:mx-0 min-w-fit bg-layoutBackground dark:bg-dark2 gap-5 md:gap-5 justify-between grow">
      <div className="flex flex-col gap-5 md:min-w-[186px] md:items-center">
        <Sidebar />
        <Popular theme={theme ?? "light"} />
        <PinnedGroup theme={theme ?? "light"} />
      </div>

      <div className="grow mx-auto justify-center items-center">
        <CreatePost />
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grow overflow-auto">
            {!!posts?.posts && (
              <Suspense fallback={<Loading />}>
                <PostList
                  posts={posts.posts}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={posts.totalPages}
                  userID={session?.user?.id}
                />
              </Suspense>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col md:items-center gap-5">
        <Meetups theme={theme ?? "light"} />
        <Podcast theme={theme ?? "light"} />
      </div>
    </div>
  );
}

export default Home;
