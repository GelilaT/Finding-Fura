import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import SubscriptionForm from "./Subscription";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <div className="relative text-black w-full h-fit mt-48 pt-24 bg-gray-50">
      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 px-6 md:px-16">
        {/* Logo and About Section */}
        <div>
          <h1 className="mb-4 text-[#AA163F] text-xl font-bold">
            Finding<span className="text-[#FFCE1B]">Fura</span>
          </h1>
          <p className="leading-7 text-sm text-gray-600 lg:w-72 md:w-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            deleniti dolores vel ipsa reiciendis corporis similique dolor earum
            aut itaque.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <div className="flex flex-col space-y-3 text-gray-700">
            <h1 className="hover:scale-105 ease-in-out duration-300 cursor-pointer">Home</h1>
            <h1 className="hover:scale-105 ease-in-out duration-300 cursor-pointer">About</h1>
            <h1 className="hover:scale-105 ease-in-out duration-300 cursor-pointer">Blog</h1>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col space-y-3 text-gray-700">
            <div className="flex items-center gap-2 hover:scale-105 ease-in-out duration-300 cursor-pointer">
              <FaFacebook className="text-blue-600" /> Facebook
            </div>
            <div className="flex items-center gap-2 hover:scale-105 ease-in-out duration-300 cursor-pointer">
              <FaInstagram className="bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 text-white rounded" />
              Instagram
            </div>
            <div className="flex items-center gap-2 hover:scale-105 ease-in-out duration-300 cursor-pointer">
              <FaTelegram className="text-[#1fd2ff]" /> Telegram
            </div>
            <div className="flex items-center gap-2 hover:scale-105 ease-in-out duration-300 cursor-pointer">
              <FaLinkedin className="text-[#348cfe]" /> LinkedIn
            </div>
          </div>
        </div>

        {/* Subscription Form */}
        <div>
          <SubscriptionForm />
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="w-full mt-10 text-[#AA163F]" />
      <div className="text-center font-thin my-5">
        <h6>
          Copyright &copy;{" "}
          <span className="text-[#AA163F]">
            Finding<span className="text-[#FFCE1B]">Fura</span>
          </span>{" "}
          {Year}. All rights reserved.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
