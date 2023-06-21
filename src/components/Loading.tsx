'use client';
import { Oval } from 'react-loader-spinner';

function Loading() {
  return (
    <div className="grow w-full h-full flex items-center justify-center min-h-50vh mt-[30px]">
      <Oval
        height={80}
        width={80}
        color="#ff6934"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ff6934"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

export default Loading;
