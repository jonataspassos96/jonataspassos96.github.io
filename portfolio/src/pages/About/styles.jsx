import tw from 'tailwind-styled-components';

export const WrapperAbout = tw.div`
  bg-gradient-to-r from-tertiary via-neutral-300 to-tertiary
  bg-cover
  w-full
  h-screen
  flex
  justify-center
  items-center
`;

export const ContentAbout = tw.main`
  bg-primary
  text-tertiary
  text-lg
  font-black
  text-justify
  leading-8
  w-1/2
  p-10
  rounded-lg
  flex
  flex-col
  flex-wrap
  justify-start
`;

export const ContainerAboutImg = tw.aside`
  shadow-xl
  rounded-lg
`;