import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import SubscriptionForm from "./Subscription";

const Footer = () => {

    const Year = new Date().getFullYear();

    return (
        <div className="relative text-black w-full h-fit mt-48 pt-24">

        <div className="flex justify-between items-start ml-10 mr-4 mt-20 gap-10">
          <div>
            <h1 className="mb-4 text-[#AA163F]">
              Finding<span className="text-[#FFCE1B]">Fura</span>
            </h1>
            <p className="w-72 leading-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deleniti dolores vel ipsa reiciendis corporis similique dolor earum aut itaque.</p>
          </div>
          
          <div className="flex flex-col space-y-5">
            <h1 className="hover:scale-105 ease-in-out duration-300">Home</h1>
            <h1 className="hover:scale-105 ease-in-out duration-300">About</h1>
            <h1 className="hover:scale-105 ease-in-out duration-300">Blog</h1>
          </div>

          <div className="flex flex-col space-y-5">
            <div className="flex gap-2 items-center hover:scale-105 ease-in-out duration-300">
              <FaFacebook className="text-blue-600" /> Facebook
            </div>
            <div className="flex gap-2 items-center hover:scale-105 ease-in-out duration-300">
              <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 rounded text-white">
                <FaInstagram />
              </div>
               Instagram
            </div>
            <div className="flex gap-2 items-center hover:scale-105 ease-in-out duration-300">
              <FaTelegram className="text-[#1fd2ff]"/> Telegram
            </div>
            <div className="flex gap-2 items-center hover:scale-105 ease-in-out duration-300">
              <FaLinkedin className="text-[#348cfe]"/> LinkedIn
            </div>
          </div>

          <div>
            <SubscriptionForm />
          </div>
        </div>
        <hr className="w-full mt-10 text-[#AA163F]"/>
        <div className="mx-auto font-thin my-5">
          <h6 className="text-center">Copy right &copy; <span className="text-[#AA163F]">Finding<span className="text-[#FFCE1B]">Fura</span></span> {Year}. All rights reserved.</h6>
        </div>
      </div>

    );
};

export default Footer;