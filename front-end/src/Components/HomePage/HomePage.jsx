import React from 'react'
import './HomePage.scss'
import DropDown from '../__common/DropDown/DropDown'
const HomePage = () => {
  const options=['Hello','HI'];
  const placeHolder ='TRee';
  return (
    <div>
      <h1>HomePage</h1>
      <DropDown options={options} placeHolder={placeHolder}/>
    </div>
  )
}

export default HomePage
