import RNA from "../assets/RNA.jpg";
import DP from "../assets/DAP.png";
import DI from "../assets/DI.png";
import TQA from "../assets/TQA.png";
import DL from "../assets/DL.png";
import SM from "../assets/SM.png";

const dataTop = [
  { title: "Research & Need Analysis", img: RNA },
  { title: "Design & Prototyping", img: DP },
  { title: "Development & Implementation", img: DI },
];
const dataBottom = [
  { title: "Testing & Quality Assurance", img: TQA },
  { title: "Deployment & Launch", img: DL },
  { title: "Support & Maintainance", img: SM },
];

export default function OurProcess() {
  return (
    <div className="bg-background h-[580px] text-white font-serif py-12 sm:px-10 md:px-16 lg:px-28">
      <div>
        <h1 className="text-4xl relative">OUR PROCESS</h1>
      </div>
      <div className="my-7 overflow-hidden [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)]">
        <div className="inline-block relative animate-[process_10s_linear_infinite]">
          <div>
            <div className="flex whitespace-nowrap">
              {dataTop.map((item, index) => (
                <Card key={index} card={item} />
              ))}
            </div>
            <div className="flex whitespace-nowrap">
              {dataBottom.map((item, index) => (
                <Card key={index} card={item} />
              ))}
            </div>
          </div>
          <div className="absolute left-[1150px] top-0">
            <div className="flex whitespace-nowrap">
              {dataTop.map((item, index) => (
                <Card key={index} card={item} />
              ))}
            </div>
            <div className="flex whitespace-nowrap">
              {dataBottom.map((item, index) => (
                <Card key={index} card={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ card }) {
  return (
    <div className="mx-3 my-2 w-[350px] h-[200px] border-2 border-[#ef443b] rounded-3xl grid grid-rows-2 overflow-hidden relative">
      <div className="row-span-1 bg-[#756eb3] border-b-2 border-[#ef443b]"></div>
      <div className="absolute top-[45%] left-[50%] [transform:translate(-50%,-50%);] w-[85px] h-[85px] rounded-full overflow-hidden border-2 border-[#ef443b]">
        <img src={card.img} alt="" />
      </div>
      <div className="row-span-1 bg-[#473d9a] w-full h-full flex items-center justify-center">
        <h1 className="text-2xl mt-3">{card.title}</h1>
      </div>
    </div>
  );
}
