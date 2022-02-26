import tw from "tailwind-styled-components";

export const WrapperHeader = tw.header`
    flex
    items-center
    justify-center
    w-full
    bg-neutral
    opacity-70
    fixed
    top-0
`

export const NavBar = tw.ul`
  text-white
    w-3/4
    flex
    flex-wrap
    items-center
    justify-between
`

export const NavItems = tw.li`
    p-5
    hover:text-green-900 duration-500
    font-semibold
    text-lg
    font-mono
`