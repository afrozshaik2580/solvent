import BDA from "../assets/BDA.png";
import CED from "../assets/CED.png";
import CO from "../assets/CO.png";
import DPR from "../assets/DPR.png";
import LBC from "../assets/LBC.png";
import MR from "../assets/MR.png";
import MSO from "../assets/MSO.png";
import NS from "../assets/NS.png";
// import FC from "../assets/free-consultation.png";
// import RAQ from "../assets/afree-quote.png";

const items = [
  {
    img: DPR,
    title: "Digital PR Link-Building",
    description:
      "Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    img: LBC,
    title: "Link Building & Content",
    description:
      "Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    img: MSO,
    title: "Maps Search Optimization",
    description:
      "Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    img: BDA,
    title: "Big Data Analysis",
    description:
      "Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    img: CED,
    title: "Custom Email Design",
    description:
      "Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    img: MR,
    title: "Monitoring Ranking",
    description:
      "Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    img: CO,
    title: "Code Optimization",
    description:
      "Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
  {
    img: NS,
    title: "Nap Syndication",
    description:
      "Lorem ipsum dolor sit amet adipiscing elit ut aliquam, purus sit amet luctus venenatis",
  },
];

export default function DigitalMarketing() {
  const item = items[0];
  return (
    <div className="bg-background text-white text-center p-6">
      <div className="sm:px-6 md:px-20 lg:px-40">
        <h1>Full Service Digital Marketing Agency</h1>
        <hr className="border-[1px] mx-auto w-28 border-[#ef443b] brightness-[150%]" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praes
        </p>
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap items-center justify-around ">
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="p-3">
        <button className="p-3 m-3 rounded-full border-1 border-white hover:bg-[#ef443b] transition-colors ease-in-out duration-300">
          FREE SEO CONSULTATION
        </button>
        <button className="p-3 m-3 rounded-full border-2 border-white hover:bg-[#ef443b] transition-colors ease-in-out duration-300">
          REQUEST AFREE QUOTE
        </button>
      </div>
    </div>
  );
}

function Card({ item }) {
  return (
    <div className="w-[275px] h-[425px] mx-2 my-3 bg-white rounded-2xl border-[1px] border-white p-4 text-left text-black hover:[background:linear-gradient(rgb(239,68,59)_0%,rgb(132,42,55)_100%)]">
      <div className="h-[40%]">
        <div className="rounded-full shadow-lg inline-block p-4 bg-white transition-all duration-300 hover:rotate-[360deg]">
          <img className="w-20 h-20" src={item.img} alt="" />
        </div>
      </div>
      <div className="h-[60%] space-y-6">
        <h4 className="font-normal h-[20%]">{item.title}</h4>
        <p className="text-gray-400 h-[30%]">{item.description}</p>
        <button className="text-[#7660ee] h-[30%] font-medium">
          VIEW MORE {"->"}
        </button>
      </div>
    </div>
  );
}
