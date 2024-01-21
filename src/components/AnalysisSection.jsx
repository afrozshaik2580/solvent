/* eslint-disable react/prop-types */
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";
import bg5 from "../assets/bg5.png";
const cards = [
  {
    img: bg2,
    title: "Competitor Analysis",
    description:
      "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
  },
  {
    img: bg3,
    title: "Online Presence and Branding",
    description:
      "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
  },
  {
    img: bg4,
    title: "Reduce your loosing",
    description:
      "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
  },
  {
    img: bg5,
    title: "Lead Generation Strategies",
    description:
      "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
  },
];

export default function AnalysisSection() {
  return (
    <div className="px-6 w-screen min-h-[650px] text-center overflow-hidden">
      <div className="h-1/3 flex flex-col justify-evenly">
        <h1 className="text-5xl font-extrabold">Market Analysis</h1>
        <p className="text-lg my-7">
          Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum,
          sed vel.
        </p>
      </div>
      <div className="sm:w-[100%] md:max-lg:w-[80%] mx-auto">
        <div className="flex sm:max-lg:flex-col lg:flex-wrap items-center justify-center">
          {cards.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </div>
      <div>
        <button className="border border-[#ef443b] p-4 font-semibold rounded-full hover:shadow-[1px_1px_10px_#ef443b] hover:text-[#ef443b]">
          STRATEGIC GROWTH INSIGHTS
        </button>
      </div>
    </div>
  );
}

function Card({ card }) {
  return (
    <div className="flex p-4 m-4 sm:max-lg:w-full lg:w-[40%] text-start space-x-4 ">
      <div className="shrink-0 w-[150px] h-[150px]">
        <img
          className="w-full h-full hover:brightness-110 transition-all ease-in-out duration-100 hover:scale-x-[.85]"
          src={card.img}
          alt=""
        />
      </div>
      <div className="2/3 space-y-3 w-full h-full">
        <h1 className="font-semibold  text-2xl">{card.title}</h1>
        <p className="text-gray-400">{card.description}</p>
        <button className="text-[#ef443b]">Learn more</button>
      </div>
    </div>
  );
}
