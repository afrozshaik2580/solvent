import { useEffect } from "react";
import chatcall from "../assets/chatcall.webp";
import contactHero from "../assets/contactHero.webp";
import { useState } from "react";

export default function GetInTouch() {
  const [prevPosition, setPrevPosition] = useState(0);
  const [roll, setRoll] = useState(false);

  function handleScroll() {
    const currentPosition = window.scrollY;
    if (currentPosition > prevPosition) {
      setRoll(true);
    } else {
      setRoll(false);
    }
    setPrevPosition(currentPosition);
  }

  useEffect(function () {
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sm:mt-5 sm:px-6 md:px-10 lg:px-16 pt-10 pb-20 sm:max-md:text-center text-white md:flex flex-row [background:linear-gradient(344deg,rgba(229,66,59,1)_40%,rgba(22,14,51,1)_60%)] md:[clip-path:polygon(0_0,100%_0,100%_73%,0%_100%);]">
      <div className="md:basis-2/5 space-y-11 w-full">
        <div
          className={`min-w-[60px] w-[20%] mt-5 transition-all ${
            roll ? "rotate-180 translate-x-32" : ""
          }`}
        >
          <img src={chatcall} alt="" />
        </div>
        <div>
          <h1>Your dream websites, made a reality</h1>
        </div>
        <div>
          <p className="text-2xl font-light">
            Modern custom designs tailored to your every want & need,so you can
            focus on what matters .
          </p>
        </div>
        <div>
          <button className="bg-black p-6 text-3xl rounded-lg">
            Get In Touch
          </button>
        </div>
      </div>
      <div className="md:basis-3/5 flex items-center justify-center pt-4">
        <img
          className="-rotate-[10deg] scale-90 translate-y-5 hover:scale-75 transition-transform"
          src={contactHero}
          alt=""
        />
      </div>
    </div>
  );
}
