import React from 'react'
import { Rocket, CircleDashed, Hand } from 'lucide-react';


export default function UnderMaintenance() {
 return (
  <div className="flex flex-1 justify-center items-center">
   <div className='flex flex-col items-center'> <Hand size={100} className='animate-bounce' /> Under Maintenance</div>
  </div>
 )
}
