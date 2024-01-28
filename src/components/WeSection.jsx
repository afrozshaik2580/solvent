import React, { useState } from 'react';
import "../styles/WeSectionStyles.css";

export default function GetStarted() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
    return (
        <div className="bg-cl-about fnt-fam">
        <div className="container " style={{marginTop:'70px'}}>
            <div className='row' style={{alignItems:'center'}}>
<div className='col-lg-7 col-md-7 col-sm-12 col-12'>
<p className="we-sec-fnt p-fnt">
<span className='s-fnt'>We</span> are <span className='s-clr'>Established with a </span> commitment to excellence, Solvent
 is dedicated to providing&nbsp; 
   <span className='s-clr'>innovative solutions</span> that empower&nbsp;<span className="s-clr"> businesses</span> to thrive in the ever-evolving digital landscape.</p>
</div>
<div className='col-lg-5 col-md-5 col-sm-12 col-12'>
<img src="./assets/anime.webp" alt="Snow"  style={{ width: '100%',height:'100%' }}/>  
</div>
            </div>
       
        </div>
        
        </div>
    );
  }