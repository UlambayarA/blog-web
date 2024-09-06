import { BlogCard } from "./BlogCard";

export const BlogPost = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-items-end">
      <div className="container w-[1216px] h-auto flex flex-col justify-center items-center gap-[32px]">
        <div className="text-[24px] font-bold">All Blog Post</div>
        <div className="flex flex-col justify-between  gap-[30px]">
          <div className="flex justify-between">
            <div className="flex justify-between ">
              <div className="text-[12px] font-[bold]">All</div>
              <div>Design</div>
              <div>Travel</div>
              <div>Fashion</div>
              <div>Technology</div>
              <div>Branding</div>
            </div>
            <div>View all</div>
          </div>
          <div className="flex flex-wrap gap-[20px]">
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};
