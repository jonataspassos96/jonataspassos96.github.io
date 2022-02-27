import tw from 'tailwind-styled-components';

export const WrapperSpecialties = tw.div`
  bg-primary
  bg-cover
  w-full
  flex
  justify-center
  self-center
  border-green-600
  flex-wrap
`;

export const Cards = tw.main`
bg-primary
  max-w-sm
  rounded
  shadow-md
  text-2xl
  align-middle
  transform
  transition
  duration-500
  hover:scale-110
  border-b-8
  border-green-600
  border-t-8
  m-4
  flex
  flex-col
`;

export const Image = tw.img`
  ${props => props.validation === 'GIT' ? 'bg-tertiary rounded-full' : ''}
  w-20
  mt-5
  mr-3
`;

export const Title = tw.h3`
  px-6
  py-4
  text-secondary
  font-bold
  text-xl
  mb-2
  hover:underline
  mt-8
`;

export const Description = tw.p`
  text-tertiary
  text-base
  text-justify
  p-5
`;