// export const BlogCard = () => {
//   return BlogCardData.map((card) => (
//     <div className="border-2 rounded-[12px] w-[392px] p-[16px] flex flex-col gap-[16px]">
//       <div>
//         <img src={card.url} alt="" />
//       </div>
//       <div className="p-[8px] flex flex-col gap-[16px]">
//         <div className="text-[#4B6BFB]  bg-slate-100 w-[97px] h-[28px] text-center rounded-[6px]">
//           {card.title}
//         </div>
//         <div className="flex text-wrap text-[24px] font-semibold">
//           {card.description}
//         </div>
//         <div className="text-[#97989F]">{card.date}</div>
//       </div>
//     </div>
//   ));
// };

import { useEffect, useState } from "react";

export const ArticleCard = ({ urlImg, tag, description }) => {
  // const publishedDate = new Date(article.published_at);

  // const generatMonth = (month) => {
  //   switch (month) {
  //     case 1:
  //       return "January";
  //     case 2:
  //       return "February";
  //     case 3:
  //       return "March";
  //     case 4:
  //       return "April";
  //     case 5:
  //       return "May";
  //     case 6:
  //       return "June";
  //     case 7:
  //       return "July";
  //     case 8:
  //       return "August";
  //     case 9:
  //       return "September";
  //     case 10:
  //       return "October";
  //     case 11:
  //       return "November";
  //     case 12:
  //       return "December";
  //   }
  // };

  return (
    <div className="w-[400px] h-[475px] border-[#E8E8EA] rounded-xl border p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <div
          style={{
            backgroundImage: `url(${urlImg})`,
            width: "100%",
            height: "240px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "6px",
          }}
        ></div>
        <div className="w-[100px] h-[30px] bg-[#4B6BFB0D] flex justify-center items-center rounded-md text-[#4B6BFB]">
          {tag}
        </div>
        <div className="overflow-hidden h-[100px]">
          <p className="text-2xl font-semibold text-ellipsis ">{description}</p>
        </div>
      </div>

      <p className=" text-[#97989F]">
        {/* {publishedDate.getFullYear()}-{generatMonth(publishedDate.getMonth())}- */}
        {/* {publishedDate.getDay()} */}
      </p>
    </div>
  );
};
