import React from 'react'
import { NavItems, NavBar, NavIcons, WrapperHeader } from './styles'
import iconLikedin from '../../assets/images/icon-linkedin.png'
import iconGitHub from '../../assets/images/icon-github.png'

function Header() {
  return (
    <WrapperHeader>
      <NavBar>
        <NavItems>Home</NavItems>
        <NavItems>Sobre</NavItems>
        <NavItems>Conhecimentos</NavItems>
        <NavItems>Projetos</NavItems>
        <NavItems>Contatos</NavItems>
      </NavBar>

      <NavIcons>
        <NavItems>
            <a
              href="https://www.linkedin.com/in/jonatas-passos/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className='hover:bg-white rounded-lg'
                width="40"
                src={ iconLikedin }
                alt="icone do likedin"
              />
            </a>
          </NavItems>
          <NavItems>
            <a
              href="https://github.com/jonataspassos96"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className='hover:bg-white rounded-full'
                width="40"
                src={ iconGitHub }
                alt="icone do likedin"
              />
            </a>
          </NavItems>
      </NavIcons>
    </WrapperHeader>
  )
}

export default Header