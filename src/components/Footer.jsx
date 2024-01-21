export default function Footer() {
  return (
    <div className="px-7">
      <div className="grid md:grid-cols-12 md:px-14 sm:px-10">
        <div className="col-span-3 p-7 pt-0 space-y-6">
          <h1 className="text-[#ef443b] text-2xl font-bold">Solvent</h1>
          <p>
            Massa blandit semper varius faucibus. Suspendisse viverra venenatis
            placerat nam ut. Pellentesque sit id tempor turpis.
          </p>
        </div>
        <div className="col-span-5 grid grid-cols-5">
          <div className="col-span-2 p-7 pt-0 space-y-6">
            <h1 className="text-[#ef443b] text-2xl font-bold">Links</h1>
            <ul className="space-y-2">
              <li>How it works</li>
              <li>Marketing</li>
              <li>Features</li>
              <li>Testimonial</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="col-span-3 p-7 pt-0 space-y-6">
            <h1 className="text-[#ef443b] text-2xl font-bold">Legal</h1>
            <ul className="space-y-2">
              <li>Terms of use</li>
              <li>Terma of conditions</li>
              <li>Privacy policy</li>
              <li>Cookie policy</li>
            </ul>
          </div>
        </div>
        <div className="col-span-4 p-7 pt-0 space-y-6">
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
      <div className="md:px-24 sm:px-11 py-5 flex justify-between text-sm ">
        <div className="w-1/3 text-start space-x-4">
          <button>Privacy & Terms</button>
          <button>Contact Us</button>
        </div>
        <div className="w-1/3 text-center">
          <p>Copyright @ 2024 Solvent</p>
        </div>
        <div className="w-1/3 text-end space-x-4">
          <button>Y</button>
          <button>L</button>
          <button>F</button>
          <button>B</button>
        </div>
      </div>
    </div>
  );
}
