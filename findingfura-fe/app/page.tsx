import Image from "next/image";
import CurvyShape from "../components/CurvyShape";
import RightImage from "../components/RightImage";
import RightTri from "../public/rightTri.svg"
import LeftTri from "../public/leftTri.svg"
import Authors from "../components/Authors";
import CurvedText from "../components/CurvedText";
import Circle from "../components/Authors";
import About from "../components/About";
// import Events from "../components/Event";
// import Upcoming from "../components/Upcoming";
import Events from "../components/Upcoming";
import Waves from "../public/waves.svg";
import SubscriptionForm from "@/components/Subscription";

export default function Home() {
  return (
    <div>
      <div className="relative bg-[#FFCE1B] bg-opacity-15 m-3 border-none rounded-md">
        
        <div className="flex items-center justify-between pt-36">
          <div>
            <LeftTri/>
          
          </div>
          <div className="relative border-[#AA163F] bg-white w-[510px] h-[510px] rounded-full border-opacity-20 border-2 flex items-center justify-center">

          <p className="text-[#AA163F] font-bold text-4xl text-center w-2/3 leading-normal">Crafting a vibrant collective feminist community through the art of storytelling</p>
            
            
          </div>
          <div>
            <RightTri />

          </div>
          
          
        </div>

      
      <div className="absolute top-6 right-20">

        <RightImage />
      </div>
      <div className="p-10 flex items-center justify-between">
        <div>
            
          <div className="flex-item flex-shrink-0">
              {/* <Authors /> */}
              <Circle imageSrc="/images/Naol.png" alt="Circle 1" offsetX="0px" offsetY="0px" zIndex="z-20"/>
              <Circle imageSrc="/images/Loza.png" alt="Circle 2" offsetX="60px" offsetY="0px" zIndex="z-10"/>
              <Circle imageSrc="/images/halifet.png" alt="Circle 3" offsetX="120px" offsetY="0px" zIndex="z-0"/>
          </div>
        </div>
        
        <div>
          <p className="text-black text-opacity-15">Sleep, sleep my children <br/> Sleep, sleep my children <br/> You're my best child <br/> For they killed the best <br/> <span className="text-[#AA163F] text-opacity-15">Fura</span>, you're the leader of woman!</p> 
        </div>
        </div>
        <div className="w-fit pb-10 px-12">

          <h1 className="text-[#AA163F]">Some of our top authors</h1>
          <hr className="w-full px-12 border-[#AA163F]"/>
        </div>
        
      <div className="absolute -bottom-12 left-1/2 w-24 h-24 rounded-full bg-[#AA163F] mx-auto border-8 border-white">
      </div>
        {/* <CurvedText startOffset="10%" text="Get Involved" fontSize={12} color="black"/> */}
      </div>
      <About />
      <div>
      <h1 className="text-[#AA163F] font-bold ml-10 mb-5 mt-10 text-xl ">Upcoming events</h1>

        <Events />
      </div>
      <div>
      <h1 className="text-[#AA163F] font-bold ml-10 mb-5 mt-10 text-xl ">Past events</h1>

        <Events />
      </div>

      <div className="relative max-w-screen mx-10 my-20  h-[500px] rounded-3xl p-10">
        <Image src={"/images/event-20.jpg"} layout="fill" objectFit="cover" alt="This is our community" className="absolute top-0 left-0 rounded-3xl" />
        <div className="bg-black bg-opacity-30 backdrop-blur-sm absolute inset-0 rounded-3xl"></div>

        <div className="relative">
          
          <Image src="/images/logo.jpg" width={50} height={50} alt="Hero image" className="rounded-full mx-auto" />
          <h1 className="font-extrabold text-7xl text-center mt-10 text-white">Join our community!</h1>
          <p className="text-white text-center text-2xl mt-5 font-extralight">Get updates on new content and upcoming events.</p>

        <div className="bg-white h-40 mt-20 p-10 rounded-3xl">
          <div className="border border-black flex items-center justify-center rounded-3xl">
            <div className="px-10 py-3 border border-black rounded-3xl">
              <p>Instagram</p>
            </div>
            <div className="px-10 py-3 border border-black rounded-3xl">
              <p>Facebook</p>
            </div>
            <div className="px-10 py-3 border border-[#AA163F] rounded-3xl bg-[#AA163F] text-white">
              <p>Telegram</p>
            </div>
            <div className="px-10 py-3 border border-black rounded-3xl">
              <p>Twitter</p>
            </div>

            </div>
            <hr className="text-black mt-10"/>
          </div>
        </div>

      </div>
          <SubscriptionForm />
      
      <div className="relative bg-[#AA163F] w-full h-fit mt-48 pt-24">

        <Waves className="absolute top-0" />
        <div className="z-10 p-10">

        </div>
      </div>
    </div>
  );
}
