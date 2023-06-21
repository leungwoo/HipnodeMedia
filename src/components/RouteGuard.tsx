"use client"
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';


type Props = {
  children: React.ReactNode;
};

const PROTECTED_ROUTES = ['/create-post', '/profile'];

const RouteGuard: FC<Props> = ({ children }) => {
  const { data: session } = useSession()
  const router = useRouter();
  const pathname = usePathname();

  if (pathname && PROTECTED_ROUTES.includes(pathname) && !session?.user) {
    if (typeof window !== "undefined") router.push('/signin');
    return null;
  }

  return <>{children}</>;
};

export default RouteGuard;

