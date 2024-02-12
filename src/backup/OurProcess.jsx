import React from "react";
import learn from "../assets/learn.png";
import strategize from "../assets/strategize.png";
import create from "../assets/create.png";
import execute from "../assets/execute.png";
import iterate from "../assets/iterate.png";
import wagmi from "../assets/wagmi.png";

const dataTop = [
  { title: "Finalize Deliverables", img: learn },
  { title: "Executing Tasks", img: strategize },
  { title: "Quality Assurance", img: create },
];
const dataBottom = [
  { title: "Review and Approval", img: execute },
  { title: "Hand Over", img: iterate },
  { title: "Closure", img: wagmi },
];

export default function OurProcess() {
  return (
    <div className="bg-background h-[580px] text-white font-serif py-12 sm:px-10 md:px-16 lg:px-28">
      <div>
        <h1 className="text-4xl">OUR PROCESS</h1>
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
          <div className="absolute left-[1070px] top-0">
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
    <div className="mx-3 my-2 w-[325px] h-[200px] border-2 border-[#ef443b] rounded-3xl grid grid-rows-2 overflow-hidden relative">
      <div className="row-span-1 bg-[#756eb3] border-b-2 border-[#ef443b]"></div>
      <div className="absolute top-[45%] left-[50%] [transform:translate(-50%,-50%);] w-[85px] h-[85px] rounded-full overflow-hidden border-2 border-[#ef443b]">
        <img src={card.img} alt="" />
      </div>
      <div className="row-span-1 bg-[#473d9a] w-full h-full flex items-center justify-center">
        <h1 className="text-3xl mt-3">{card.title}</h1>
      </div>
    </div>
  );
}
