import React from 'react'
import { Content, WrapperAbout } from './styles';

function About() {
  return (
    <WrapperAbout>
      <Content>
        <p>Oie! Meu nome é</p>
        <h1 className='text-6xl font-black text-green-900'>Jonatas Passos</h1>

        <p className='my-16'>
          Sou um estudante de Desenvolvimento Web, atualmente posso ser considerado um Front-end Jr, mas vou ser um futuro Full-stack. E o que realmente me encanta na tecnologia é a possibilidade que tenho de criar produtos para qualquer pessoa, em qualquer lugar do mundo, utilizando ferramentas globais.
          E claro, fora isso, tem o fato de que é realmente divertido criar produtos que solucionam problemas..
        </p>
      </Content>
    </WrapperAbout>
  )
}

export default About;