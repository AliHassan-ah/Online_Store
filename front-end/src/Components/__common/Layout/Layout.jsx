import React from 'react'
import './layout.scss'
const Layout = () => {
  return (
    <div className='container'>
        <div className='wrapper'>
            <slot></slot>
        </div>
      
    </div>
  )
}

export default Layout
