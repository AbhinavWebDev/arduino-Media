import React from 'react'
import Logo from '../../img/Logo_ae.svg'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css'

function LogoSearch() {
  return (
    <div className='LogoSearch'>
       <img src={Logo} alt="" />
       <div className='Search'>
        <input type='text' placeholder='#Explore'/>
        <div className='s-icon'>
          <UilSearch/>
        </div>
       </div>

    </div>
  )
}

export default LogoSearch