'use client';

import { useState, useEffect } from 'react';
import Profile from '@/components/Profile';
import { useSession } from 'next-auth/react';

function ProfilePage() {
  const session = useSession();
  // console.log(session.data?.user?.id);
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState<any>();
  const [isUserLoading, setIsUserLoading] = useState<boolean>(true);
  const [isPostLoading, setIsPostLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const userEmail = session.data?.user?.email;
    if (!userEmail) return;
    async function fetchData() {
      try {
        setIsUserLoading(true);
        const response = await fetch(`/api/user/`);
        const data = await response.json();
        setUserData(data);
        setIsUserLoading(false);

        const userID = data._id;

        setIsPostLoading(true);
        const postResponse = await fetch(
          `/api/post/?userId=${userID}&page=${currentPage}`
        );
        const postData = await postResponse.json();
        setIsPostLoading(false);
        setUserPosts(postData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchData();
  }, [session, currentPage]);

  if (!userData || !userPosts) return null;

  return (
    // (isPostLoading || isUserLoading) ? <Loading /> :
    <Profile
      userData={userData}
      posts={userPosts.posts}
      postsLoading={isPostLoading}
      userLoading={isUserLoading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPages={userPosts.totalPages}
      externalProfile={false}
    />
  );
}
export default ProfilePage;
