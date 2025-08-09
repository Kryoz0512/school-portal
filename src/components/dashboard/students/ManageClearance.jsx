import React from 'react'
import UnderMaintenance from '../../UnderMaintenance'


const isMaintenance = true
export default function ManageClearance() {
  if (isMaintenance) {
    return <UnderMaintenance />
  }
  return (
    <div>Clearance Ni Mel</div>
  )
}
