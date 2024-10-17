import { memo } from 'react'

import { Icon, type IconProps } from '@chakra-ui/react'

type LogoProps = IconProps

export const Logo = memo(
  ({ fill = 'white', width = 12, height = 12, ...props }: LogoProps) => {
    return (
      <Icon
        viewBox="0 0 1700 1700"
        fill={fill}
        width={width}
        height={height}
        {...props}
      >
        <path
          d="M1329.85,777.72a7.76,7.76,0,0,0-5.37-2.41c-1.55-.07-3.1-.13-4.65-.13h-176.9c-.93,0-1.87.05-2.79,0-2.14-.1-3.14.65-2.81,3,.58,4.14.8,8.34,1.47,12.47a61.76,61.76,0,0,0,11.87,28c5.43,7.14,12.47,11.55,21.43,12.59a66.62,66.62,0,0,0,8.36.3c27.62-.18,55.24-.54,82.85-.59,37.55-.06,75.11.1,112.66.14,1.8,0,3.65.31,5.79-.53a8.14,8.14,0,0,0-.5-.88Q1355.55,803.69,1329.85,777.72Z"
          transform="translate(-149.94 -149.68)"
        />

        <path
          d="M1109.39,1185.2q0-82.65,0-165.3c0-1.55,0-3.1,0-4.65,0-1.73-.71-2.47-2.53-2.42-16.4.43-31.58,4.48-44.55,15a32.54,32.54,0,0,0-11.69,18.54,52.07,52.07,0,0,0-1.15,11.56q.3,48.18.5,96.37.15,49.35.13,98.7,0,73.34-.11,146.67,0,54,0,108c0,1.5-.32,3,.7,5,1.06-.82,1.81-1.34,2.5-1.94,16.07-13.92,32.09-27.9,48.63-41.26a20.54,20.54,0,0,0,7.92-17.07c-.11-14.58-.13-29.17-.14-43.76Q1109.47,1296.94,1109.39,1185.2Z"
          transform="translate(-149.94 -149.68)"
        />

        <path
          d="M326.43,657c-9.08-4.33-16.63-3.44-21.47-1.73-9.31,3.3-14.1,11.08-16.93,17l-2.47,5.17,51.33,24.48,2.47-5.17c1.92-4,5.75-13.05,3.46-21.88C341.21,668.49,335.76,661.4,326.43,657Z"
          transform="translate(-149.94 -149.68)"
        />

        <path
          d="M825.79,927c-11.48.61-23,.53-34.45.52q-81.74,0-163.45-.11c-1.68,0-3.38-.3-5.66.51,1.07,1.16,1.76,2,2.51,2.73C640.81,946.86,657,963,672.92,979.29a15.39,15.39,0,0,0,11.94,4.94q83.58-.18,167.18-.07c4.34,0,8.69,0,13,.12,2.37.09,2.93-1,2.86-3.06-.5-14.28-4.2-27.51-12.4-39.38C848.31,931.4,838.52,926.34,825.79,927Z"
          transform="translate(-149.94 -149.68)"
        />
        <path
          d="M1686.41,1315.68c9.25,4,16.75,2.78,21.53.88,9.17-3.67,13.65-11.63,16.24-17.66l2.26-5.27-52.26-22.43-2.26,5.26c-1.76,4.11-5.23,13.27-2.6,22C1671.19,1304.74,1676.91,1311.6,1686.41,1315.68Z"
          transform="translate(-149.94 -149.68)"
        />

        <path
          d="M999.94,149.68c-469.45,0-850,380.56-850,850s380.55,850,850,850,850-380.56,850-850S1469.38,149.68,999.94,149.68ZM846.05,212.47l59.43,51.34L896,204.48l21.25-3.4,14.72,92-18.48,3L854,244.45l9.54,59.6-21.25,3.4-14.72-92ZM707.26,253.21l69.2,72.45-20.71,8.43-13.11-13.67L710,333.71l0,19-20.71,8.44L689,260.64ZM470,398.3l12.83,20.37,9.31-8.25-12.83-20.37,13.38-11.86,12.83,20.37,10.56-9.36,8.42,13.08L514,411.64l7,11,10.66-9.45,8.51,13.18-10.67,9.45,13.92,22-13.39,11.86-13.91-22-9.31,8.25,13.92,22-13.39,11.86-13.91-22-10.56,9.36-8.41-13.27,10.46-9.27-7-11-10.46,9.27L459,439.8l10.45-9.27-12.82-20.37ZM372.27,501l96.18,28-13.69,17.67-18.2-5.26L415,569.32l9.55,16.41-13.69,17.68-50.66-86.8ZM272.6,662.39c5.29-11.1,12.52-22,27.42-27.64,10.74-4,22.8-4,35.91,2.27s20.66,15.43,24.29,25.67c6.2,17.2.16,32.12-3.21,39.19l-13,27.24L259.9,689ZM228.75,780.27l90,24.25-5.6,20.78-90-24.25ZM199.23,956.08l61.41-18.59L203.14,909l1.92-23.11L294.66,933l-1.2,14.48-96.15,31.69Zm23.66,241.16,80.54-59.57,5.78,21.6L294,1170.56l9.1,34,18.85,2.33,5.77,21.6L228,1216.27Zm81.66,202.18,29.27-72.88-53,28.23-10.11-19L352.93,1292l8.8,16.52-29.51,73,53.28-28.36,10.11,19-82.26,43.79Zm83.42,118,46.24-88.86,14.66,16.87-8.7,16.82,23.09,26.58,18-6.17,14.67,16.88-95,32.75ZM573.43,1624a48.63,48.63,0,0,1-32.76,19.18c-11.38,1.37-24.25-1.54-35.83-10.31-4.9-3.72-9.82-9-14.7-17.62l15-19.83c.75,6.88,3.47,15.08,11.38,21.07,6.24,4.72,12.77,6.52,19.54,5.68a29.83,29.83,0,0,0,20-11.84c5.83-7.68,6.84-15.5,5.95-21.26a28.29,28.29,0,0,0-11.32-18.39c-4.45-3.37-11.39-6.7-22.86-5.22l14.93-19.71a43.27,43.27,0,0,1,19.41,8.39c13.7,10.38,19.4,22.06,21,32.91A48.77,48.77,0,0,1,573.43,1624Zm69.73,93.71L624,1707.84,666.68,1625l19.13,9.85Zm127.21,50.42-20.45-6.69,23.35-71.31-27.48-9,5.65-17.26,47.93,15.7ZM961,1754.92c-1.73,15.13-8.66,26.57-17.33,33.6-12.73,10.5-26.94,10.57-37.91,9.32-7.64-.87-17.21-3.23-25.17-9.9a51.62,51.62,0,0,1-13.11-18.23L888,1761.5a28.32,28.32,0,0,0,7,10.93,23.36,23.36,0,0,0,13.66,6c8.47,1,15-1.1,20-5.31,5.75-4.83,9.43-12.43,10.41-21,1.21-10.55-1.9-17.8-5.35-22.13-4.78-6.17-10.84-8.55-17.92-9.36-9.16-1-14.38,1.6-16.67,3.17a21.68,21.68,0,0,0-7.92,10.21l22.36,2.54-2,17.22-46-5.24.11-1c1.28-11.25,7.26-27.86,18.75-37.38s23.51-10.12,34.48-8.87,22.84,4.43,32.4,16.77C956.19,1724.27,963.1,1736.45,961,1754.92Zm14.79-767.58v569.34a11.48,11.48,0,0,1-3.93-3.38q-39.93-43-79.85-86c-1.59-1.7-3.16-3.43-4.85-5-7.13-6.7-10-15-9.94-24.66q.27-45.4.21-90.8,0-163.9,0-327.82a71,71,0,0,0-.34-7.44c-.39-3.61-1.31-4.64-4.81-5.18a48.35,48.35,0,0,0-7.42-.5q-72.4,0-144.82,0c-13.5,0-27,0-40.51.15a25.45,25.45,0,0,1-19.17-7.95Q618.51,956,576.6,913.93c-2.5-2.52-4.85-5.18-7.53-8,1.91-1.07,3.62-.66,5.21-.66q91,.07,182.07.2,60.76.08,121.53.19,19.56,0,39.11.19c33,.26,58,24.76,58.78,57.8C976,971.51,975.79,979.43,975.79,987.34ZM934.32,850.49a67.13,67.13,0,0,1-22,3.11c-14.9-.14-29.8-.43-44.69-.46q-49.36-.1-98.72,0-93.14,0-186.28.1c-3.64,0-7.48,1-11.4-2.11,2.43-2.41,4.58-4.6,6.78-6.73,28.57-27.62,56.93-55.46,84.65-83.93,5.11-5.25,11-7.52,18.27-7.49q90.81.27,181.61.26a43.66,43.66,0,0,0,5.12-.11c5-.56,7.23-2.76,7.43-7.84.23-5.73.11-11.48.11-17.23q0-32.82-.07-65.66c0-34.15.07-68.3-.17-102.44a29.53,29.53,0,0,1,9.35-22.4q40.85-40.48,81.44-81.22c2.93-2.92,6-5.66,9.5-8.87a16.18,16.18,0,0,1,.54,6q0,109.43,0,218.86,0,47,.28,94.07c0,8.37.38,16.75.33,25.13C976.15,818.37,959,842.31,934.32,850.49Zm834.3-78.8L1690.5,834.4l-6.63-21.35,14.75-11.89-10.44-33.63-18.92-1.59-6.63-21.35,100.15,8.28Zm-99-215,9.44,16.17-26.37,74,51.89-30.31,10.85,18.58-80.48,47L1625.48,666l26.61-74.13L1600,622.31l-10.85-18.58Zm-268-197.66a48.61,48.61,0,0,1,32-20.45c11.32-1.82,24.29.58,36.21,8.89,5,3.52,10.17,8.63,15.39,17l-14.23,20.4c-1-6.84-4.07-14.93-12.21-20.6-6.41-4.48-13-6-19.74-4.91A29.88,29.88,0,0,0,1419.43,372c-5.51,7.91-6.22,15.77-5.1,21.49a28.33,28.33,0,0,0,12,17.93c4.59,3.19,11.65,6.25,23.05,4.31L1435.27,436a43.35,43.35,0,0,1-19.73-7.62c-14.1-9.83-20.25-21.28-22.28-32.06A48.82,48.82,0,0,1,1401.56,359.05Zm-73.35-90.87,19.51,9.09-39.35,84.48-19.5-9.08Zm-129.15-45.37,20.69,5.88-20.5,72.18,27.82,7.9-5,17.48-48.52-13.79Zm-178.91,57.12c-5-6-12.4-17.88-11-36.41,1.13-15.19,7.61-26.9,16-34.26,12.31-11,26.51-11.62,37.52-10.8,7.66.57,17.32,2.55,25.54,8.91a51.58,51.58,0,0,1,13.81,17.7l-20.15,9a28.16,28.16,0,0,0-7.47-10.65,23.38,23.38,0,0,0-13.88-5.51c-8.5-.64-15,1.68-19.79,6.09-5.56,5.05-8.94,12.78-9.58,21.42-.79,10.59,2.6,17.71,6.21,21.9,5,6,11.17,8.12,18.28,8.65,9.19.68,14.31-2.16,16.53-3.81a21.78,21.78,0,0,0,7.51-10.51L1057.23,260l1.28-17.28,46.13,3.43-.08,1c-.84,11.28-6.15,28.12-17.26,38.08s-23.1,11-34.11,10.22S1030.19,291.88,1020.15,279.93ZM1122.71,1792.3l-57.37-53.64,7.15,59.66-21.36,2.56L1040,1708.34l18.59-2.23L1116,1760l-7.18-59.93,21.36-2.56,11.09,92.53Zm158.8-41.91-18.53,6.7L1196.72,1682l21-7.61,12.55,14.18,33.12-12,.71-19,21-7.61Zm151.2-841.89a20,20,0,0,1-2.25,2.35c-27.94,27.82-56.17,55.35-83.58,83.7a35.7,35.7,0,0,1-27.07,11.29c-29.65-.2-59.29-.23-88.94-.25q-46.11,0-92.21.08c-9.24,0-10.17.92-10.17,10q0,197.68,0,395.37c0,15.83.33,31.66.78,47.48.27,9.8-2.73,17.72-10.54,24.09-27.66,22.58-54.51,46.12-81.63,69.33a26.33,26.33,0,0,1-5.32,4.14c-1.93-2.38-2-4.84-2-7.34q.12-87.32.2-174.63,0-203.73-.11-407.48c0-15,3.82-28.88,13.62-40.62,10.86-13,24.93-19.7,41.85-20,14.74-.27,29.49-.22,44.24-.24q81.26-.13,162.52-.19,66.83,0,133.65.19a52.9,52.9,0,0,1,6,.37C1433.36,906.35,1433.5,907.41,1432.71,908.5Zm-2-55.28c-1.08.06-2.17,0-3.25,0q-52.62,0-105.24,0-64,0-128.05-.09c-29.33,0-58.66.16-88,.3-7.75,0-15.53.74-23.24-.35-20.87-2.94-36.65-13.57-47.17-31.83-4.37-7.59-5.67-16-5.68-24.66q-.08-70.32-.12-140.62,0-100.11,0-200.23v-6.51a70,70,0,0,1,10.55,9q39.94,39.75,79.82,79.54a26.89,26.89,0,0,1,8.33,20q-.22,90.33-.27,180.66c0,2.33,0,4.66.11,7,.35,5.08,2.44,7.23,7.51,7.75,1.69.17,3.41.1,5.11.1q91.74-.11,183.46-.19a52,52,0,0,1,7.9.38,19.32,19.32,0,0,1,10.87,5.85l87.33,87.83a12,12,0,0,1,2.13,2.45C1433.88,851.63,1433,853.07,1430.66,853.22Zm75.15,768.21-12-20.86-9.62,7.88,12,20.86-13.84,11.32-12-20.85-10.92,8.93-7.9-13.39,10.92-8.94-6.52-11.28-11,9-8-13.51,11-9-13-22.55,13.84-11.33,13,22.55,9.62-7.88-13-22.54,13.84-11.33,13,22.55,10.92-8.94,7.88,13.59-10.82,8.85,6.52,11.28,10.82-8.85,7.89,13.39-10.81,8.85,12,20.86ZM1533,532.58l8-17.15-24.12-25.66-17.71,6.87-15.31-16.29,93.64-36.45,13.5,14.36-42.73,90.61Zm113.74,940.65-97.2-24.24,13-18.19,18.39,4.54,20.45-28.66-10.19-16,13-18.19,54,84.73ZM1740,1308.12c-4.85,11.3-11.64,22.52-26.31,28.7-10.57,4.43-22.62,4.88-36-.85s-21.26-14.6-25.29-24.69c-6.87-16.94-1.43-32.09,1.65-39.28l11.91-27.74,85.64,36.76Zm39.15-119.56-90.88-20.67,4.77-21,90.88,20.66Zm20.51-129.64-1,23.17-91.38-43.59.64-14.52,94.84-35.42-1,23.17-60.64,21Z"
          transform="translate(-149.94 -149.68)"
        />

        <path
          d="M955.24,662.92q0-79.39.14-158.79v-5.72a14.49,14.49,0,0,0-4.49,3.7c-15.3,15.21-30.44,30.58-45.93,45.6-5.74,5.57-8.47,11.69-8.44,19.75.2,55.72.15,111.45.17,167.17,0,2.64,0,5.28-.08,7.92-.08,1.89.81,2.5,2.53,2.32,2.93-.3,5.87-.54,8.79-.94,12-1.65,23.19-5.39,33-12.76,10.38-7.79,15.25-18.23,14.83-31C955.37,687.75,955.23,675.34,955.24,662.92Z"
          transform="translate(-149.94 -149.68)"
        />
      </Icon>
    )
  },
)

Logo.displayName = 'Logo'
