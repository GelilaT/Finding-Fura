'use client'
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBlogDropdown, setShowBlogDropdown] = useState(false);
  const blogDropdownRef = useRef<HTMLUListElement | null>(null);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        blogDropdownRef.current &&
        !blogDropdownRef.current.contains(e.target as Node)
      ) {
        setShowBlogDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const categories = [
    "Opinions",
    "Indepth",
    "Politics",
    "Business-Economics",
    "STEM",
    "Culture-Society",
  ];

  return (
    <div
      className="sticky top-0 w-full h-[80px] flex justify-between items-center px-4
      bg-opacity-20 backdrop-blur text-white mx-auto z-40"
    >
      <div className="text-2xl font-bold mx-5">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              width={40}
              height={40}
              alt="Hero image"
              className="rounded-full mx-auto"
            />
            <p className="text-[#AA163F] font-extralight text-sm">
              FINDING<span className="text-[#F78716]">FURA</span>
            </p>
          </div>
        </Link>
      </div>

      <div
        className="hidden sm:flex text-black"
        style={{ scrollBehavior: "smooth" }}
      >
        <ul className="flex items-center gap-40">
          <li>
            <Link
              className="hover:border-b-4 hover:border-[#AA163F] px-4 py-1 hover:rounded-b-sm"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:border-b-4 hover:border-[#AA163F] px-4 py-1 hover:rounded-b-sm"
              href="#about"
            >
              About
            </Link>
          </li>
          <li
            className="relative"
            onClick={() => setShowBlogDropdown(!showBlogDropdown)}
          >
            <p className="hover:border-b-4 hover:border-[#AA163F] px-4 py-1 hover:rounded-b-sm hover:cursor-pointer">
              Blog
            </p>
            {showBlogDropdown && (
              <ul
                ref={blogDropdownRef}
                className="absolute top-full left-0 w-48 bg-white text-black rounded-xl shadow-lg mt-2 z-50"
                onClick={(e) => e.stopPropagation()} 
              >
                {categories.map((category) => (
                  <li
                    key={category}
                    className="px-4 py-2 hover:bg-[#F78716] hover:text-white hover:rounded-xl z-50"
                  >
                    <Link
                      href={`/blogs/${category.toLowerCase()}`}
                      className="text-sm"
                    >
                      {category.replace("-", " & ")}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="hidden sm:flex">
        <button
          className="relative group bg-[#AA163F] hover:bg-opacity-20 text-blueblack-light 
            hover:text-foreground px-4 py-2 flex items-center justify-center gap-2
            transition-all duration-300 ease-in-out
            text-nowrap ml-10 my-5 text-white hover:text-black rounded-3xl hover:bg-[#F78716] hover:rounded-none"
        >
          <div
            className="absolute top-0 left-0 w-[1px] h-0 group-hover:h-full 
            bg-gradient-to-b from-transparent to-[#AA163F]
            transition-all duration-700 ease-in-out
            "
          ></div>
          <div
            className="absolute top-0 left-0 w-0 group-hover:w-full h-[1px]
            bg-gradient-to-r from-transparent to-[#AA163F]
            transition-all duration-700 ease-in-out
            "
          ></div>
          <div
            className="absolute bottom-0 right-0 w-[1px] h-0 group-hover:h-full 
            bg-gradient-to-t from-transparent to-[#AA163F]
            transition-all duration-700 ease-in-out
            "
          ></div>
          <div
            className="absolute bottom-0 right-0 w-0 group-hover:w-full h-[1px]
            bg-gradient-to-l from-transparent to-[#AA163F]
            transition-all duration-700 ease-in-out
            "
          ></div>
          <Link className="hover:text-black" href="mailto:general@findingfura.com">
            Contact Us
          </Link>
        </button>
      </div>

      <div onClick={handleClick} className="sm:hidden absolute right-8 z-10">
        {showMenu ? (
          <FaTimes className="text-2xl text-[#AA163F]" />
        ) : (
          <FaBars className="text-2xl text-[#AA163F]" />
        )}
      </div>

      <ul
        className={`${
          showMenu
            ? "absolute top-0 left-0 w-full h-screen bg-[#AA163F] bg-opacity-50 backdrop-blur-4xl flex flex-col justify-center items-center"
            : "hidden"
        }`}
      >
        <li className="py-6 text-4xl">
          <Link href="#home">Home</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link href="#about">About</Link>
        </li>
        <li className="py-6 text-4xl">
          <div onClick={() => setShowBlogDropdown(!showBlogDropdown)}>
            <p>Blog</p>
            {showBlogDropdown && (
              <ul
                ref={blogDropdownRef}
                className="bg-white text-black rounded-xl shadow-lg mt-2 w-72 text-sm"
                onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing
              >
                {categories.map((category) => (
                  <li key={category} className="px-4 py-2 hover:bg-[#F78716] hover:text-white rounded-t-xl">
                    <Link href={`/blogs/${category.toLowerCase()}`}>
                      {category.replace("-", " & ")}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
        <li className="py-6 text-4xl">
          <Link href="/signup">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
