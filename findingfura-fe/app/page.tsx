import Image from "next/image";
import RightImage from "@/components/ui/RightImage";
import RightTri from "@/public/rightTri.svg"
import LeftTri from "@/public/leftTri.svg"
import Circle from "@/components/Authors";
import About from "@/components/About";
import Events from "@/components/Event";
import CurvedPic from "@/components/ui/CurvedPic";
import CurvedText from "@/components/ui/CurvedText";
import { MdArrowForward } from "react-icons/md";
import Article from "@/components/Article";

export default function Home() {
  return (
    <div>
      <div className="relative bg-white md:bg-[#FFCE1B] md:bg-opacity-15 m-3 border-none rounded-md">
        <div className="relative">
        
        <div className="absolute top-3 left-20 hidden md:block">
          <CurvedPic
            imagesrc="/images/halifet.png"
            imagetitle="One of our authors"
            classname="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 hover:scale-105 ease-in-out duration-300"
          />
        </div>

        
        <div className="flex items-center justify-center pt-2 md:pt-36">
        
          <div className="hidden">
            <LeftTri />
          </div>

        
          <div
            className="bg-white rounded-full flex items-center justify-center md:w-[450px] md:h-[450px]"
          >
            <p className="text-[#AA163F] font-bold text-2xl w-4/6 md:text-4xl md:w-5/6 text-center leading-loose">
              Crafting a vibrant collective feminist community through the art of storytelling
            </p>
          </div>

         
          <div className="hidden">
            <RightTri />
          </div>
        </div>
      </div>


      
      <div className="absolute top-6 right-20 hidden md:block">

        <RightImage />
      </div>
      <div className="p-10 flex flex-col md:flex-row items-between justify-between md:justify-between gap-6 md:pb-0">
        <div>
          <div className="flex-item flex-shrink-0 hover:scale-105 ease-in-out duration-300">
            <Circle imageSrc="/images/Naol.png" alt="Circle 1" offsetX="0px" offsetY="0px" zIndex="z-20" />
            <Circle imageSrc="/images/Loza.png" alt="Circle 2" offsetX="60px" offsetY="0px" zIndex="z-10" />
            <Circle imageSrc="/images/halifet.png" alt="Circle 3" offsetX="120px" offsetY="0px" zIndex="z-0" />
          </div>
          
        </div>

        <div className="text-center md:text-left hidden md:block">
          <p className="text-black text-opacity-15">
            Sleep, sleep my children <br /> Sleep, sleep my children <br /> You're my best child <br /> For they killed the
            best <br /> <span className="text-[#AA163F] text-opacity-15">Fura</span>, you're the leader of woman!
          </p>
        </div>
      </div>
        
        <div className="w-fit pb-10 px-12 pt-16 md:pt-0 ">

            <h1 className="text-[#AA163F]">Some of our top authors</h1>
            <hr className="w-full px-12 border-[#AA163F]"/>
        </div>

        
        
      <a href="mailto:general@findingfura.com?subject=Request to join fura’s volunteers’ community" className="absolute md:-bottom-12 md:left-1/2 right-5 bottom-11 transform -translate-x-1/2 w-24 h-24 rounded-full bg-[#AA163F] border-8 border-white text-white tracking-widest text-xs animate-rotate">
            
        <CurvedText text="Get Involved" />
        <MdArrowForward className="-rotate-45 absolute left-6 top-7" size={35} />
      </a>


      </div>
      <Article />
      <About />
      {/* <div>
      <h1 className="text-[#AA163F] font-bold ml-10 mb-5 mt-20 text-xl ">Upcoming events</h1>

        <Events />
      </div>
      <div>
      <h1 className="text-[#AA163F] font-bold ml-10 mb-5 mt-20 text-xl ">Past events</h1>

        <Events />
      </div> */}

      <div className="relative max-w-screen mx-10 mt-20 h-[710px] md:h-[500px] rounded-3xl md:p-10 p-5 hover:scale-105 ease-in-out duration-300 ">
        <Image src={"/images/event-20.jpg"} layout="fill" objectFit="cover" alt="This is our community" className="absolute top-0 left-0 rounded-3xl" />
        <div className="bg-black bg-opacity-30 backdrop-blur-sm absolute inset-0 rounded-3xl"></div>

        <div className="relative">
          
          <Image src="/images/logo.jpg" width={50} height={50} alt="Hero image" className="rounded-full mx-auto" />
          <h1 className="font-extrabold lg:text-7xl md:text-6xl text-4xl text-center mt-10 text-white">Join our community!</h1>
          <p className="text-white text-center text-2xl mt-5 font-extralight">Get updates on new content and upcoming events.</p>
        {/* Add the links to the social medias */}
        <div className="bg-white h-fit w-full mx-auto md:h-40 mt-20 md:p-10 p-2 rounded-3xl">
          <div className="md:border border-black flex flex-col md:flex-row items-center justify-center rounded-3xl">
            <div className="px-10 py-3 border border-black rounded-3xl hover:bg-[#AA163F] hover:text-white hover:border-[#AA163F] hover:scale-105 ease-in-out duration-300">
              <p>Instagram</p>
            </div>
            <div className="px-10 py-3 border border-black rounded-3xl hover:bg-[#AA163F] hover:text-white hover:border-[#AA163F] hover:scale-105 ease-in-out duration-300">
              <p>Facebook</p>
            </div>
            <div className="px-10 py-3 border border-[#AA163F] rounded-3xl bg-[#AA163F] text-white hover:bg-white hover:text-black hover:border-black hover:scale-105 ease-in-out duration-300">
              <p>Telegram</p>
            </div>
            <div className="px-10 py-3 border border-black rounded-3xl hover:bg-[#AA163F] hover:text-white hover:border-[#AA163F] hover:scale-105 ease-in-out duration-300">
              <p>Twitter</p>
            </div>

            </div>
            <hr className="text-black mt-10 hidden md:block"/>
          </div>
        </div>

      </div>
    </div>
  );
}
