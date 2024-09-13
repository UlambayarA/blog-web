import { Carousel } from "../part1/Carousel";
import { Header } from "../part1/Header";
import { End } from "../part1/End";
import { useEffect, useState } from "react";
import { BlogPost1 } from "../part1/BlogPost1";

export const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loadMore, setLoadMore] = useState(9);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${loadMore}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  const handleLoadMore = () => {
    setLoadMore(loadMore + 3);
  };

  useEffect(() => {
    fetchData();
  }, [loadMore]);

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col w-full h-auto justify-center">
          <div className="flex flex-col container m-auto gap-[100px]  ">
            <Header />
            <Carousel />
            <BlogPost1
              handleLoadMore={handleLoadMore}
              articles={articles}
            />{" "}
           
          </div>
          <div className="mt-[100px]"> <End /></div>
          
        </div>
      </div>
    </div>
  );
};
