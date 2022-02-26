import tw from "tailwind-styled-components";

export const WrapperHeader = tw.header`
    flex
    items-center
    justify-center
    w-full
    bg-green-600
    opacity-70
    fixed
    top-0
`

export const NavBar = tw.ul`
  text-black
    w-2/4
    flex
    flex-wrap
    items-center
    justify-between
`

export const NavIcons = tw.ul`
  text-black
    w-1/4
    flex
    flex-wrap
    items-center
    justify-end
`

export const NavItems = tw.li`
    p-5
    hover:text-white duration-500
    font-semibold
    text-lg
    font-mono
`