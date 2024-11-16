"use client";
import { FunctionComponent } from "react";
import Image from "next/image";
import { useGetStemBlogsQuery } from "../../../redux/slices/subscriptionApi";
import BlogList from "../../../components/ui/BlogList";
interface StemBlogProps {}

const StemBlog: FunctionComponent<StemBlogProps> = () => {
  const { data: blogs, error, isLoading } = useGetStemBlogsQuery();

  return (
    <div className="pt-14">
      <div className="pt-14">
        <h2 className="text-center font-light text-3xl text-primary text-[#AA163F]">STEM</h2>
        
        <div className="max-w-5xl mx-auto mt-20">
          <BlogList blogs={blogs} type="stem" isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default StemBlog;
