import React from 'react'
import { NavItems, NavBar, WrapperHeader } from './styles'
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
        <NavItems>
          <a
            href="https://www.linkedin.com/in/jonatas-passos/"
            target="_blank"
            rel="noreferrer"
          >
            <img
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
              width="40"
              src={ iconGitHub }
              alt="icone do likedin"
            />
          </a>
        </NavItems>
      </NavBar>
    </WrapperHeader>
  )
}

export default Header