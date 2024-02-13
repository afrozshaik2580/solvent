import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  // faYoutube,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="md:px-7 md:py-6 sm:py-5">
      <div className="grid md:grid-cols-12 md:px-10 sm:px-3">
        <div className="col-span-5 p-7 pt-0 space-y-6 text-white">
          <h1 className="text-[#ef443b] text-2xl font-bold">Solvent</h1>
          <p>
            Welcome to TekSolvent, your strategic partner for navigating the
            digital landscape. Discover a suite of services designed to empower
            your business, from impactful website development to cutting-edge
            blockchain solutions.
          </p>
        </div>
        <div className="col-span-3 p-7 pt-0 space-y-6 text-white">
          <h1 className="text-[#ef443b] text-2xl font-bold">Links</h1>
          <ul className="space-y-2">
            <li className="w-full">How it works</li>
            <li className="w-full">Marketing</li>
            <li className="w-full">Features</li>
            <li className="w-full">Testimonial</li>
            <li className="w-full">Blogs</li>
          </ul>
          {/* <div className="col-span-3 p-7 pt-0 space-y-6 md:ml-5">
            <h1 className="text-[#ef443b] text-2xl font-bold">Legal</h1>
            <ul className="space-y-2">
              <li>Terms of use</li>
              <li>Terma of conditions</li>
              <li className="w-full">Privacy policy</li>
              <li>Cookie policy</li>
            </ul>
          </div> */}
        </div>
        <div className="col-span-4 p-7 pt-0 space-y-6 w-full min-w-[280px]">
          <h1 className="text-[#ef443b] text-2xl font-bold">Newsletter</h1>
          <p className="text-gray-300 text-xl">
            Over 25000 people have join us
          </p>
          <div>
            <div className="w-full h-12 rounded-full bg-white flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="h-full p-3 text-black outline-none rounded-l-full w-[60%]"
              />
              <button className="px-2 py-0 bg-red-500 w-[35%] rounded-full h-[80%] my-auto">
                Submit
              </button>
            </div>
            <p className="text-sm text-gray-300 px-2 mt-1">
              We don’t sell your email and spam
            </p>
          </div>
        </div>
      </div>
      <hr className="border-[1px] border-gray-600  w-[80%] mx-auto mt-4" />
      <div className="md:px-16 sm:px-5 md:pb-3 flex justify-between text-sm text-white">
        <div className="w-1/3 text-start space-x-4">
          <button>Privacy & Terms</button>
          <button>Contact Us</button>
        </div>
        <div className="w-1/3 text-center">
          <p>Copyright @ 2024 Solvent</p>
        </div>
        <div className="w-1/3 text-end space-x-4">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "white" }} />
          </a>
          {/* <a href="https://www.youtube.com">
            <FontAwesomeIcon icon={faYoutube} style={{ color: "white" }} />
          </a> */}
          <a href="https://www.linkedin.com">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} />
          </a>
          <a href="https://www.inst.com">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "white" }} />
          </a>
          <a href="https://twitter.com/SolventPvt">
            <FontAwesomeIcon icon={faTwitter} style={{ color: "white" }} />
          </a>
        </div>
      </div>
      <div className="md:px-16 sm:px-5 md:pb-3 sm:max-md:mt-3 flex space-x-3 sm:justify-center md:justify-start">
        <p>+91 (824) 740-8127</p>
        <p>Contact@teksolvent.com</p>
      </div>
    </div>
  );
}
