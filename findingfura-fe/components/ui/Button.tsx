import React from 'react'
import Link from 'next/link'

interface ButtonProps { 
    link: string,
    text: string
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <div className="hidden sm:flex">
        <button
          className="relative group bg-[#AA163F] hover:bg-opacity-20 text-blueblack-light 
            hover:text-foreground px-4 py-2 flex items-center justify-center gap-2
            transition-all duration-300 ease-in-out
            text-nowrap  my-5 text-white hover:text-black rounded-3xl hover:bg-[#F78716] hover:rounded-none"
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
          <Link className="hover:text-black" href={props.link}>
            {props.text}
          </Link>
        </button>
      </div>

    </div>
  )
}

export default Button
