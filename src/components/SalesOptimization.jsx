import ladder from "../assets/ladder.png";
import tower from "../assets/tower.png";

export default function SalesOptimization() {
  return (
    <div className="flex bg-background text-white items-center pl-16 pr-10 py-6">
      <div className="sm:mt-20 sm:w-full md:w-1/2 space-y-10 hover:scale-90 transition-all duration-300">
        <div className="w-20">
          <img src={tower} alt="" />
        </div>
        <h1 className="font-normal">Sales Optimization & Data Analysis</h1>
        <p className="text-gray-200">
          lorem ipsum dolor amit sit lorem ipsum dolor amit sit lorem ipsum
          dolor amit sit lorem ipsum dolor amit sit lorem ipsum dolor amit sit
        </p>
        <button className="p-3 bg-[#ef443b] rounded-full">
          VIEW DETAILS →
        </button>
      </div>
      <div className=" sm:hidden md:inline-block md:w-1/2 flex justify-center items-center">
        <img src={ladder} alt="" />
      </div>
    </div>
  );
}
