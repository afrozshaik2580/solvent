import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/AttractiveFeaturesAvailableServices.css";
import { availableServices_cardData } from './data/AttractiveFeaturesAvailableServData';

export default function AvailableServices(){
  return(
    <>
    <h1 className="header">Available Services</h1>
    <h3 className="subHeader">Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</h3>
    <AvailableServicesCarousel/>
    </>
  )
};

export function AvailableServicesCarousel() {
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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="card-container">
      <Slider {...settings}>
        {availableServices_cardData.map((item , index) => (
          <div className="cardBody" key={index}>
            <div className="card-top">
              <img src={ item.linkImg } alt={item.title}/>
            </div>
            <div className='CardBottom'>
            <div className='topHeader'>
            <h1 className='CarouselcardHeader'>{item.title}</h1>
            <p className='card-description'>{item.description}</p>
            </div>
            <div className="card-bottom">
              <button className='card-button'>Read more</button>
            </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

