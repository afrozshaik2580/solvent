import emailMarketing from "../assets/emailMarketing.webp";
import analyticsAndTracking from "../assets/analyticsAndTracking.webp";
import contentCreation from "../assets/contentCreation.webp";
import payPerClick from "../assets/payPerClick.webp";
import searchEngine from "../assets/searchEngine.webp";
import socialMediaMarketing from "../assets/socialMediaMarketing.webp";
// import arrow from "../assets/arrow.svg";

const dataTop = [
  {
    title: "Email/Marketing",
    background: "white",
    img: emailMarketing,
  },
  {
    title: "Social Media/Marketing",
    background: "black",
    img: socialMediaMarketing,
  },
  {
    title: "Search Engine/Optimization",
    background: "white",
    img: searchEngine,
  },
];
const dataBottom = [
  {
    title: "Analytics and/Tracking",
    background: "white",
    img: analyticsAndTracking,
  },
  { title: "Content/Creation", background: "black", img: contentCreation },
  { title: "Pay-Per-Click/Adventising", background: "white", img: payPerClick },
];

export default function MarketingSection() {
  return (
    <div className="py-12 relative overflow-hidden">
      <div className="absolute w-[1500px] left-[-200px] h-[90%] rotate-12 [background:linear-gradient(180deg,rgba(235,67,59,1)_17%,rgba(22,14,51,1)_70%)] []"></div>
      <div className="my-7 sm:mx-9 md:mx-20 lg:mx-32 overflow-hidden [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)]">
        <div className="inline-block relative animate-[marketing_15s_linear_infinite]">
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
          <div className="absolute left-[1295px] top-0">
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
  const ind = card.title.indexOf("/");

  return (
    <div
      className={`w-[400px] h-[200px] m-3 bg-${
        card.background
      } flex whitespace-nowrap border-2 border-black rounded-2xl [box-shadow:3px_10px_7px_0px_${
        card.background === "black" ? "rgb(76,76,76)" : "black"
      }]`}
    >
      <div className="w-1/2 h-full flex flex-col py-4 px-3 justify-between">
        <div>
          <h5 className="text-[#ef443b]">
            <span className="rounded-lg px-1 bg-[#e7e7e7]">
              {card.title.substring(0, ind)}
            </span>
            <br />
            <span className="rounded-lg px-1 bg-[#e7e7e7]">
              {card.title.substring(ind + 1)}
            </span>
          </h5>
        </div>
        <div>
          <div className="flex items-center w-full space-x-2">
            <div
              className={`bg-${
                card.background === "black" ? "white" : "black"
              } inline-block rounded-full p-[7px]`}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 21 20"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 13.7009C0.532561 14.1151 0.286748 15.0325 0.700962 15.75C1.11518 16.4674 2.03256 16.7132 2.75 16.299L1.25 13.7009ZM20.7694 5.3882C20.9838 4.588 20.5089 3.76549 19.7087 3.55108L6.66874 0.0570236C5.86854 -0.157389 5.04603 0.317484 4.83162 1.11768C4.61721 1.91788 5.09208 2.74039 5.89228 2.9548L17.4834 6.06063L14.3776 17.6517C14.1631 18.4519 14.638 19.2744 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.3882ZM2.75 16.299L20.0705 6.29901L18.5705 3.70093L1.25 13.7009L2.75 16.299Z"
                  fill="#EF443B"
                />
              </svg>
            </div>
            <p
              className={`text-${
                card.background === "black" ? "white" : "black"
              }`}
            >
              Learn more
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <img className="w-[90%]" src={card.img} alt="" />
      </div>
    </div>
  );
}
