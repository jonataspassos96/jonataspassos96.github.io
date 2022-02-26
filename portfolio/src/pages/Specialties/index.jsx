import React from 'react'
import data from '../../assets/database/specialty.js';
import { Cards, Image, Title, Description, WrapperSpecialties } from './styles.jsx';

function Specialties() {
  return (
    <WrapperSpecialties>
      {data.map((e) => (
        <Cards>
          <Image src={ e.url } alt={ e.name } validation={ e.name } />
          <Title>{ e.name }</Title>
          <Description>{ e.text }</Description>
        </Cards>
      ))}
    </WrapperSpecialties>
  )
}

export default Specialties;
