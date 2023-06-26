/* eslint-disable react/button-has-type */
import {
  signIn,
  getCsrfToken,
  getProviders,
  getSession,
} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import images from '../assets';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useState } from 'react';

interface SigninProps {
  csrfToken: string;
  providers: Record<string, any>;
  theme: string;
  setTheme: (theme: string) => void;
}

function Signin({ csrfToken, providers }: SigninProps) {
  const handleSignIn = (provider: { id: any }) => {
    console.log('Signing in with provider:', provider.id);
    signIn(provider.id, { checks: { state: csrfToken } });
  };

  const [theme, setTheme] = useState('dark');

  const themeClasses = {
    bg: theme === 'light' ? 'bg-white' : 'bg-dark3',
    leftbg: theme === 'light' ? 'bg-light2' : 'bg-dark2',
    text: theme === 'light' ? 'text-darkGray' : 'text-light2',
    inputBg: theme === 'light' ? 'bg-light3' : 'bg-dark4',
    cardBg: theme === 'light' ? 'bg-white' : 'bg-dark3',
    cardText: theme === 'light' ? 'text-darkGray' : 'text-light2',
    separator: theme === 'light' ? 'bg-darkGray' : 'bg-light2',
    orange100: theme === 'light' ? 'bg-orange100' : 'bg-dark4',
    yellow100: theme === 'light' ? 'bg-yellow100' : 'bg-dark4',
    blue100: theme === 'light' ? 'bg-blue100' : 'bg-dark4',
  };

  /**
   * 
   * To Get to the signin page that Cyril has, uncomment everything below
   * In api/auth/[...nextauth].ts uncomment twitter and facebook providers
   * 
  **/

  return (
    <div className={`min-h-screen ${themeClasses.bg}`}>
      <div className="flex flex-col md:flex-row items-center justify-center m-auto">
        <div
          className={`w-full md:w-1/2 min-h-screen flex flex-col ${themeClasses.leftbg}`}
        >
          <Link
            href="/"
            className="flex flex-row gap-2.5 items-center mx-5 md:mx-10 my-10"
          >
            <div className="flex">
              <Image
                src={
                  theme === 'light' ? images.logolightmode : images.logodarkmode
                }
                alt="logo"
                className="h-[30px] w-[30px] min-w-[30px] object-cover"
              />
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="text-primary-orange text-[26px] font-bold ">
                Hipnode
              </p>
              <span className={`${themeClasses.text} text-4xl`}>.</span>
            </div>
          </Link>
          <div className="flex-grow px-5 py-10 md:px-36 md:py-[80px]">
            <h1
              className={`${themeClasses.text} font-bold text-lg md:text-3xl leading-6 md:leading-10`}
            >
              Join a thriving community of entrepreneurs and developers.
            </h1>
            <div
              className={`flex items-center mt-10 p-5 gap-2 w-full h-28 rounded-lg ${themeClasses.cardBg}`}
            >
              <div
                className={`${themeClasses.orange100} p-4 flex justify-center items-center rounded-lg`}
              >
                <Image
                  src={images.sign_business}
                  alt="business"
                  className="h-[30px] w-[30px] min-w-[30px] object-cover"
                />
              </div>
              <div
                className={`${themeClasses.cardText} font-semibold text-sm md:text-lg leading-5 md:leading-6`}
              >
                Connect with others running online businesses.
              </div>
            </div>
            <div
              className={`flex items-center mt-5 p-5 gap-2 w-full h-28 rounded-lg ${themeClasses.cardBg}`}
            >
              <div
                className={`${themeClasses.yellow100} p-4 flex justify-center items-center rounded-lg`}
              >
                <Image
                  src={images.signin_feedback}
                  alt="feedback"
                  className="h-[30px] w-[30px] min-w-[30px] object-cover"
                />
              </div>
              <div
                className={`${themeClasses.cardText} font-semibold text-sm md:text-lg leading-5 md:leading-6`}
              >
                Get feedback on your business ideas, landing pages, and more.
              </div>
            </div>
            <div
              className={`flex items-center mt-5 p-5 gap-2 w-full h-28 rounded-lg ${themeClasses.cardBg}`}
            >
              <div
                className={`${themeClasses.blue100} p-4 flex justify-center items-center rounded-lg`}
              >
                <Image
                  src={images.signin_inbox}
                  alt="inbox"
                  className="h-[30px] w-[30px] min-w-[30px] object-cover"
                />
              </div>
              <div
                className={`${themeClasses.cardText} font-semibold text-sm md:text-lg leading-5 md:leading-6`}
              >
                Get the best new stories from founders in your inbox.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 min-h-screen flex flex-col justify-center items-center">
          <div className="flex flex-col px-5 py-10 md:px-36 md:py-28">
            <button
              type="button"
              className="absolute top-10 right-10"
              onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
              }}
            >
              {theme === 'light' ? (
                <FiMoon
                  size={20}
                  className={`w-6 h-6 ${themeClasses.cardText}`}
                />
              ) : (
                <FiSun
                  size={20}
                  className={`w-6 h-6 ${themeClasses.cardText}`}
                />
              )}
            </button>
            {/* <label
              className={`${themeClasses.text} font-bold text-lg md:text-xl leading-10`}
            >
              Choose a username
              <input
                type="text"
                name="userName"
                required
                placeholder="e.g. Hipnode123"
                className={`${themeClasses.inputBg} rounded-lg w-full pl-5 py-3 h-12 font-normal text-sm`}
              />
            </label>

            <button className="mt-5 w-4/12 text-light2 p-2 px-10 bg-button2 rounded-lg">
              Next
            </button>

            <span className={`mt-5 ${themeClasses.text} text-sm`}>
              Already have an account?{' '}
              <span className="text-primary-orange">Sign in.</span>
            </span>

            <div className={`flex flex-row items-center mt-10`}>
              <div
                className={`flex-grow h-[1px] ${themeClasses.separator}`}
              ></div>
              <div className={`mx-5 ${themeClasses.text} text-lg`}>or</div>
              <div
                className={`flex-grow h-[1px] ${themeClasses.separator}`}
              ></div>
            </div> */}

            <div className="mt-5 flex flex-col items-center justify-center">
              <div className="flex flex-col w-full">
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      key={provider.id}
                      onClick={() => handleSignIn(provider)}
                      // className={`my-2 flex justify-center items-center gap-2 w-full h-12 rounded-lg ${themeClasses.inputBg} ${themeClasses.text}`}
                      className={`my-3 flex justify-center items-center gap-1 p-4 w-full h-12 rounded-lg ${themeClasses.inputBg} ${themeClasses.text}`}
                    >
                      {provider.id === 'google' && (
                        <Image
                          src={
                            theme === 'light'
                              ? images.GoogleDark
                              : images.GoogleLight
                          }
                          alt="Google logo"
                          width={20}
                          height={20}
                        />
                      )}
                      {provider.id === 'github' && (
                        <Image
                          src={
                            theme === 'light'
                              ? images.githubMark
                              : images.githubMarkWhite
                          }
                          alt="GitHub logo"
                          width={20}
                          height={20}
                        />
                      )}
                      {/* {provider.id === 'facebook' && (
                        <Image
                          src={
                            theme === 'light'
                              ? images.FacebookDark
                              : images.FacebookLight
                          }
                          alt="Facebook logo"
                          width={20}
                          height={20}
                        />
                      )}
                      {provider.id === 'twitter' && (
                        <Image
                          src={
                            theme === 'light'
                              ? images.TwitterDark
                              : images.TwitterLight
                          }
                          alt="Twitter logo"
                          width={20}
                          height={20}
                        />
                      )} */}
                      <span className="ml-2">{`Sign in with ${provider.name}`}</span>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Signin;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);

  if (session) {
    // User is authenticated, redirect to home page
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      providers,
      csrfToken,
    },
  };

  // User is not authenticated, render sign-in page
  return {
    props: {},
  };
}

export default Signin;
