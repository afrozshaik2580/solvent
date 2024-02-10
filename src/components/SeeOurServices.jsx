import React, { useState } from 'react';
import "../styles/SeeOurServicesStyles.css";

export default function ServicesOne() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    return (
        <div className=" mr-servces text-white">
            <div className='row align-items-center'>
                <div className="col-md-6 col-12">
                <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
    <div class="image-container">
        <img src="./assets/services-img.webp" class="image"/>
    </div>
</div>
   </div>
                <div className="col-md-6 col-12 bg-services">
                    <div className=''>
                        <p className='fnt-s1'>Lorem ipsum dolor</p>
                        <p className='fnt-s2'>Maxime mollitia,</p>
                        <p className='fnt-s2' >molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                        <p className='fnt-s2'>numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium</p>                     
                        <p className='fnt-s2'>optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                       <div className='text-center mt-3'>
                        <button 
      className={`bt-services fnt-s3  ${isHovered2 ? 'hovered2' : ''}`}
      onMouseEnter={() => setIsHovered2(true)}
      onMouseLeave={() => setIsHovered2(false)}
    > See Our Services</button></div>
                    </div>
                    </div>
            </div>

        </div>
        );
      }
      