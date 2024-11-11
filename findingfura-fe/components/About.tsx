import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
      <div>
            
        <div className='m-10 ml-20'>
            <h1 className='font-bold text-3xl pb-10 text-[#01003A]'>About us</h1>
            <div className='flex items-center '>
                <div className='relative w-1/2'>
                    <Image src={"/images/logo.jpg"} alt="This is our logo" width={800} height={800} />
                
                <div className="absolute top-10 -right-3/4 w-[600px] bg-white bg-opacity-50 backdrop-blur-lg border border-white border-opacity-30 rounded-lg h-fit shadow-md">
                    <p className="p-10 leading-7">Finding Fura is an online feminist magazine that aims to create a platform that fosters nuanced and critical discourse, building narratives around key issues such as politics, national conversations, STEM, history, literature, and everyday life from a feminist perspective.</p>
                    <p className="p-10 leading-7 pt-3">
                    Inspired by the folktale of Queen Fura of Sidama, our goal is to create a vibrant online community that not only addresses immediate social and cultural misunderstanding but also contributes to the long-term development of feminist thought in Ethiopia.</p>
                    
                    <p className="p-10 leading-7 pt-3">
                    Ultimately, Finding Fura serves as a platform providing safe space for the practice of unlearning patriarchal norms and centering marginalized perspectives through the power of the written word.</p>
                </div>
                </div>
            </div> 
            </div>
            <div className='flex items-center justify-center bg-[#AA163F] py-12 gap-5 rounded-3xl mt-24 text-white'>
                <div className='bg-white backdrop-blur-lg bg-opacity-40 h-64 rounded-lg shadow-md hover:scale-105 ease-in-out duration-300'>
                    <h1 className='font-bold text-center pt-5 pb-3 text-xl'>Mission</h1>
                    <p className='w-72 text-center text-sm leading-7 px-5 font-thin'>To create an online platform that elevates feminist academic conversations in the digital ecosystem.</p>
                </div>
                <div className='bg-white backdrop-blur-lg bg-opacity-40 h-64 rounded-lg shadow-md hover:scale-105 ease-in-out duration-300'>
                    <h1 className='font-bold text-center pt-5 pb-3 text-xl'>Vision</h1>
                    <p className='w-72 text-center text-sm leading-7 px-5 font-thin'>To create a digital platform that contributes to efforts to build feminist academic discourse, fostering nuanced and substantive conversations across various domains to influence both online and offline narratives.</p>
                </div>
                <div className='bg-white backdrop-blur-lg bg-opacity-40 h-64 rounded-lg shadow-md hover:scale-105 ease-in-out duration-300'>
                    <h1 className='font-bold text-center pt-5 pb-3 text-xl'>Value</h1>
                    <p className='w-72 text-center text-sm leading-7 px-5 font-thin'>Committed to promoting in-depth feminist analysis that bridges academic and public discourse.</p>
                </div>
            </div>
    </div>
  )
}

export default About

// import React from 'react';

// const GlassOverlay: React.FC = () => {
//   return (
//     <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/logo.jpg')" }}>
//       {/* Glass effect overlay on the right half */}
//       <div className="absolute inset-y-0 right-0 w-1/2 bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 rounded-l-lg p-6">
//         <h1 className="text-white text-2xl font-bold">Glass Effect Overlay</h1>
//         <p className="text-white text-opacity-80 mt-2">
//           This is a frosted glass effect overlay on the right half of the image.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default GlassOverlay;
