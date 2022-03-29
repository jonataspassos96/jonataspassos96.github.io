import React from 'react'
import { NavItems, NavBar, NavIcons, WrapperHeader } from './styles'
import iconLikedin from '../../assets/images/icon-linkedin.png'
import iconGitHub from '../../assets/images/icon-github.png'
import iconEmail from '../../assets/images/icon-email.png'

function Header() {
  return (
    <WrapperHeader>
      <NavBar>
        <NavItems>Home</NavItems>
        <NavItems>Sobre</NavItems>
        <NavItems>Conhecimentos</NavItems>
        <NavItems>Projetos</NavItems>
        <NavItems>Contato</NavItems>
      </NavBar>

      <NavIcons>
        <NavItems>
            <a
              href="https://www.linkedin.com/in/jonatas-passos/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className='hover:opacity-40'
                width="30"
                src={ iconLikedin }
                alt="icone do lin kedin"
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
                className='hover:opacity-40'
                width="34"
                src={ iconGitHub }
                alt="icone do likedin"
              />
            </a>
          </NavItems>

          <NavItems>
            <a
              href="https://mail.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className='hover:opacity-40'
                width="38"
                src={ iconEmail }
                alt="icone do likedin"
              />
            </a>
          </NavItems>
      </NavIcons>
    </WrapperHeader>
  )
}

export default Header