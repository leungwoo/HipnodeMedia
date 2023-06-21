'use client';

import '../globals.css';
import { SessionProvider } from 'next-auth/react';

import { SessionType } from '../../../lib/utils/type';
import Logging from '../../../lib/utils/Logging';

// provding session as a props here to prevent fetching session object twice on other pages and components
// if already fetched from getSereverSideprops.
export default function ProvidersWrapper({ children, session }: { children: React.ReactNode, session: SessionType }) {
  Logging.info(`session inside PWrapper ${session}`);
  return (
    <SessionProvider session={session as any}>
      {children}
    </SessionProvider>
  );
}

