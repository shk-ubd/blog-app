import React from 'react'
import logoBlack from "/blogapp.png"
function Logo({width = '100px'}) {
  return (
    <div className='border-white  rounded-sm'><img src={logoBlack} width={width} alt="" /></div>
  )
}

export default Logo