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
        <p className="py-0 ln-ht">Explore Our Services</p>
        <p className="fnt-sec1-b ln-ht2 mt-4">Ready to Transform Your Business?<br/>Explore our full range of services and how TekSolvent can take<br/> your business to new heights.</p>
        <div className='d-flex justify-content-start mt-5'>
    <button 
      className={`bt-sv d-flex ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
       See More
       <img src="./assets/white-arrow.png"/>
    </button>
    <button 
      className={`bt-sv2 d-flex ${isHovered2 ? 'hovered2' : ''}`}
      onMouseEnter={() => setIsHovered2(true)}
      onMouseLeave={() => setIsHovered2(false)}>
        <img src="./assets/msg-img.png" style={{marginRight:'5px'}}/> Messages
    </button>
</div>
        </div>

       </div>
       <div className='col-md-4 col-12'>
      <div className="container mr-img-ppl">
  <img src="./assets/peoples.gif.gif" className='' />
</div>
</div>
    </div>
       </div>

   );
  }