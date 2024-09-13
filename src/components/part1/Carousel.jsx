import Link from "next/link";
import { useEffect, useState } from "react";

export const Carousel = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeft = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === 0) {
        return articles.length - 1;
      } else {
        return currentIndex - 1;
      }
    });
  };

  const handleRight = () => {
    setCurrentIndex((currentIndex) => {
      if (currentIndex === articles.length - 1) {
        return 0;
      } else {
        return currentIndex + 1;
      }
    });
  };

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=5&top=3")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full  h- flex  ">
      <div className="w-full ">
        <Link href={`/blog/${articles[currentIndex]?.id}`}>
          <div
            className="flex flex-col justify-end rounded-[12px] p-[11px]"
            style={{
              backgroundImage: `url(${articles[currentIndex]?.cover_image})`,
              height: 600,
            }}
          >
            <h3 className="text-medium  bg-white rounded-[12px] w-[598px] h-[252px] p-[40px]">
              {articles[currentIndex]?.title}
            </h3>
            {/* <img
              src={articles[currentIndex]?.cover_image}
              className=" w-full"
            /> */}
          </div>
        </Link>

        <div className="flex gap-4 justify-end mt-[10px]">
          <button onClick={handleLeft}>
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="5.5"
                  stroke="#696A75"
                />
                <path
                  d="M23.5 27L16 19.5L23.5 12"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
          <button onClick={handleRight}>
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="5.5"
                  stroke="#696A75"
                />
                <path
                  d="M16 12L23.5 19.5L16 27"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
