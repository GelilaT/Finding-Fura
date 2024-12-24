import Image from "next/image";
import About from "@/components/About";
import Events from "@/components/Event";
import Article from "@/components/Article";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div>
      <div className="relative -z-10">
      {/* Header and Content */}
      <div className="mx-auto px-6 md:px-20 lg:px-24 py-12 md:py-20 grid md:flex gap-12 items-center">
        {/* Left Section */}
        <div>
          <p className="text-3xl md:text-4xl font-semibold text-black leading-loose ">
            Crafting a vibrant collective
            <span className="text-[#AA163F]"> feminist</span> community through the art of storytelling 
          </p>
          <p className="text-gray-600 mt-6 leading-relaxed">
            An online feminist magazine dedicated to providing a platform for thoughtful and critical discussions, shaping narratives on essential topics—all through a feminist lens.

          </p>
                  
            <Button text="Get involved" link="mailto:general@findingfura.com?subject=Request to join fura’s volunteers’ community"/>
        </div>

        {/* Right Section: Images */}
        <div className="flex gap-5 items-end relative">
          {/* Top Row */}
          <div className="flex flex-col gap-6">
            <div
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-tl-[80px] shadow-lg overflow-hidden p-2 bg-yellow-100 transition-transform duration-300 hover:scale-105"
                          
            >
              <img
                src="/images/halifet.png"
                alt="Influencer 1"
                className="w-full h-full object-cover rounded-tl-[80px]"
              />
              
            </div>
            <div
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-lg shadow-lg overflow-hidden rounded-bl-[80px] p-2 bg-gray-100 transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/images/megedlawit.png"
                alt="Influencer 2"
                className="w-full h-full object-cover rounded-bl-[80px]"
              />
            </div>
          </div>
          {/* Bottom Row */}
          <div className="flex flex-col gap-6">
            <div
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-lg shadow-lg overflow-hidden rounded-tr-[80px] p-2 bg-orange-100 transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/images/loza.png"
                alt="Influencer 3"
                className="w-full h-full object-cover rounded-tr-[80px]"
              />
              
            </div>
            <div
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-lg shadow-lg overflow-hidden rounded-br-[80px] p-2 bg-red-300 bg-opacity-15 transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/images/naol.png"
                alt="Influencer 4"
                className="w-full h-full object-cover rounded-br-[80px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-2 -left-16 w-32 h-32 bg-gray-100 rounded-full -z-10"></div>
        <div className="absolute bottom-16 right-10 w-32 h-32 bg-yellow-200 rounded-full -z-10"></div>
              
        <div className="absolute top-16 left-10 w-32 h-32 bg-yellow-100 rounded-full -z-10"></div>
      </div>
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
