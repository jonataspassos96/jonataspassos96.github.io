import React from 'react'
import { ContentHome, ContentImage, WrapperHome } from './styles';
import imageHome from '../../assets/images/image-home.svg';

function Home() {
  return (
    <WrapperHome>
      <ContentHome>
        <h1 className='text-6xl font-black'>
          Jonatas Passos
        </h1>

        <p className='text-zinc-400 tracking-wide leading-loose animate-pulse'>
        &lt; Seja bem vindo ao meu portfolio /&gt;
        </p>
      </ContentHome>

      <ContentImage>
        <img
          src={ imageHome }
          alt='Imagem do home'
        />
      </ContentImage>
    </WrapperHome>
  )
}

export default Home;