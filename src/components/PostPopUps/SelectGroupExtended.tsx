import React, { useState } from 'react';
import Image from 'next/image';

import images from '../../assets';

function SelectGroupExtended() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      {showPopup && (
      <div className="absolute w-full lg:max-w-sm">
        <div className="bg-[#FFFFFF] w-[690px] h-[288px] relative z-2 grid grid-flow-col grid-cols-3 gap-4 ml-[10px]">
          <div className="grid grid-rows-4">
            <div>
              <Image
                src={images.backArrow} alt="DownArrow" width={25}
                className="align-middle justify-center absolute top-2 left-6 pt-[10px]"
                onClick={handleClosePopup}
              />
            </div>

            <div className="width-[190px] height-[62px] bg-[#FDF4EA]">

              <div className="text-center relative">
                <Image
                  src={images.growing} alt="DownArrow" width={25}
                  className="align-middle justify-center absolute top-0 left-6 pt-[10px]"
                />
                Fastest Growing
              </div>
              <div className="text-[#97989D] text-[10px] font-normal leading-4 text-left pl-[25px]">
                List updated daily at midnight PST.
              </div>
            </div>

            <div className="text-center space-y-reverse relative">
              <div className="relative pt-[10px] pl-[30px] text-[14px]">
                <Image
                  src={images.Ellipse36} alt="DownArrow" width={30}
                  className="align-middle justify-center absolute top-6 left-3"
                />
                Looking for a partner up
              </div>
              <div className="text-[#97989D] text-[10px] font-normal leading-4 top-10 left-[50px] absolute">
                Share how to succeed and w..
              </div>
            </div>

            <div className="text-center space-y-reverse relative">
              <div className="relative pt-[10px] pl-[10px] text-[14px]">
                <Image
                  src={images.FastestGrowing2} alt="DownArrow" width={30}
                  className="align-middle justify-center absolute top-6 left-3"
                />
                Somebody Make This
              </div>
              <div className="text-[#97989D] text-[10px] font-normal leading-4 top-10 left-[50px] absolute">
                IHers with product needs ca...
              </div>
            </div>

            <div className="text-center space-y-reverse relative">
              <div className="relative pt-[10px] pl-[25px] text-[14px]">
                <Image
                  src={images.FastestGrowing3} alt="DownArrow" width={30}
                  className="align-middle justify-center absolute top-6 left-3"
                />
                Paid Virtual Coworking
              </div>
              <div className="text-[#97989D] text-[10px] font-normal leading-4 top-10 left-[50px] absolute">
                Tips about how to start, run...
              </div>
            </div>

          </div>

          <div className="grid grid-flow-row-dense gap-x-0">
            <div className="row-span-1" />
            <div className="text-center space-y-reverse row-span-{2} relative">
              <div className="relative pt-[10px] pl-[5px] text-[14px]">
                <Image
                  src={images.landingPage} alt="DownArrow" width={30}
                  className="align-middle justify-center absolute top-6 left-3"
                />
                Landing Page UIHUT
              </div>
              <div className="text-[#97989D] text-[10px] font-normal leading-4 top-10 left-[50px] absolute">
                Share and receive tips for im...
              </div>
            </div>

            <div className="text-center space-y-reverse relative">
              <div className="relative pt-[10px] pl-[15px] text-[14px]">
                <Image
                  src={images.webResources} alt="DownArrow" width={30}
                  className="align-middle justify-center absolute top-6 left-3"
                />
                Web Design Resources
              </div>
              <div className="text-[#97989D] text-[10px] font-normal leading-4 top-10 left-[50px] absolute">
                Figma web design resources...
              </div>
            </div>

            <div className="text-center space-y-reverse relative">
              <div className="relative pt-[10px] pl-[20px] text-[14px]">
                <Image
                  src={images.freeIllustration} alt="DownArrow" width={30}
                  className="align-middle justify-center absolute top-6 left-3"
                />
                Free Illustration Design
              </div>
              <div className="text-[#97989D] text-[10px] font-normal leading-4 top-10 left-[50px] absolute">
                Free illustration file for all...
              </div>
            </div>

            <div className="text-center space-y-reverse relative">
              <div className="relative pt-[10px] pl-[10px] text-[14px]">
                <Image
                  src={images.UserInterfaceDesign} alt="DownArrow" width={30}
                  className="align-middle justify-center absolute top-6 left-3"
                />
                User Interface Design
              </div>
              <div className="text-[#97989D] text-[10px] font-normal leading-4 top-10 left-[50px] absolute">
                Best User Interface Design is...
              </div>
            </div>

          </div>

          <div className="grid grid-flow-row-dense gap-x-0">
            <div className="row-span-1" />

            <div className="text-center space-y-reverse row-span-{2} relative">
              <div className="relative pt-[10px] pl-[5px] text-[14px]">
                <Image
                  src={images.IdeasAndValidation} alt="DownArrow" width={30}
                  className="align-middle justify-center absolute top-6 left-3"
                />
                Ideas and Validation
              </div>
              <div className="text-[#97989D] text-[10px] font-normal leading-4 top-10 left-[50px] absolute">
                Get help with defining, valida...
              </div>
            </div>

            <div className="text-center space-y-reverse row-span-{2} relative">
              <div className="relative pt-[10px] pl-[25px] text-[14px]">
                <Image
                  src={images.DesignConcept} alt="DownArrow" width={30}
                  className="align-middle justify-center absolute top-6 left-3"
                />
                Design Concept sharing
              </div>
              <div className="text-[#97989D] text-[10px] font-normal leading-4 top-10 left-[50px] absolute">
                Idea sharing for design in t...
              </div>
            </div>

            <div className="text-center space-y-reverse row-span-{2} relative">
              <div className="relative pt-[10px] pl-[30px] text-[14px]">
                <Image
                  src={images.BrowserExtension} alt="DownArrow" width={30}
                  className="align-middle justify-center absolute top-6 left-3"
                />
                Browser Extension Ma...
              </div>
              <div className="text-[#97989D] text-[10px] font-normal leading-4 top-10 left-[50px] absolute">
                All browser addon things. hi...
              </div>
            </div>

            <div className="text-center space-y-reverse row-span-{2} relative">
              <div className="relative pt-[10px] pl-[10px] text-[14px]">
                <Image
                  src={images.Producthunt} alt="DownArrow" width={30}
                  className="align-middle justify-center absolute top-6 left-3"
                />
                Producthunt Agency
              </div>
              <div className="text-[#97989D] text-[10px] font-normal leading-4 top-10 left-[50px] absolute">
                Share your story with produc...
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default SelectGroupExtended;
