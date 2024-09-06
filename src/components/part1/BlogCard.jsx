const BlogCardData = [
  {
    id: 1,
    title: "Technology",
    date: "August 20, 2022",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    url: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid",
  },
  {
    id: 2,
    title: "Technology",
    date: "August 20, 2022",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    url: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid",
  },
  {
    id: 3,
    title: "Technology",
    date: "August 20, 2022",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    url: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid",
  },
  {
    id: 4,
    title: "Technology",
    date: "August 20, 2022",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    url: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid",
  },
  {
    id: 5,
    title: "Technology",
    date: "August 20, 2022",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    url: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid",
  },
  {
    id: 6,
    title: "Technology",
    date: "August 20, 2022",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    url: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid",
  },
  {
    id: 7,
    title: "Technology",
    date: "August 20, 2022",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    url: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid",
  },
  {
    id: 8,
    title: "Technology",
    date: "August 20, 2022",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    url: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid",
  },
  {
    id: 9,
    title: "Technology",
    date: "August 20, 2022",
    description:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    url: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724889600&semt=ais_hybrid",
  },
];

export const BlogCard = () => {
  return BlogCardData.map((card) => (
    <div className="border-2 rounded-[12px] w-[392px] p-[16px] flex flex-col gap-[16px]">
      <div>
        <img src={card.url} alt="" />
      </div>
      <div className="p-[8px] flex flex-col gap-[16px]">
        <div className="text-[#4B6BFB]  bg-slate-100 w-[97px] h-[28px] text-center rounded-[6px]">
          {card.title}
        </div>
        <div className="flex text-wrap text-[24px] font-semibold">
          {card.description}
        </div>
        <div className="text-[#97989F]">{card.date}</div>
      </div>
    </div>
  ));
};
