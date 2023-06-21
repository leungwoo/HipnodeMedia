'use client';

import React, { FC, ReactNode, MouseEvent } from 'react';

interface Props {
  name: string;
  color?: string;
  backgroundColor?: string;
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

const CustomButton: FC<Props> = ({ name, color, backgroundColor, handleClick, children }) => {
  return (
    <button
      style={{ color, backgroundColor }}
      onClick={handleClick}
    >
      {name}
      {children}
    </button>
  );
};

export default CustomButton;
