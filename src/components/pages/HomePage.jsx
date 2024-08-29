import { BlogPost } from "../part1/BlogPost"
import { Carousel } from "../part1/Carousel"
import { Header } from "../part1/Header"
import { Trending } from "../part1/Trending"
import { BlogCard } from "../part1/BlogCard"
import { End } from "../part1/End"

export const HomePage =() =>{
    return (<div className="flex justify-center">
    <div className=" flex flex-col gap-[100px]  container">
        <Header/>
        <Carousel />
        <Trending />
        <BlogPost />
        <BlogCard />
        <End />
        </div></div>
    )
}