import React from 'react'
import { ContentHome, WrapperHome } from './styles';

function Home() {
  return (
    <WrapperHome>
      <ContentHome>
        <h1 className='text-6xl font-black text-custom-yellow'>
          Jonatas Passos
        </h1>

        <p>
          Seja bem vindo ao meu portfolio
        </p>
      </ContentHome>
    </WrapperHome>
  )
}

export default Home;