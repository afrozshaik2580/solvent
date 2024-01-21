import React, { useState } from 'react';
import "../styles/GetStartedStyles.css";

export default function GetStarted() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
    return (
        <div className="bg-cl1 fnt-fam">
        <div className="container">
         {/* <img src="./assets/Background.png" alt="Snow"  style={{ width: '100vh' }}/> 
        <div className="centered">  */}
           <div className="text-center"> 
            <p className="fnt-sz1">Elevate Your Experience<br/> with Solvent</p>
            <p className='fnt-sz2'>
            harum nesciunt ipsum debitis</p>
            <p className="rd-clr mr-sp fnt-sz3"> EMBARK ON A JOURNEY OF INNOVATION</p>
            <div className="mr-sp">
{/* <button className="btn bt-gt"> GET STARTED</button>
  <button className="btn bt-gt2">READ MORE</button> */}
<button 
      className={`bt-gt ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      GET STARTED
    </button>
    <button 
      className={`bt-gt2 ${isHovered2 ? 'hovered2' : ''}`}
      onMouseEnter={() => setIsHovered2(true)}
      onMouseLeave={() => setIsHovered2(false)}
    >
    READ MORE
    </button>
  
            </div>
            <p className="mr-sp">We accept</p>
            <div className="dp-gt2 fnt-sz4">
 <div className="dp-gt">   
 <img src="./assets/sm-icon.png" alt="Snow"  style={{ width: '25px',height:'25px' }}/>         
<p className='text-start'>Digital marketing</p></div> 
<div className="dp-gt mr-nt">   
 <img src="./assets/sm-icon.png" alt="Snow"  style={{width: '25px',height:'25px' }}/> 
<p className='text-start'>software development</p></div>
<div className="dp-gt mr-nt2">   
 <img src="./assets/sm-icon.png" alt="Snow"  style={{ width: '25px',height:'25px' }}/> 
<p className='text-start'>seo</p></div>
<div className="dp-gt">   
 <img src="./assets/sm-icon.png" alt="Snow"  style={{width: '25px',height:'25px' }}/> 
<p className='text-start'>ui/ux</p></div>
            </div>
          </div>
        </div>
        
        </div>
    );
  }
  