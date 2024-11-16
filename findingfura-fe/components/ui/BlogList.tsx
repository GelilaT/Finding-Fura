import { FunctionComponent } from "react";
import Image from "next/image";
import { format } from "date-fns"; 
import type { Blog } from "../../lib/types/blog"
import LoadingBlog from "../shared/LoadingBlog";


interface BlogListProps {
  blogs: Blog[] | undefined;
  isLoading: boolean;
  type: string;
}

const BlogList: FunctionComponent<BlogListProps> = ({
  blogs,
  isLoading,
  type,
}) => {
  if (isLoading) {
    return <LoadingBlog />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs &&
        blogs.map((blog) => (
          <a
            key={blog.id}
            href={type + "/" + blog.id.toString()}
            className="block bg-white shadow-md rounded-lg overflow-hidden hover:cursor-pointer hover:bg-slate-100"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h3>
              <p className="text-gray-500 text-sm mt-4">
                By {blog.author_name || "Unknown"} -{" "}
                {blog.author_title || "Contributor"}
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Posted on {format(new Date(blog.created_at), "MMMM d, yyyy")}
              </p>
            </div>
          </a>
        ))}
    </div>
  );
};

export default BlogList;
