import React from 'react'
import './layout.scss'
const Layout = (props) => {
  return (
    <div className='container'>
        <div className='wrapper'>
           {props.children}
        </div>
      
    </div>
  )
}

export default Layout
