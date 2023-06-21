'use client';

import './globals.css';
import { ThemeProvider, useTheme } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import ProvidersWrapper from './Authentication/ProvidersWrapper';
import { SessionType } from '../../lib/utils/type';
import Logging from '../../lib/utils/Logging';
import { Footer, Header } from '../components';
import RouteGuard from '@/components/RouteGuard';

function MainHeader() {
  const { theme, setTheme } = useTheme();
  return <Header theme={theme} setTheme={setTheme} />;
}

function MainFooter() {
  const { theme } = useTheme();
  return <Footer theme={theme} />;
}

function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: SessionType;
}) {
  Logging.info(`session inside layout ${session}`);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx.
        Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
      <head />
      <body className="min-h-screen flex flex-col">
        <Toaster />
        <ThemeProvider attribute="class">
          <ProvidersWrapper session={session}>
            <RouteGuard>
              <MainHeader />
              {children}
              <MainFooter />
            </RouteGuard>
          </ProvidersWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
