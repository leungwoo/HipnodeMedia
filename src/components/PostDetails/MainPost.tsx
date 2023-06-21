import Image from 'next/image';
import React from 'react';

import images from '../../assets/index';

function MainPost() {
  return (
    <div className="flex flex-col md:w-[785px] md:h-[797px] w-[335px] h-[645px] items-center rounded-2xl bg-white dark:bg-dark3">
      <div>
        <Image src={images.Facebook} alt="coverImage" className="object-fit md:w-[785px] md:h-[273px] h-[117px] w-[335px]" />
      </div>
      <div className="mt-4 md:h-[390px] md:w-[725px] h-[418px] w-[254px]">
        <p className="md:text-[26px] text-[16px] md:ml-[77px] md:mr-[30px]">OnePay - Online Payment Processing Web App</p>
        <p className="md:max-h-[288px] h-[324px] mt-[64px] md:ml-[77px] md:mr-[30px] md:text-base text-xs font-normal overflow-auto">
          OnePay is a modern, easy-to-use Online Payment Processing Web App UI Kit template that will help you build a web app for your payment/marketplace platform. OnePay, a multi-payment platform to facilitate payments online.

          In this app, you can submit a request for a certain product or service online and one of our agents will contact you back with an offer.

          You can also pay merchants directly through the app. After successfully any transaction you can see details about your payment. History details include: -Transaction ID.

          What will you get? - 200+ Beautiful Screens design - Figma, XD & Sketch Files 100% editable and scalable. Thank You For Your Time.
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full px-[30px] gap-2 mt-[30px] md:mt-[40px]">
        <Image src={images.Avatar2} alt="user" />
        <input
          type="text"
          className="flex rounded-[22.5px] border border-slateGrayLight text-slateGray w-full bg-light3 dark:bg-dark4 p-2"
          placeholder="Say something nice to follownishant..."
        />
      </div>
    </div>

  );
}

export default MainPost;
