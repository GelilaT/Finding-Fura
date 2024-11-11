// 'use client'

// import Image from 'next/image';
// import React from 'react';
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

// const Events = () => {
//   const slideLeft = () => {
//     const slider = document.getElementById('slider') as HTMLDivElement | null;
//     if (slider) {
//       slider.scrollLeft -= 300; 
//     }
//   };

//   const slideRight = () => {
//     const slider = document.getElementById('slider') as HTMLDivElement | null;
//     if (slider) {
//       slider.scrollLeft += 300;
//     }
//   };

//   return (
//     <>
//       <h1 className='font-bold text-3xl pb-10 text-[#01003A] mt-16 ml-10'>Events</h1>
//       <h2 className='font-bold text-xl text-[#AA163F] ml-10 '>Today’s top picks</h2>
//       <div className='relative flex items-center my-10'>
//         <div className="absolute left-3 z-20 opacity-100 cursor-pointer hover:opacity-100 bg-[#F78716] rounded-full text-white" onClick={slideLeft}>
//         <MdChevronLeft size={40} />
//         </div>
//         <div
//           id='slider'
//           className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
//         >
//             <div className='relative cursor-pointer hover:scale-105 ease-in-out duration-300 border inline-block rounded-2xl mx-6'>
//               <Image src={'/images/event-23.jpg'} width={100} height={100} alt='This is one our upcoming events' className='w-[800px] h-72 border rounded-2xl'/>
//               <div className='absolute bottom-0 flex justify-between items-baseline w-full bg-[#01003A] bg-opacity-10 backdrop-blur-md h-2/4 p-5 border rounded-2xl'>
//                 <div>

//                   <p className='font-bold text-white text-2xl'>This is the title</p>
//                 </div>
//                 <div>

//                 <button className='bg-[#AA163F] text-white rounded-xl px-5 py-2 absolute bottom-3 right-3'>See details</button>
//                 </div>
//               </div> 
//             </div>  
//             <div className='relative cursor-pointer hover:scale-105 ease-in-out duration-300 border inline-block rounded-2xl mx-6'>
//               <Image src={'/images/event-23.jpg'} width={100} height={100} alt='This is one our upcoming events' className='w-[800px] h-72 border rounded-2xl'/>
//               <div className='absolute bottom-0 flex justify-between items-baseline w-full bg-[#01003A] bg-opacity-20 backdrop-blur-md h-2/4 p-5 border rounded-2xl'>
//                 <div>

//                   <p className='font-bold text-white text-2xl'>This is the title</p>
//                 </div>
//                 <div>

//                 <button className='bg-[#AA163F] text-white rounded-xl px-5 py-2 absolute bottom-3 right-3'>See details</button>
//                 </div>
//               </div>
//             </div>     
//             <div className='relative cursor-pointer hover:scale-105 ease-in-out duration-300 border inline-block rounded-2xl mx-6'>
//             <Image src={'/images/event-23.jpg'} width={100} height={100} alt='This is one our upcoming events' className='w-[800px] h-72 border rounded-2xl'/>
//             <div className='absolute bottom-0 flex justify-between items-baseline w-full bg-[#01003A] bg-opacity-20 backdrop-blur-md h-2/4 p-5 border rounded-2xl'>
//               <div>

//                 <p className='font-bold text-white text-2xl'>This is the title</p>
//               </div>
//               <div>

//               <button className='bg-[#AA163F] text-white rounded-xl px-5 py-2 absolute bottom-3 right-3'>See details</button>
//               </div>
//             </div>
//             </div>    
//         </div>
//         <div className="absolute right-3 z-20 opacity-100 cursor-pointer hover:opacity-100 bg-[#F78716] rounded-full text-white" onClick={slideRight}>
//           <MdChevronRight size={40} />
//         </div>
//       </div>
      
//     </>
//   );
// }

// export default Events;