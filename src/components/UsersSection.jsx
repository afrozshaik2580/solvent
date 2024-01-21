/* eslint-disable react/prop-types */
import quote from "../assets/quote.png";
import png1 from "../assets/Ellipse-6.png";
import png2 from "../assets/Ellipse-7.png";
import png3 from "../assets/Ellipse-8.png";

const users = [
  {
    description:
      "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
    img: png1,
    name: "Bessie Cooper",
    role: "lorem ipsum",
  },
  {
    description:
      "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
    img: png2,
    name: "Albert Flores",
    role: "lorem ipsum",
  },
  {
    description:
      "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.",
    img: png3,
    name: "Cameron Williamson",
    role: "lorem ipsum",
  },
];

export default function UsersSection() {
  // <div className="overflow-hidden">
  //   <div
  //     data={<UsersSection />}
  //     className="relative whitespace-nowrap animate-[t_7s_linear_infinite] before:content-[attr(data)] after:content-[attr(data)] after:absolute after:left-full after:top-0"
  //   ></div>
  // </div>;
  return (
    <div className="py-6 px-6 w-screen h-[600px] text-center overflow-hidden">
      <div className="h-1/3 flex flex-col justify-evenly mb-5">
        <h1 className="text-5xl font-extrabold">30 Million Users Worldwide</h1>
        <p className="text-lg">
          Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum,
          sed vel.
        </p>
      </div>
      <div className="mask w-4/5 h-2/3 mx-auto overflow-hidden">
        <div className="w-full h-full inline-block relative animate-[t_10s_linear_infinite]">
          <div content className="flex w-full h-full whitespace-nowrap">
            {users.map((user, index) => (
              <UserCard user={user} key={index} />
            ))}
          </div>
          <div className="flex w-full h-full whitespace-nowrap absolute left-[1000px] top-0">
            {users.map((user, index) => (
              <UserCard user={user} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function UserCard({ user }) {
  return (
    <div
      className={`w-[300px] mx-4 h-full flex flex-col flex-none justify-evenly border border-[#ef443b] rounded-3xl shadow-[1px_1px_10px_#ef443b]`}
    >
      <div className="flex items-center justify-center">
        <img className="w-16" src={quote} alt="" />
      </div>
      <div>
        <p className="text-gray-400 whitespace-normal p-4">
          {user.description}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-1">
        <img src={user.img} alt="" />
        <h1 className="font-bold text-xl">{user.name}</h1>
        <p>{user.role}</p>
      </div>
    </div>
  );
}
