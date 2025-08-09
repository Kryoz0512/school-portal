import React from 'react'
import UnderMaintenance from '../../UnderMaintenance'

const isMaintenance = true
export default function Subject() {
  if (isMaintenance)  {
    return(<UnderMaintenance/>)
  }
  return (
    <div>Subject ni Mel</div>
  )
}
