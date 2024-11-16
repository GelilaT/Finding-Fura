import React from 'react';
import Image from 'next/image';

interface CircleProps {
  imageSrc: string;
  alt: string;
  offsetX: string;
  offsetY: string;
  zIndex: string
}

const Circle: React.FC<CircleProps> = ({ imageSrc, alt, offsetX, offsetY, zIndex }) => (
  <div
        className={`absolute w-24 h-24 rounded-full border-2 border-[#F78716] overflow-hidden shadow-lg ${zIndex} `}
    style={{ transform: `translate(${offsetX}, ${offsetY})` }}
  >
    <Image src={imageSrc} alt={alt} layout="fill" objectFit="cover" />
  </div>
);

export default Circle













// import React from 'react'
// import Image from 'next/image'

// const Authors = () => {
//     return (
//       <div>
            
//             <div className="flex items-center px-10 relative">
//                 <div className="z-20">
                    
//                     <Image src={"/images/Naol.png"} alt="This is one of our authors" width={100} height={100} className="rounded-full border-2 border-[#F78716] w-24 h-24" />
                    
//                 </div>
//                 <div className="absolute left-28 z-10">

//                     <Image src={"/images/loza.png"} alt="This is one of our authors" width={100} height={100} className="rounded-full border-2 border-[#F78716] w-24 h-24" />
                    
//                 </div>
//                 <div className="absolute left-5 z-0">

//                     <Image src={"/images/halifet.png"} alt="This is one of our authors" width={100} height={100} className="rounded-full border-2 border-[#F78716] w-24 h-24" />
                    
//                 </div>
                
//             </div>
//             <div className='pl-10'>

//                 <h1 className='text-[#AA163F] text-lg font-medium mt-2 w-fit border-b-[1px] border-[#AA163F] border-opacity-85'>Some of our authors</h1>

//             </div>
//         </div>
//   )
// }

// export default Authors
