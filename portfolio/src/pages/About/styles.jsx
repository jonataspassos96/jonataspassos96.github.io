import tw from 'tailwind-styled-components';


export const WrapperAbout = tw.div`
  bg-zinc-200
  h-screen
  flex
  justify-center
  items-center
`;

export const Pai = tw.div`
  shadow-lg
  shadow-violet-800/70
  flex
  justify-center
  items-center
  w-4/5

  rounded-lg
`;

export const ContentAbout = tw.main`
  bg-white
  text-stone-800
  text-lg
  font-black
  text-justify
  leading-8
  w-3/4
  p-6
  pt-12
  rounded-r-lg
  flex
  flex-col
  flex-wrap
  justify-start
`;

export const ContainerAboutImg = tw.aside`
  rounded-l-lg
`;