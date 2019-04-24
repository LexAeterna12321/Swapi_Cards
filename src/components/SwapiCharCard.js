import React from 'react'
import Avatar from './Avatar';
import Description from './Description';
const SwapiCharCard = ({char}) => {
    console.log(char);
    const{name} = char;
  return (
    <div className='cards__card'>
      <Avatar name={name}/>
      <Description {...char}/>
    </div>
  )
}

export default SwapiCharCard
