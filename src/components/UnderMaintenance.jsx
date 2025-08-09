import React from 'react'
import { Rocket } from 'lucide-react';

export default function UnderMaintenance() {
 return (
  <div className="flex flex-1 justify-center items-center">
   <div className='flex flex-col items-center'> <Rocket className='animate-bounce' /> Under Maintenance</div>
  </div>
 )
}
