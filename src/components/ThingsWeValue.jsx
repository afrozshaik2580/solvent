import frame2 from "../assets/Frame-2.png";
import frame3 from "../assets/Frame-7.png";
import frame4 from "../assets/Frame-8.png";
import frame5 from "../assets/Frame-9.png";
import frame6 from "../assets/Frame-10.png";
import frame7 from "../assets/Frame-11.png";

const array = [
  { img: frame6, title: "Excellence" },
  { img: frame7, title: "Innovation" },
  { img: frame5, title: "Integrity" },
  { img: frame4, title: "Collaboration" },
  { img: frame3, title: "Customer Value" },
  { img: frame2, title: "Care and share" },
];

export default function ThingsWeValue() {
  return (
    <div className="h-[600px] sm:py-20 sm:px-10 md:px-20 md:py-28 pt-3">
      {/* <div className="w-[400px] h-[200px] absolute z-50 bg-transparent [box-shadow:inset_-50px_0px_100px_-10px_rgba(0,0,0,0.74)]"></div> */}
      <div>
        <h1 className="sm:text-5xl md:text-6xl text-center lg:text-7xl m-0">
          6 things we value
        </h1>
      </div>
      <div className="sm:mx-10 md:mx-16 lg:mx-28 my-16 overflow-hidden [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)]">
        <div className="inline-block relative animate-[things_15s_linear_infinite]">
          <div className="flex whitespace-nowrap">
            {array.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
          <div className="flex whitespace-nowrap absolute left-[1790px] top-0">
            {array.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ item }) {
  return (
    <div
      style={{ backgroundImage: `url(${item.img})` }}
      className="-z-10 w-[250px] h-[375px] flex items-center justify-center bg-green-500 mx-4 shrink-0 bg-cover border-[2px] border-[#ef443b]"
    >
      <h1 className="text-3xl">{item.title}</h1>
    </div>
  );
}
