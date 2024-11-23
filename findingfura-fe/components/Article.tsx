'use client'
import React from 'react'
import { useEffect, useState } from "react";
import {
    useGetBusinessBlogsQuery,
    useGetCultureBlogsQuery,
    useGetIndepthBlogsQuery,
    useGetOpinionsBlogsQuery,
    useGetPoliticsBlogsQuery,
    useGetStemBlogsQuery
} from "@/redux/slices/subscriptionApi";
import type { Blog } from "../lib/types/blog";
import { MdArrowForward } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

const Article = () => {

  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);

  const { data: businessBlogs = [] } = useGetBusinessBlogsQuery();
  const { data: cultureBlogs = [] } = useGetCultureBlogsQuery();
  const { data: indepthBlogs = [] } = useGetIndepthBlogsQuery();
  const { data: opinionsBlogs = [] } = useGetOpinionsBlogsQuery();
  const { data: politicsBlogs = [] } = useGetPoliticsBlogsQuery();
  const { data: stemBlogs = [] } = useGetStemBlogsQuery();

  useEffect(() => {
  const allBlogs = [
      ...(businessBlogs.map(blog => ({ ...blog, category: "business-economics" }))),
      ...(cultureBlogs.map(blog => ({ ...blog, category: "culture-society" }))),
      ...(indepthBlogs.map(blog => ({ ...blog, category: "indepth" }))),
      ...(opinionsBlogs.map(blog => ({ ...blog, category: "opinions" }))),
      ...(politicsBlogs.map(blog => ({ ...blog, category: "politics" }))),
      ...(stemBlogs.map(blog => ({ ...blog, category: "stem" }))),
    ];

    if (allBlogs.length > 0) {
      const sortedBlogs = allBlogs.sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      setRecentBlogs(sortedBlogs.slice(0, 3));
    }
  }, [
    businessBlogs?.length,
    cultureBlogs?.length,
    indepthBlogs?.length,
    opinionsBlogs?.length,
    politicsBlogs?.length,
    stemBlogs?.length,
]);

  return (
      <div>
          {recentBlogs.length === 3 ? (
          <div className='mt-24 mb-32'>
            <h1 className='font-bold text-3xl pb-10 text-[#01003A] mx-10'>Article of the week</h1>
            <div className='md:flex items-start justify-start gap-5 mx-10'>
                <div className="relative md:w-3/5 h-[450px] w-full shadow-md hover:scale-105 ease-in-out duration-300">
                    
                    <Image
                        src={recentBlogs[0].image}
                        fill
                        alt="Blog Image"
                        className="rounded-2xl object-cover w-full"
                    />

                  
                    <h1 className="absolute top-0 left-0 font-bold text-[#AA163F] text-3xl bg-white rounded-xl p-3 w-3/5 ">
                        {recentBlogs[0].title}
                    </h1>

                  
                    <Link href={`blogs/${recentBlogs[0].category}/${recentBlogs[0].id}`}>
                        <div className="absolute top-5 right-5 bg-white rounded-full p-2 shadow-md hover:scale-105 ease-in-out duration-300">
                            <MdArrowForward size={24} className="-rotate-45" />
                        </div>
                    </Link>

                    <div className="absolute bottom-5 left-5 bg-[#AA163F] text-white rounded-3xl px-5 py-1">
                        <p>{recentBlogs[0].author_name}</p>
                    </div>
                </div>
                <div className='mt-10 md:mt-0 ml-0'>
                    <div className="flex flex-col space-y-6 items-center">
                    
                        <div className="relative w-full md:w-96 md:h-[210px] h-[300px] shadow-md hover:scale-105 ease-in-out duration-300">
                            <Image
                                src={recentBlogs[1].image}
                                fill
                                alt="image"
                                className="rounded-2xl object-cover w-full"
                            />
                            <h1 className="font-bold text-white bottom-12 left-3 absolute w-2/3 bg-black bg-opacity-45 p-2 rounded-xl mb-0">
                                {recentBlogs[1].title}
                                  </h1>
                            <Link href={`blogs/${recentBlogs[1].category}/${recentBlogs[1].id}`}>
                                <div className="bg-white rounded-full p-1 absolute right-3 top-3 shadow-md hover:scale-105 ease-in-out duration-300">
                                    <MdArrowForward size={24} className="-rotate-45" />
                                </div>
                            </Link>
                            <div className="bg-[#AA163F] text-white rounded-3xl px-5 py-1 w-fit absolute bottom-3 left-3">
                                <p>{recentBlogs[1].author_name}</p>
                            </div>
                        </div>

                    
                        <div className="relative w-full md:w-96 md:h-[210px] h-[300px] shadow-md hover:scale-105 ease-in-out duration-300">
                            <Image
                                src={recentBlogs[2].image}
                                fill
                                alt="image"
                                className="rounded-2xl object-cover w-full"
                            />
                            <h1 className="font-bold text-white bottom-12 left-3 absolute w-2/3 bg-black bg-opacity-45 p-2 rounded-xl mb-0">
                                {recentBlogs[2].title}
                            </h1>
                            <Link href={`blogs/${recentBlogs[2].category}/${recentBlogs[2].id}`}>
                                <div className="bg-white rounded-full p-1 absolute right-3 top-3 shadow-md hover:scale-105 ease-in-out duration-300">
                                    <MdArrowForward size={24} className="-rotate-45" />
                                </div>
                            </Link>
                            <div className="bg-[#AA163F] text-white rounded-3xl px-5 py-1 w-fit absolute bottom-3 left-3">
                                <p>{recentBlogs[2].author_name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          ) : (
              <></>
            )
          }
    </div>
  )
}

export default Article
