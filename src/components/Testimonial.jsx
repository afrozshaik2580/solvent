import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/TestimonialWhatMakesDifference.css";
import { TestimonialCardData } from '../components/data/TestimonialWhatMakesDifference';
import { WhatMakesUsDifferenceData } from '../components/data/TestimonialWhatMakesDifference';



export default function Testimonial(){
    return(
        <div>
        <WhatMakesUsDifference/>
        <TestimonialCard/>
         </div>
    )
}
export function TestimonialCard() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 1200,
      slidesToShow: 3,
      slidesToScroll: 3,
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
      <div className="Testimonial-card">
        <Slider {...settings}>
          {TestimonialCardData.map((item) => (
            <div className="cardMain">
            <div className="cardFirst">
                <div className='cardImages'>
                <img className='cardUserImage' src={item.linkImg} alt={item.title}/>
              </div>
              <div className='CardInfo'>
              <h2 className='cardUserName'>{item.title}</h2>
              <h5 className='cardUserProfession'>{item.description}</h5>
              </div>
            </div>
              {/* <div className="cardSecond">
                <h3 className='para'>Thank you so much - I can't believe how much we packed into a short conversation! The team is so friendly, and incredibly knowledgeable. It also helps that they are clearly incredibly passionate about their profession, and being on Growth Mentor!</h3>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  export function WhatMakesUsDifference(){
    return(
      <div className='Whatmakes-contents'>
        <h1 className='main-header'>What makes us different</h1>
        {WhatMakesUsDifferenceData.map((item) => (
        <>
        <h1 className='subHeaders' style={{color : item.color}}>{item.subHeader}</h1>
        <p className='contents'>{item.contents}</p>
        </>
        ))}

      </div>

    )
  }