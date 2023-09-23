import React from 'react'
import './HomePage.scss'
import DisplayCard from './DisplayCard/DisplayCard';
const HomePage = () => {
  const options=['Hello','HI'];
  const placeHolder ='TRee';
  return (
    <div className='HomePageContainer'>
      <h1>HomePage</h1>
      <DisplayCard/>
    </div>
  )
}

export default HomePage
