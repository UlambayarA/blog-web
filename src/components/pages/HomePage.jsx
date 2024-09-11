import { Carousel } from "../part1/Carousel";
import { Header } from "../part1/Header";
import { End } from "../part1/End";
import { useEffect, useState } from "react";
import { BlogPost1 } from "../part1/BlogPost1";

export const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=12")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex h-auto justify-center">
        <div className="flex flex-col container w-[1316px] gap-[100px]  ">
          <Header />
          <Carousel />
          <BlogPost1 articles={articles} />
          <div></div>
          <End />
        </div>
      </div>
    </div>
  );
};
