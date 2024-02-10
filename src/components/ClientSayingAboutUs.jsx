import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/ClientSayingAboutUs.css";
import { ClientSayingAboutUsCardData } from '../components/data/ClientSayingAboutUsData';


export default function AboutUsCard(){
  const divStyle = {
    backgroundColor: '#160E33', 
  };
    return(
      <div style={divStyle}>
        <div className='outerCard'>
            <div className='AboutUscardHeading'>
        <h1 className='HeadingData'>Here is what our Clients are saying About us</h1>
            </div>
    <AboutCardSection/>
        </div>
      </div>
    )
}
export function AboutCardSection() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
  
    return (
      <div className="AboutUscardSection">
        <Slider {...settings}>
          {ClientSayingAboutUsCardData.map((item) => (
            <div className="AboutUscardMain">
            <div className="AboutUscardFirst">
                <div>
                <img className='AboutUscardUserImage' src={item.linkImg} alt={item.title}/>
              </div>
            </div>
              <div className="AboutUscardSecond">
              <h2 className='AboutUscardUserName'>{item.title}</h2>
                <p className='AboutUscardpara'>Thank you so much - I can't believe how much we packed into a short conversation! The team is so friendly, and incredibly knowledgeable. It also helps that they are clearly incredibly passionate about their profession, and being on Growth Mentor!</p>
              <p className='Date'>May 27 2023</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
