import React from 'react'
import Image from "next/image";
import CurvyShape from './CurvyShape';


const RightImage = () => {
  return (
      <div>
          <div className='relative'>
              
              <Image src="/images/megedlawit.png" alt="This is one of our authors" width={200} height={600} className='rounded-full w-[165px] h-[230px] scale-75'/>
            <div className='absolute -top-12 -left-11'>
                
                <CurvyShape/>
            </div>
          </div>
      
    </div>
  )
}

export default RightImage
