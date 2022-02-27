import React from 'react'
import data from '../../assets/database/specialty.js';
import { Cards, Image, Title, Description, WrapperSpecialties } from './styles.jsx';

function Specialties() {
  return (
    <div className='bg-primary'>
      <h1 className='text-6xl font-black text-center text-secondary pt-10 pb-20'>
        Conhecimentos
      </h1>
      
      <WrapperSpecialties>
        {data.map((e) => (
          <Cards>
            <div className='flex justify-start ml-12 mb-5'>
              <Image src={ e.url } alt={ e.name } validation={ e.name } />
              <Title>{ e.name }</Title>
            </div>
            <Description>{ e.text }</Description>
          </Cards>
        ))}
      </WrapperSpecialties>
    </div>
  )
}

export default Specialties;
