"use client";
import { FunctionComponent } from "react";
import Image from "next/image";
import { useGetIndepthBlogsQuery } from "../../../redux/slices/subscriptionApi";
import BlogList from "../../../components/ui/BlogList";
interface InDepthBlogProps {}

const InDepthBlog: FunctionComponent<InDepthBlogProps> = () => {
  const { data: blogs, error, isLoading } = useGetIndepthBlogsQuery();

  return (
    <div className="pt-14">
      <div className="pt-14">
        <h2 className="text-center font-light text-3xl text-primary text-[#AA163F]">
          In-depth 
        </h2>
        
        <div className="max-w-5xl mx-auto mt-10">
          <BlogList blogs={blogs} type="indepth" isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default InDepthBlog;
