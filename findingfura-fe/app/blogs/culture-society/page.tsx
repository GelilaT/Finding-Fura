"use client";
import { FunctionComponent } from "react";
import Image from "next/image";
import { useGetCultureBlogsQuery } from "../../../redux/slices/subscriptionApi";
import BlogList from "../../../components/ui/BlogList";
interface CultureAndSocietyBlogProps {}

const CultureAndSocietyBlog: FunctionComponent<
  CultureAndSocietyBlogProps
> = () => {
  const { data: blogs, error, isLoading } = useGetCultureBlogsQuery();

  return (
    <div className="pt-14">
      <div className="pt-14">
        <h2 className="text-center font-light text-3xl text-primary text-[#AA163F]">
          Culture and society blogs
        </h2>
        <div className="max-w-5xl mx-auto">
          <BlogList
            blogs={blogs}
            type="culture-society"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default CultureAndSocietyBlog;
