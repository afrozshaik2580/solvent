import React, { useState } from 'react';
import "../styles/MainFeaturesStyles.css";

export default function ServicesOne() {
    return (
        <div className="bg-main text-center text-white fnt-fam mt-0 mb-0" styles={{  }}>
          <p className="fnt-m1">Main Features</p>
          <p className="mr-t-m">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. 
            Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. 
            Id vel in nam malesuada.</p>
            <div className="row justify-content-center">
<div className='col-md-4 col-12 mr-mb'>
<div className="flip-container02 justify-content-center" ontouchstart="this.classList.toggle('hover');">
    <div className="image-container02">
 <img src="./assets/ic-1.png" className='text-center dp-im image02' />
 </div>
</div>
<p className="mr-t-m2 rd-clr">Monitoring 24/7</p>
<p>Lorem ipsum dolor sit amet, consectetur adipis
cing elit. Elementum nisi aliquet volutpat.</p>
</div>
<div className='col-md-4 col-12 mr-mb'>
<div className="flip-container02 justify-content-center" ontouchstart="this.classList.toggle('hover');">
    <div className="image-container02">
<img src="./assets/ic-2.png" className='text-center dp-im' />
</div>
</div>
<p className="mr-t-m2 rd-clr">Monitoring 24/7</p>
<p>Sapien in etiam vitae nibh nunc mattis imperdiet
sed nullam. Vitae et, tortor pulvinar risus pulvinar.</p>
</div>
<div className='col-md-4 col-12 mr-mb'>
<div className="flip-container02 justify-content-center" ontouchstart="this.classList.toggle('hover');">
    <div className="image-container02">
<img src="./assets/ic-3.png"className='text-center dp-im'/>
</div>
</div>
<p className="mr-t-m2 rd-clr">Best Performance</p>
<p>Lorem ipsum dolor sit amet, consectetur adipis
cing elit. Elementum nisi aliquet volutpat.</p>
</div>
            </div>
          
        </div>
        );
      }