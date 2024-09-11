import { useEffect, useState } from "react";

export const Carousel = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=1")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex justify-center ">
      {articles.map((article) => {
        return (
          <div
            className="w-[1216px] h-[600px] p-[11px] flex  flex-col justify-end rounded-[12px] " 
            style={{
              backgroundImage: `url(${article?.cover_image})`,
            }}
          >
            {article.title}
            <div className="flex flex-col   gap-[16px] bg-white w-[598px]  p-[40px] rounded-[12px]">
              <div className="bg-[#4B6BFB] w-[120px] text-white rounded-[6px] p-[10px]">
                {article?.tag_list[0]}
              </div>
              <div className="text-[36px] font-semibold h-[172px] overflow-hidden ">
                {article?.description}
              </div>
              <div className="text-[16px] text-[#97989F] ">August 20, 2022</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
