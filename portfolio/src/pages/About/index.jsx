import React from 'react'
import { Content, Paragraph, WrapperAbout } from './styles';

function About() {
  return (
    <WrapperAbout>
      <Content>
        <Paragraph>Oie! Meu nome é</Paragraph>
        <h1 className='text-5xl'>Jonatas Passos</h1>

        <Paragraph>
          Sou um estudante de Desenvolvimento Web, atualmente posso ser considerado um Front-end Jr, mas vou ser um futuro Full-stack. E o que realmente me encanta na tecnologia é a possibilidade que tenho de criar produtos para qualquer pessoa, em qualquer lugar do mundo, utilizando ferramentas globais.
          E claro, fora isso, tem o fato de que é realmente divertido criar produtos que solucionam problemas..
        </Paragraph>
      </Content>
    </WrapperAbout>
  )
}

export default About;