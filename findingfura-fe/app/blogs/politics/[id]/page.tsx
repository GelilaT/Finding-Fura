'use client'
import { useGetBlogByIdQuery } from "@/redux/slices/subscriptionApi";
import { useParams } from "next/navigation";
import { FunctionComponent } from "react";
import Loading from "@/components/shared/Loading";
import DOMPurify from "dompurify";
import CurvedPic from "@/components/ui/CurvedPic";

interface PoliticsDetailProps {}

const PoliticsDetail: FunctionComponent<PoliticsDetailProps> = () => {
  const searchParam = useParams();
  const id = searchParam["id"];

  const {
    data: blog,
    error,
    isLoading,
  } = useGetBlogByIdQuery({
    id: id as string,
    type: "politics",
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="mx-4 md:mx-20">Error loading blog details.</div>;
  }

  if (!blog) {
    return <div>No blog found.</div>;
  }

  const sanitizedContent = DOMPurify.sanitize(blog.content);
  const paragraphs = sanitizedContent.split(/(<p[^>]*>.*?<\/p>)/g).filter(Boolean); 

  return (
     <div className="relative">
      {/* Header Section */}
      <div className="flex gap-4 md:gap-10">
        <div className="w-1/3 bg-[#AA163F] h-48 md:h-96"></div>
        <div className="w-2/3 bg-[#FFCE1B] bg-opacity-15 flex items-center justify-center flex-col relative">
          <h1 className="sm:text-xl text-md w-full md:text-2xl font-semibold text-center px-4 md:w-2/3 z-20">
            {blog.title}
          </h1>
          <p className="text-gray-500 mt-2 md:mt-4 z-20 text-xs sm:text-sm md:text-base ">
            By {blog.author_name || "Unknown"} - {blog.author_title || "Contributor"}
          </p>
          <div className="absolute hidden md:block -top-10 left-20">
            <p className="text-[100px] md:text-[300px] text-white">{blog.title[0]}</p>
          </div>
        </div>
      </div>

      {/* Curved Image */}
      <div className="absolute top-10 left-3 sm:left-10 md:left-20 w-28 h-28 md:w-96 md:h-96">
        {blog.image && (
          <CurvedPic
            imagesrc={blog.image}
            imagetitle={blog.title}
            classname="w-full h-full"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="bg-[#C4C4C4] bg-opacity-10 mx-4 md:mx-16 max-w-screen h-fit">
        <div className="p-6 md:p-20 leading-10">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
              className="text-gray-800 my-4 md:my-6 text-sm md:text-base leading-loose"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PoliticsDetail;
