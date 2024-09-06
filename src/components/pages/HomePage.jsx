import { BlogPost } from "../part1/BlogPost";
import { Carousel } from "../part1/Carousel";
import { Header } from "../part1/Header";
import { End } from "../part1/End";

export const HomePage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex h-auto justify-center">
        <div className="flex flex-col container w-[1216px] gap-[100px]  ">
          <Header />
          <Carousel />
          <BlogPost />
          <End />
        </div>
      </div>
    </div>
  );
};
