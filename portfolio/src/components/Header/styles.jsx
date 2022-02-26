import tw from "tailwind-styled-components";

export const WrapperHeader = tw.header`
    flex
    items-center
    justify-center
    w-full
    bg-custom-yellow
    fixed
    top-0
`

export const NavBar = tw.ul`
  text-black
    w-2/4
    ml-14
    flex
    flex-wrap
    items-center
    justify-start
`

export const NavIcons = tw.ul`
    w-2/4
    mr-14
    flex
    flex-wrap
    items-center
    justify-end
`

export const NavItems = tw.li`
    p-5
    hover:text-white duration-500
    font-black
    text-lg
`