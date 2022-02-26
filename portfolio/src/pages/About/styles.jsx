import tw from 'tailwind-styled-components';

export const WrapperAbout = tw.div`
  bg-about-texture
  bg-cover
  w-full
  h-screen
  flex
  justify-around
  items-center
`;

export const ContainerAbout = tw.main`
  bg-primary
  text-tertiary
  text-xl
  font-black
  text-justify
  leading-8
  w-1/2
  p-5
  rounded-lg
  flex
  flex-col
  flex-wrap
  justify-start
`;

export const ContainerAboutImg = tw.aside`
  bg-primary
  rounded-lg
`;