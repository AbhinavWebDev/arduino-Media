import React from 'react'
import { InfoCard } from '../InfoCard/InfoCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import '../ProfileSide/ProfileSide.css'
import TrendCard from '../TrendCard/TrendCard'

export const ProfileLeft = () => {
  return (
    <div className='ProfileSide'>
        <LogoSearch/>
        <InfoCard/>
        <TrendCard/>
    </div>
  )
}
