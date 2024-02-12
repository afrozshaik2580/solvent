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
                        {/* <p className='fnt-s1'>Lorem ipsum dolor</p> */}
                        <p className='fnt-s2'>We specialize in leveraging cutting-edge technologies such as React.js, 
                        Angular, HTML, CSS, and JavaScript to craft seamless digital solutions tailored to meet the 
                        unique needs of our clients. Our team's deep expertise in these languages and frameworks allows 
                        us to deliver robust, efficient, and user-friendly web applications and interfaces. Whether you 
                        need a dynamic and interactive user interface or a 
                        responsive and scalable web application, we have the skills and knowledge to bring your vision to life.</p>
                       {/* <div className='text-center mt-3'>
                        <button 
      className={`bt-services fnt-s3  ${isHovered2 ? 'hovered2' : ''}`}
      onMouseEnter={() => setIsHovered2(true)}
      onMouseLeave={() => setIsHovered2(false)}
    > See Our Services</button></div> */}
                    </div>
                    </div>
            </div>

        </div>
        );
      }
      