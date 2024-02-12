import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
const arr = ["First Name", "Last Name", "Email", "Phone Number"];
export default function ContactSection() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="py-6 px-6 md:h-[600px] w-screen overflow-hidden ">
      <div className="p-4 w-[90%] h-full mx-auto bg-white rounded-2xl md:flex">
        <div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="md:w-[40%] p-7 h-full bg-[#160e33] relative overflow-hidden"
        >
          <div className="h-[30%]">
            <h1 className="text-3xl font-bold m-2">Contact Information</h1>
            <p className="text-gray-300 m-2">
              Say something to start a live chat!
            </p>
          </div>
          <div className="h-[70%]">
            <div className="m-2">
              <p>
                <FontAwesomeIcon icon={faPhone} />
                +1012 3456 789
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                demo@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
          </div>
          <div className="absolute w-[250px] h-[250px] top-[65%] left-[55%] bg-gray-100 opacity-15 rounded-full"></div>
          <div
            className={`${
              hovering
                ? "w-full h-full left-0 top-0 [clip-path:polygon(0_0,100%_100%,0_100%)] [animation:spin_0.1s_linear_2]"
                : "w-[130px] h-[130px] top-[60%]  left-[50%] rounded-full"
            } absolute duration-300 transition-all ease-in-out bg-gray-100 opacity-15`}
          ></div>
        </div>

        <div className="md:w-[60%] p-7 pl-4 h-full">
          <form action="" className="w-full text-black">
            <div className="flex flex-wrap sm:max-md:flex-col whitespace-nowrap w-full">
              {arr.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col p-2 my-2 w-full md:w-[50%]"
                >
                  <label htmlFor={item}>{item}</label>
                  <input
                    className="md:w-[90%] w-full border-b-[1px] px-2 py-1 text-sm border-black focus:outline-none flex-shrink-0"
                    type="text"
                    placeholder=""
                  />
                </div>
              ))}
            </div>

            <div className="">
              <h1 className="font-semibold text-base my-3 px-3">
                Select Subject?
              </h1>
              <div className="flex flex-wrap justify-around">
                {arr.map((item, index) => (
                  <div
                    key={index}
                    className="flex mx-3 my-2 space-x-3 justify-center items-center"
                  >
                    <input type="checkbox" className="mt-[2px]"></input>
                    <p className="text-sm m-0 pl-1">General Enquiry</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="m-3">
              <h1 className="text-base">Message</h1>
              <input
                className="w-full border-b-[1px] p-2 text-sm border-black focus:outline-none flex-shrink-0"
                type="text"
                placeholder="Write your Message.."
              />
            </div>

            <div className="flex justify-end w-[95%]">
              <button className="px-6 py-3 border-2 border-[#ef443b] bg-[#160e33] text-[white] rounded-full hover:bg-white hover:text-red-600 hover:shadow-[#ef443b] hover:shadow-xl transition-all duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
