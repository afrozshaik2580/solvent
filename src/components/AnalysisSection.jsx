/* eslint-disable react/prop-types */
import Competitor from "../assets/Competitor.png";
import Branding from "../assets/Branding.png";
import Losing from "../assets/Losing.png";
import LeadGeneration from "../assets/LeadGeneration.png";
const cards = [
  {
    img: Competitor,
    title: "Competitor Analysis",
    description:
      "Stay ahead of the curve with data-driven insights. Our marketing analytics and strategy sservices ensure your campaigns are effective and impactful.",
  },
  {
    img: Branding,
    title: "Online Presence and Branding",
    description:
      "Brand identity, fosters customer loyalty, and from competitors. Engaging with audiences in real-time and leveraging data insights allows for strategic optimization and adaptation to evolving trends.",
  },
  {
    img: Losing,
    title: "Reduce your loosing",
    description:
      "Online presence and cohesive branding are essential for businesses to stand out and succeed. By maintaining consistency across channels, engaging with audiences, and leveraging data insights.",
  },
  {
    img: LeadGeneration,
    title: "Lead Generation Strategies",
    description:
      "Lead generation strategies are methods and tactics used by businesses to attract and capture the interest of potential customers (leads) with the goal of converting them into paying customers.",
  },
];

export default function AnalysisSection() {
  return (
    <div className="sm:px-1 px-6 w-screen min-h-[650px] text-center overflow-hidden">
      <div className="h-1/3 flex flex-col justify-evenly">
        <h1 className="text-5xl font-extrabold">Market Analysis</h1>
        <p className="text-lg my-7"></p>
      </div>
      <div className="sm:w-[100%] md:max-lg:w-[80%] mx-auto">
        <div className="flex sm:max-lg:flex-col lg:flex-wrap items-center justify-center">
          {cards.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </div>
      <div>
        {/* <button className="border-[1px] border-[#ef443b] p-4 font-semibold rounded-full hover:shadow-[1px_1px_10px_#ef443b] hover:text-[#ef443b]">
          STRATEGIC GROWTH INSIGHTS
        </button> */}
      </div>
    </div>
  );
}

function Card({ card }) {
  return (
    <div className="flex p-4 m-4 sm:max-lg:w-full lg:w-[40%] text-start space-x-4 ">
      <div className="shrink-0 sm:max-md:my-auto sm:w-[100px] md:w-[150px] sm:h-[100px] md:h-[150px]">
        <img
          className="w-full h-full hover:brightness-110 transition-all ease-in-out duration-100 hover:scale-x-[.85]"
          src={card.img}
          alt=""
        />
      </div>
      <div className="space-y-3 w-full h-full">
        <h1 className="font-semibold  text-2xl">{card.title}</h1>
        <p className="text-gray-400">{card.description}</p>
        {/* <button className="text-[#ef443b]">Learn more</button> */}
      </div>
    </div>
  );
}
