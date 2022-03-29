import tw from "tailwind-styled-components";

export const WrapperHome = tw.main`
  bg-violet-800
  bg-gradient-to-t 
  from-violet-300
  w-full
  h-screen
  flex
  flex-col
  justify-evenly
  items-center
`;

export const ContentHome = tw.section`
  text-tertiary
  text-xl
  text-center
  leading-8
  font-semibold
  mt-16
`;

export const ContentImage = tw.section`
  w-2/6
`;
