import React, { useState } from 'react';
import "../styles/ServicesSeeMoreStyles.css";

export default function ServicesOne() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    return (
        <div className="bg-clservices text-white fnt-fam  " styles={{  }}>
       <div className='row align-items-center mr-left' style={{display:'flex'}}>
       <div className='col-md-8 col-12 text-start'>
        <div className='text-start fnt-sec1'>
        <p className="py-0 ln-ht">Премиальное <br/>обслуживание <br/>вашего автомобиля</p>
        </div>

<div className='d-flex justify-content-start mt-5'>
    {/* <button className="">See More</button> */}
    <button 
      className={`bt-sv d-flex ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
   See More
   <img src="./assets/white-arrow.png"/>
   
    </button>
    {/* <button className="">Messages</button> */}
    <button 
      className={`bt-sv2 d-flex ${isHovered2 ? 'hovered2' : ''}`}
      onMouseEnter={() => setIsHovered2(true)}
      onMouseLeave={() => setIsHovered2(false)}
    ><img src="./assets/msg-img.png" style={{marginRight:'5px'}}/> Messages</button>
</div>
</div>
<div className='col-md-4 col-12'>
  {/* <div className="">
<img src="./assets/person-img.webp"/>
</div> */}
      <div className="container mr-img-ppl">
    {/* <div className="gallery ">
    <img src="./assets/person-img.webp" className='gif-img' />
        <img src="./assets/violet-img.jpeg"  className=' gif-img3 gif-img2 circle0'/>
    
        <img src="./assets/mic-img.webp" className='gif-img5 gif-img2 circle0 mar-mic-img'/>
          <img src="./assets/person2.webp"  className='gif-img4'/>
    </div> */}
  <img src="./assets/peoples.gif.gif" className='' />


</div>
{/* <div className="container">
  <div className="circle0"></div>
   <div class="circle1"></div>
  <div class="circle2"></div>
  <div class="circle3"></div>
  <div class="circle4"></div>
  <div class="circle5"></div> 
</div> */}
    </div>
       </div>
        </div>
    );
  }
  