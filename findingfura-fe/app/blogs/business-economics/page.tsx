"use client";
import { FunctionComponent } from "react";
import { useGetBusinessBlogsQuery } from "../../../redux/slices/subscriptionApi";
import BlogList from "../../../components/ui/BlogList"
import LoadingBlog from "@/components/shared/LoadingBlog";

interface BusinessAndEconomicsBlogProps {}

const BusinessAndEconomicsBlog: FunctionComponent<
  BusinessAndEconomicsBlogProps
  > = () => {
  
  const { data: blogs, error, isLoading } = useGetBusinessBlogsQuery();
  if (isLoading) {
    return <LoadingBlog />;
}
    
  return (
    <div className="pt-14">
      <div className="pt-14">
        <h2 className="text-center font-light text-3xl text-primary text-[#AA163F]">
          Business and economics blogs
        </h2>
        <div className="max-w-5xl mx-auto">
          <BlogList
            blogs={blogs}
            type="business-economics"
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessAndEconomicsBlog;
