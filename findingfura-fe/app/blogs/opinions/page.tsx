"use client";
import { FunctionComponent } from "react";
import { useGetOpinionsBlogsQuery } from "../../../redux/slices/subscriptionApi";
import BlogList from "../../../components/ui/BlogList";

interface OpinionBlogProps {}

const OpinionBlog: FunctionComponent<OpinionBlogProps> = () => {
  const { data: blogs, error, isLoading } = useGetOpinionsBlogsQuery();

  return (
    <div className="pt-14">
      <div className="pt-14">
        <h2 className="text-center font-light text-3xl text-primary text-[#AA163F]">
          Opinions
        </h2>
        
        <div className="max-w-5xl mx-auto mt-20">
          <BlogList blogs={blogs} type="opinions" isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default OpinionBlog;
