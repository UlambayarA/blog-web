import Link from "next/link";
import { ArticleCard } from "./contact-us/ArticleCard";

export const BlogPost1 = ({ articles, handleLoadMore }) => {
  return (
    <div className="w-full h-auto flex flex-col justify-end items-center">
      <div className="container  h-auto flex flex-col justify-center  gap-[32px]">
        <div className="text-[24px] font-bold">All Blog Post</div>
        <div className="flex flex-col justify-between   gap-[30px]">
          <div className="flex justify-between w-full">
            <div className="flex justify-between ">
              <div className="text-[12px]  font-semibold  flex gap-3 ">All
              <div>Design</div>
              <div>Travel</div>
              <div>Fashion</div>
              <div>Technology</div>
              <div>Branding</div></div>
            </div>
            <div>View all</div>
          </div>
          <div className="flex flex-wrap justify-between gap-[50px] ">
            {articles.map((article) => {
              return (
                <Link href={`/blog/${article?.id}`}>
                  <ArticleCard
                    urlImg={article.cover_image}
                    description={article.description}
                    tag={article.tag_list[0]}
                  />
                </Link>
              );
            })}
          </div>
          <div className="flex justify-center"> <button onClick={handleLoadMore} className="bg-slate-500 rounded-[12px] p-[4px] w-[100px]">
            Load More
          </button></div>
         
        </div>
      </div>
    </div>
  );
};
