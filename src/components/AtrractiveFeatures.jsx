import { attractiveFeatures_cardData } from './data/AttractiveFeaturesAvailableServData';
import "../styles/AttractiveFeaturesAvailableServices.css";
import CardMainImage from "../assets/bgcomp.png"

export default function AttractiveFeatures(){
return(
    <>
    <h1 className="header">Atrractive Features</h1>
    <h3 className='subHeader'>Windaful makes playing the UK's best raffles easy and fun.</h3>
    <Card/>
    <ImageCard/>
    </>


);
}

export function Card(){
return(
    <div className="small-mainCard">
    {attractiveFeatures_cardData.map((card, index) => (
          <CardContainer key={index} {...card} />
        ))}
    </div>
);    
}

export function CardContainer({ imageUrl, cardtitle, cardSubtitle, cardBody }) {
    return (
      <div className="small-card-container">
        <div className="small-image-container">
        <img src={imageUrl} alt="" className="small-card-img"/>
        <h2 className="small-cardHeader">
          {cardtitle}<br />
          {cardSubtitle}
        </h2>
        </div>
        <p className="card-description">{cardBody}</p>
      </div>
    );
  }  
 
  function ImageCard(){
    return(
      <>
      <div className="main-container">
      <img src={CardMainImage} alt="" className="imageContainer" />
      <div className='imageContainer-body'>
       <h2 className='imageContainer-header'>By incorporating these features, you can create a website that not only enhances Solvent's brand presence but also generates 
        high-quality leads and facilitates potential online sales.</h2>
      </div>
      <div className='image-buttons-container'>
        <button className='image-button-1'>Elevate Our Presence</button>
        <button className='image-button-2'>Ignite Growth Online</button>
      </div>
      </div>
      </>
    )
  }