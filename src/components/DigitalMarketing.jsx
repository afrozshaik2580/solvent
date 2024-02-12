import BDA from "../assets/bda2.png";
import CED from "../assets/ced2.png";
import CO from "../assets/co2.png";
import DPR from "../assets/DPR.png";
import LBC from "../assets/lbc2.png";
import MR from "../assets/mr2.png";
import MSO from "../assets/mso2.png";
import NS from "../assets/ns2.png";
// import FC from "../assets/free-consultation.png";
// import RAQ from "../assets/afree-quote.png";
import "../styles/Styles.css";

const items = [
  {
    img: DPR,
    title: "Influencer Marketing",
    description: "Boost your brand's credibility and reach through industry influencer connections. Our strategies identify influencers aligned with your brand values, fostering authentic collaborations that resonate with your target audience.",
  },
  {
    img: LBC,
    title: "Content Marketing",
    description: "Craft a strong Content Marketing strategy to engage and educate your audience. We produce quality, relevant content reflecting your brand voice, resonating with your audience, driving organic traffic, and establishing thought leadership.",
  },
  {
    img: MSO,
    title: "Marketing Analytics and Strategy",
    description: "Excel beyond rivals with our data-driven Marketing Analytics and Strategy. We analyze indicators, customer behavior, and market trends for actionable insights. Our strategic recommendations ensure maximum campaign impact and ROI.",
  },
  {
    img: BDA,
    title: "Social Media Marketing",
    description: "Harness social media's potential to amplify your brand presence. Our Social Media Marketing employs targeted advertising, content creation, and audience engagement to boost brand awareness, generate leads, and drive conversions.",
  },
  {
    img: CED,
    title: "Social Media Management",
    description: "Create a thriving online community with our Social Media Management. We curate and engage with tailored content, bolstering brand visibility and nurturing customer relationships through active social channel monitoring.",
  },
  {
    img: MR,
    title: "Search Engine Optimization",
    description: "Enhance your website's visibility and rankings with our SEO expertise. We optimize content, make technical improvements, and utilize industry-best practices for better online presence.",
  },
  {
    img: CO,
    title: "Email Marketing",
    description: "Create engaging email campaigns to connect with your audience. Our Email Marketing strategies include personalized newsletters and promotions, fostering customer loyalty, driving conversions, and maintaining brand visibility.",
  },
  {
    img: NS,
    title: "Pay Par Click",
    description: "Harness the power of paid advertising with our PPC services. We design and manage targeted campaigns on platforms like Google Ads and social media to maximize visibility, drive traffic, and achieve your specific business goals.",
  },
];

export default function DigitalMarketing() {
  const item = items[0];
  return (
    <div className="bg-background text-white text-center p-6">
      <div className="sm:px-6 md:px-20 lg:px-40">
        <h1>Empower Your Brand</h1>
        <hr className="border-[1px] mx-auto w-28 border-[#ef443b] brightness-[150%]" />
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap items-center justify-around ">
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
      {/* <div className="p-3">
        <button className="p-3 m-3 rounded-full border-1 border-white hover:bg-[#ef443b] transition-colors ease-in-out duration-300">
          FREE SEO CONSULTATION
        </button>
        <button className="p-3 m-3 rounded-full border-2 border-white hover:bg-[#ef443b] transition-colors ease-in-out duration-300">
          REQUEST AFREE QUOTE
        </button>
      </div> */}
    </div>
  );
}

function Card({ item }) {
  return (
    <div className="w-[275px] h-[490px] mx-2 my-3 bg-white rounded-2xl border-[1px] border-white p-4 text-left text-black hover:[background:linear-gradient(rgb(239,68,59)_0%,rgb(132,42,55)_100%)]">
      <div className="h-[40%] text-center">
        <div className="rounded-full shadow-lg inline-block p-4 bg-white transition-all duration-300 hover:rotate-[360deg] justify-content-center">
          <img className="w-20 h-20" src={item.img} alt="" />
        </div>
      </div>
      <div className="h-[60%] space-y-6">
        <h4 className="fnt-digital font-normal h-[15%] ">{item.title}</h4>
        <p className="fnt-digital2 h-[30%]">{item.description}</p>
        {/* <button className="text-[#7660ee] h-[30%] font-medium">
          VIEW MORE {"->"}
        </button> */}
      </div>
    </div>
  );
}
