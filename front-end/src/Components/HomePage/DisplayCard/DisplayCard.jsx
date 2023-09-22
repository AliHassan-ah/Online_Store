import React from 'react'
import CardImage from '../../../assets/Toys.jpg'
import './DisplayCard.scss'
const DisplayCard = () => {
  return (
    <div className='card'> 
      <div className='cardTitle'>
        Title
      </div>
      <div className='cardImage'>
        <img src={CardImage} alt="" />
      </div>
      <div className='description'>
        shop now
      </div>
    </div>
  )
}

export default DisplayCard
