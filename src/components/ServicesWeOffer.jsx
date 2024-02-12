import "./../styles/ServicesWeOffer.css";
import mainImage from "./../assets/Rectangle58.png";
import logistics from "../assets/logistics.png";
import onlineEducation from "../assets/online-education.png";
import healthcare from "../assets/healthcare.png";
import groceryCart from "../assets/grocery-cart.png";
import s0 from "../assets/s0.png";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import s7 from "../assets/s7.png";
import s8 from "../assets/s8.png";

export default function ServicesWeOffer() {
  return (
    <>
      <img src={mainImage} alt="" className="mainImage" />
      <div className="firstSection">
        <h1 className="mainHeader">WHO IS IT FOR</h1>
        <div className="mainFancyCardContainer">
          <FancyCards />
        </div>
      </div>
      {/* <div className="firstSection">
        <h1 className="mainHeader">Services we offer</h1>
 <div className="mainFancyCardContainer">
 <AnimatedCards/>
 </div>
        </div> */}
      <img />
    </>
  );
}

function FancyCards() {
  const Images = [
    {
      image: onlineEducation,
      imageText: "Empovering learning through innovative technology solutions.",
    },
    {
      image: healthcare,
      imageText:
        "Providing cutting-edge medical services and solutions for optimal wellness.",
    },
    {
      image: groceryCart,
      imageText:
        "Fresh, quality essentials delivered to you for convenience and satisfaction.",
    },
    {
      image: logistics,
      imageText:
        "Effeciently managing supply chains for seamless transportation and delivery.",
    },
  ];
  return (
    <>
      {Images.map((item) => (
        <div className="folder-icon">
          <img
            style={{ width: "50%", height: "40%" }}
            src={item.image}
            alt=""
            className="folderCardImage"
          />
          <p className="imageText">{item.imageText}</p>
          <img />
        </div>
      ))}
    </>
  );
}

function AnimatedCards() {
  const Images = [
    {
      image: s0,
      imageText:
        "If you are an early stage Web3 startup with a tech-heavy founding team.",
    },
    {
      image: s1,
      imageText: "If your startup has been recently funded.",
    },
    {
      image: s2,
      imageText:
        "If you are an early stage Web3 startup with a tech-heavy founding team.",
    },
    {
      image: s3,
      imageText:
        "If you are an early stage Web3 startup with a tech-heavy founding team.",
    },
    {
      image: s4,
      imageText:
        "If you are an early stage Web3 startup with a tech-heavy founding team.",
    },
    {
      image: s5,
      imageText: "If your startup has been recently funded.",
    },
    {
      image: s6,
      imageText:
        "If you are an early stage Web3 startup with a tech-heavy founding team.",
    },
    {
      image: s2,
      imageText:
        "If you are an early stage Web3 startup with a tech-heavy founding team.",
    },
    {
      image: s4,
      imageText:
        "If you are an early stage Web3 startup with a tech-heavy founding team.",
    },
    {
      image: s7,
      imageText:
        "If you are an early stage Web3 startup with a tech-heavy founding team.",
    },
    {
      image: s8,
      imageText:
        "If you are an early stage Web3 startup with a tech-heavy founding team.",
    },
  ];
  return (
    <>
      {Images.map((item) => (
        <>
          <div className="AnimatedCard">
            <img
              src={item.image}
              alt={item.image}
              className="AnimatedCardImage"
            />
            <div>
              <p className="AnimatedimageText">{item.imageText}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
