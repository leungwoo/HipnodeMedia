import { signIn, getCsrfToken, getProviders } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import images from '../assets';

interface LoginPageProps {
  csrfToken: string;
  providers: Record<string, any>;
  theme: string;
  setTheme: (theme: string) => void;
}

function LoginPage({ csrfToken, providers, theme, setTheme }: LoginPageProps) {
  return (
    <div className="signInContainer">
      <div className="w-1/2 min-h-screen bg-[#444]">
        <div>
          {/* logo */}
          <div className="flex flex-row justify-center items-center mt-10">
            <Image
              src={
                theme === 'light'
                  ? images.logolightmode
                  : images.logodarkmode
              }
              alt="logo"
              className="h-[30px] w-[30px] min-w-[30px] object-cover"
            />
            <p className="text-primary-orange text-[26px] font-bold ">
              Hipnode
            </p>
            <span className="text-4xl">.</span>
          </div>
        </div>
        <div>
          <p>Join a thriving community of entrepreneurs and developers.</p>
          <span>
            <Image
              src={
                theme === 'light'
                  ? images.logolightmode
                  : images.logodarkmode
              }
              alt="logo"
              className="h-[30px] w-[30px] min-w-[30px] object-cover"
            />
            <p>Connect with other indie hackers running online businesses.</p>
          </span>
          <span>
            <Image
              src={
                theme === 'light'
                  ? images.logolightmode
                  : images.logodarkmode
              }
              alt="logo"
              className="h-[30px] w-[30px] min-w-[30px] object-cover"
            />
            <p>Connect with other indie hackers running online businesses.</p>
          </span>
          <span>
            <Image
              src={
                theme === 'light'
                  ? images.logolightmode
                  : images.logodarkmode
              }
              alt="logo"
              className="h-[30px] w-[30px] min-w-[30px] object-cover"
            />
            <p>Connect with other indie hackers running online businesses.</p>
          </span>
        </div>
      </div>
      <div className="w-1/2 min-h-screen bg-[#E5E5E5]" />
    </div>
    // <div className="relative overflow-hidden">
    //   <div className="absolute inset-0 bg-gray-50" />
    //   <div className="relative max-w-md mx-auto px-6 py-8">
    //     <div className="bg-white rounded-lg shadow-lg p-8">
    //       <div className="flex items-center justify-center mb-8">
    //         <Link href="/" className="flex flex-row gap-2.5 items-center">
    //           <div className="flex">
    //             <Image
    //               src={
    //                 theme === "light"
    //                   ? images.logolightmode
    //                   : images.logodarkmode
    //               }
    //               alt="logo"
    //               className="h-[30px] w-[30px] min-w-[30px] object-cover"
    //             />
    //           </div>
    //           <div className="hidden xl:flex flex-row justify-center items-center">
    //             <p className="text-primary-orange text-[26px] font-bold ">
    //               Hipnode
    //             </p>
    //             <span className="text-4xl">.</span>
    //           </div>
    //         </Link>
    //       </div>
    //       <form className="space-y-4">
    //         <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
    //         <input
    //           placeholder="Email (Not Setup - Please Use Github)"
    //           className="border-gray-400 border-solid border py-2 px-3 w-full"
    //         />
    //         <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full font-medium w-full">
    //           Submit
    //         </button>
    //         <hr className="my-4" />
    //         {providers &&
    //           Object.values(providers).map((provider) => (
    //             <div key={provider.name}>
    //               <button
    //                 onClick={() => signIn(provider.id)}
    //                 className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-full border-gray-400 border-solid border"
    //               >
    //                 Sign in with {provider.name}
    //               </button>
    //             </div>
    //           ))}
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}

export default LoginPage;

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken,
    },
  };
}
