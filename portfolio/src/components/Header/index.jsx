import React from 'react'
import { NavItems, NavBar, NavIcons, WrapperHeader, Anaua } from './styles'
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
                className='hover:bg-tertiary rounded-lg'
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
                className='hover:bg-tertiary rounded-full'
                width="45"
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
                className='hover:bg-tertiary rounded-full'
                width="50"
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