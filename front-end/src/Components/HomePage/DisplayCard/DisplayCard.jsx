import React from 'react'
import CardImage from '../../../assets/products/Toys.jpg'
import './DisplayCard.scss'
import ProductsData from './productData'
const DisplayCard = () => {
  return (
    <div className='cardContainer'>
    {
      ProductsData.map((product,index)=>(
        <div className='cardWrapper' key={index}> 
      <div className='cardTitle'>
        {product?.title}
      </div>
      <div className='cardImage'>
        <img src={product?.coverImage} alt="Product Image" />

      </div>
      <div className='description'>
        {product?.status}

      </div>
    </div>
        
      ))
    }
    </div>
    
  )
}

export default DisplayCard;
