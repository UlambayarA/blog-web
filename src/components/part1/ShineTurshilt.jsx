import { useEffect, useState } from "react";

export default function ShineTurshilt() {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <div className="container flex flex-wrap justify-between gap-5 max-w-[1280px]">
        {articles.map((article) => {
          return <ArticleCard article={article} />;
        })}
      </div>

      <Footer />
    </div>
  );
}
