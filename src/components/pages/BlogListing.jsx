import { Header } from "../part1/Header";
import { End } from "../part1/End";
import { BlogPost1 } from "../part1";
import { useState,useEffect } from "react";
export default function BlogListing() {
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
    <div>
    <div className="container m-auto" >
    <Header />
    <div className="flex flex-col gap-[100px] ">
    <BlogPost1 articles={articles} />
  
    </div>
  
    </div>
    <div className="w-full m-auto mt-[100px]">  <End /></div>
    </div>
)
  }