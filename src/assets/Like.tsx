import * as React from 'react';
import { SVGProps } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement> & { pathClassName?: string }
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.285.286C.582 1.42-.738 5.25.39 8.6 2.21 13.972 10.001 18 10.001 18s7.851-4.09 9.61-9.4c1.128-3.351-.2-7.18-3.904-8.314-1.945-.593-4.174-.213-5.706.912C8.382.041 6.232-.31 4.285.286Zm9.472 2.987a.75.75 0 0 0-.371 1.454c1.382.353 2.202 1.282 2.296 2.207a.75.75 0 1 0 1.493-.153c-.177-1.72-1.61-3.045-3.418-3.508Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
