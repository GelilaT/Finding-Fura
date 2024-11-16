"use client";
import { FunctionComponent } from "react";
import Image from "next/image";
import { useGetPoliticsBlogsQuery } from "../../../redux/slices/subscriptionApi";
import BlogList from "../../../components/ui/BlogList";
interface PoliticsBlogProps {}

const PoliticsBlog: FunctionComponent<PoliticsBlogProps> = () => {
  const { data: blogs, error, isLoading } = useGetPoliticsBlogsQuery();

  return (
    <div className="pt-14">
      <div className="pt-14">
        <h2 className="text-center font-light text-3xl text-primary text-[#AA163F]">
          Politics
        </h2>
        
        <div className="max-w-5xl mx-auto mt-20">
          <BlogList blogs={blogs} type="politics" isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default PoliticsBlog;
