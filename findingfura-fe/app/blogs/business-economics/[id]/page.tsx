'use client'
import { useGetBlogByIdQuery } from "@/redux/slices/subscriptionApi";
import { useParams } from "next/navigation";
import { FunctionComponent } from "react";
import Loading from "@/components/shared/Loading";
import DOMPurify from "dompurify";
import CurvedPic from "@/components/ui/CurvedPic";

interface BusinessAndEconomicsBlogProps {}

const BusinessAndEconomicsDetail: FunctionComponent<
  BusinessAndEconomicsBlogProps
> = () => {
  const searchParam = useParams();
  const id = searchParam["id"];
  const {
    data: blog,
    error,
    isLoading,
  } = useGetBlogByIdQuery({
    id: id as string,
    type: "indepth",
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="mx-20">Error loading blog details.</div>;
  }

  if (!blog) {
    return <div>No blog found.</div>;
  }

  const sanitizedContent = DOMPurify.sanitize(blog.content);
  const paragraphs = sanitizedContent.split(/(<p[^>]*>.*?<\/p>)/g).filter(Boolean); 
  
  // console.log(paragraphs)
  return (
    <div className="relative">
      <div className="flex gap-10">
        <div className="w-1/3 bg-[#AA163F] h-96"></div>
        <div className="bg-[#FFCE1B] relative bg-opacity-15 w-2/3 flex items-center justify-center flex-col z-20">
          <h1 className="text-2xl font-semibold w-2/3 text-center z-20">{blog.title}</h1>
          <p className="text-gray-500 m-4">
            By {blog.author_name || "Unknown"} - {blog.author_title || "Contributor"}
          </p>
          <div className="absolute -top-10 left-20">
            <p className="text-[300px] text-white">{blog.title[0]}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-10 left-20">
        {blog.image && (
          <CurvedPic imagesrc={blog.image} imagetitle={blog.title} classname="w-96 h-96" />
        )}
      </div>
      <div className="bg-[#C4C4C4] bg-opacity-10 ml-16 mr-16 max-w-screen h-fit">
        <div className="p-20 leading-10">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
              className="text-gray-800 my-6" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessAndEconomicsDetail;
