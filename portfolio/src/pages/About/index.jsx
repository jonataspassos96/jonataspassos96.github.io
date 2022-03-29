import React from 'react'
import { WrapperAbout, ContentAbout, ContainerAboutImg } from './styles'
import personalPhoto from '../../assets/images/personal-photo.jpeg'

function About() {
  return (
    <WrapperAbout>
      <ContainerAboutImg>
        <img
          src={ personalPhoto }
          alt='personal'
          width='400'
          className='p-1 rounded-lg'
        />
      </ContainerAboutImg>

      <ContentAbout>
        <h1 className='text-3xl mb-8 text-secondary text-center'>Sobre mim</h1>

        <p>
          Sou um estudante de Desenvolvimento Web, atualmente posso ser considerado um Front-end Jr, mas vou ser um futuro Full-stack. E o que realmente me encanta na tecnologia é a possibilidade que tenho de criar produtos para qualquer pessoa, em qualquer lugar do mundo, utilizando ferramentas globais.
          E claro, fora isso, tem o fato de que é realmente divertido criar produtos que solucionam problemas.
        </p>
      </ContentAbout>
    </WrapperAbout>
  )
}

export default About;