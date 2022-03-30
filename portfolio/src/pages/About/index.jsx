import React from 'react'
import { WrapperAbout, ContentAbout, ContainerAboutImg, Pai } from './styles'
import personalPhoto from '../../assets/images/personal-photo.jpeg'

function About() {
  return (
    <WrapperAbout>
      <Pai>
        <ContainerAboutImg>
          <img
            src={ personalPhoto }
            alt='personal'
            width='372'
            className='rounded-l-lg'
          />
        </ContainerAboutImg>

        <ContentAbout>
          <h1 className='text-3xl mb-8 text-center text-secondary'>Sobre mim</h1>

          <p>
            Sou um estudante de Desenvolvimento Web, atualmente posso ser considerado um Front-end Jr, mas vou ser um futuro Full-stack. E o que realmente me encanta na tecnologia é a possibilidade que tenho de criar produtos para qualquer pessoa, em qualquer lugar do mundo, utilizando ferramentas globais.
            E claro, fora isso, tem o fato de que é realmente divertido criar produtos que solucionam problemas.
          </p>
        </ContentAbout>
      </Pai>
    </WrapperAbout>
  )
}

export default About;