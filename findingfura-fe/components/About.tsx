import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
      <div id='#about'>
            
        <div className='md:ml-20 mx-10 mb-20 md:mb-0'>
            <h1 className='font-bold text-3xl pb-10 text-[#01003A]'>About us</h1>
            <div className='flex items-center '>
                <div className='relative md:w-1/2 w-full h-[480px] md:h-[574px] lg:h-[570px]'>
                    <Image src={"/images/logo.jpg"} alt="This is our logo" fill className="object-cover w-full" />
                
                <div className="absolute top-0 left-0 md:top-5 md:left-3/4 lg:w-[600px] w-full bg-white bg-opacity-50 backdrop-blur-lg border border-white border-opacity-30 rounded-lg h-full shadow-md hover:scale-105 ease-in-out duration-300 hover:backdrop-blur-none hover:bg-opacity-90 text-xs lg:text-md">
                    <p className="lg:px-10 py-2 lg:py-5 leading-5 md:leading-8 px-2">Finding Fura is an online feminist magazine that aims to create a platform that fosters nuanced and critical discourse, building narratives around key issues such as politics, national conversations, STEM, history, literature, and everyday life from a feminist perspective.</p>
                    <p className="lg:px-10 py-2 lg:py-5 leading-5 md:leading-8 px-2">
                    Inspired by the folktale of Queen Fura of Sidama, our goal is to create a vibrant online community that not only addresses immediate social and cultural misunderstanding but also contributes to the long-term development of feminist thought in Ethiopia.</p>
                    
                    <p className="lg:px-10 py-2 lg:py-5 leading-5 md:leading-8 px-2">
                    Ultimately, Finding Fura serves as a platform providing safe space for the practice of unlearning patriarchal norms and centering marginalized perspectives through the power of the written word.</p>
                </div>
                </div>
            </div> 
            </div>
            <div className='flex flex-col space-y-6 lg:space-y-0 lg:flex-row items-center justify-center gap-6 bg-[#AA163F] py-12 rounded-3xl md:mt-32 text-white mt-96 w-full px-44 md:px-20'>
                <div className='bg-white backdrop-blur-lg bg-opacity-40 h-72 rounded-lg shadow-md hover:scale-105 ease-in-out duration-300'>
                    <h1 className='font-bold text-center pt-5 pb-3 text-xl'>Mission</h1>
                    <p className='w-72 text-center text-sm leading-7 px-5 font-thin'>To create an online platform that elevates feminist academic conversations in the digital ecosystem.</p>
                </div>
                <div className='bg-white backdrop-blur-lg bg-opacity-40 h-72 rounded-lg shadow-md hover:scale-105 ease-in-out duration-300'>
                    <h1 className='font-bold text-center pt-5 pb-3 text-xl'>Vision</h1>
                    <p className='w-72 text-center text-sm leading-7 px-5 font-thin'>To create a digital platform that contributes to efforts to build feminist academic discourse, fostering nuanced and substantive conversations across various domains to influence both online and offline narratives.</p>
                </div>
                <div className='bg-white backdrop-blur-lg bg-opacity-40 h-72 rounded-lg shadow-md hover:scale-105 ease-in-out duration-300'>
                    <h1 className='font-bold text-center pt-5 pb-3 text-xl'>Value</h1>
                    <p className='w-72 text-center text-sm leading-7 px-5 font-thin'>Committed to promoting in-depth feminist analysis that bridges academic and public discourse.</p>
                </div>
            </div>
    </div>
  )
}

export default About
