'use client'
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";
import { Dropdown } from "./ui/DropDown";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };


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
      className="top-0 w-full h-[80px] flex justify-between items-center px-4
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
            <div className="hover:border-b-4 hover:border-[#AA163F] hover:cursor-pointer px-4 py-1 hover:rounded-b-sm">

            <Dropdown text="Blogs" options={categories} />
            </div>
          </li>

        </ul>
      </div>

      <Button text="Contact us" link="mailto:general@findingfura.com"/>
      <div onClick={handleClick} className="sm:hidden absolute right-8 z-50 ">
        {showMenu ? (
          <FaTimes className="text-2xl text-white" />
        ) : (
          <FaBars className="text-2xl text-[#AA163F]" />
        )}
      </div>

      <ul
        onClick={handleClick}
        className={`${
          showMenu
            ? "absolute top-0 left-0 w-full h-screen bg-[#AA163F] flex flex-col justify-center backdrop-blur-xl bg-opacity-85 items-center z-40"
            : "hidden"
        }`}
      >
        <li className="py-6 text-4xl">
          <Link href="/">Home</Link>
        </li>
      
        <li className="py-6 text-4xl">
          <Dropdown text="Blogs" options={categories} />

        </li>
        <li className="py-6 text-4xl">
          <Link href="mailto:general@findingfura.com">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
