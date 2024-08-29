export const BlogPost = () => {
  return(
  <div className="flex flex-col gap-[32px]">
    <div className="text-[24px] font-bold">All Blog Post</div>
    <div className="flex  justify-between  gap-[30px]">
        <div className="flex  justify-between ">
            <div className="text-[12px] font-[bold]">All</div>
            <div>Design</div>
            <div>Travel</div>
            <div>Fashion</div>
            <div>Technology</div>
            <div>Branding</div>
        </div>
        <div>View all</div>
    </div>
  </div>)
};
