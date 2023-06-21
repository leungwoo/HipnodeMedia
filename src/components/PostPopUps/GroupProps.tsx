import React from 'react';

interface groupComponent {
    title: 'string';
    subtitle: 'string';
}

function GroupProps({ title, subtitle }: groupComponent) {
  return (
    <div className="absolute w-full lg:max-w-sm">
      <label className="bg-[#FFFFFF] w-[690px] h-[288px] relative z-2 grid grid-flow-col gap-4 ml-[10px]">
        {title}
        {subtitle}
      </label>
    </div>

  );
}
export default GroupProps;
