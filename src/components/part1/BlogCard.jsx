export const BlogCard = () => {
  return (
    <div className="border-2 rounded-[12px] w-[392px] p-[16px] flex flex-col gap-[16px]">
      <div>
        <img src="./Blog.png" alt="" />
      </div>
      <div className="p-[8px] flex flex-col gap-[16px]">
      <div className="text-[#4B6BFB]  bg-slate-100 w-[97px] h-[28px] text-center rounded-[6px]">Technology</div>
      <div className="flex text-wrap text-[24px] font-semibold">
        The Impact of Technology on the Workplace: How Technology is Changing
      </div>
      <div className="text-[#97989F]">August 20, 2022</div>
    </div></div>
  );
};
