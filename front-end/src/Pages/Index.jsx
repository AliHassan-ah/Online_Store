import React from 'react'
import HomePage from '../Components/HomePage/HomePage'
import Layout from '../Components/__common/Layout/Layout'

const index = () => {
  return (
    <div className='HomePage' style={{backgroundColor:"#E3E6E6"}}>
      <Layout>
      <HomePage/>
      </Layout>
    </div>
  )
}

export default index
