import React, { useState } from 'react';
import "../styles/HeaderStyles.css";

export default function Header() {
  // const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // const toggleHamburger = () =>{
  //     setHamburgerOpen(!hamburgerOpen)
  // }
  const [isOpen, setOpen] = React.useState(false);
    return (
      <>
<div className="fixed-navbar bg-cl desktop-hide">
<div className="row">
<div className="col-lg-4">
<img src="./assets/solvent-logo.png" className="img-hd" alt="Solvent" style={{ }}/>
</div>
<div className="col-lg-6 fnt-hd">
<ul>
  <li><a href="/" className="squeeze-animation">HOME</a></li>
  <li><a href="/about" className="squeeze-animation">ABOUT</a></li>
  <li><a href="/service" className="squeeze-animation">SERVICE</a></li>
  <li><a href="/features" className="squeeze-animation">FEATURES</a></li>
  <li><a href="/contactUs" className="squeeze-animation">CONTACT US</a></li>
</ul>
</div>
<div className="col-lg-2 text-align-center">
{/* <select>
 <option></option>
 <option>Log</option>
 <option>Signup</option>
 <option>3</option>


</select> */}
</div>
</div>
</div>
{/* Mobile Header */}
<div className="fixed-navbar bg-cl mobile-hide">
      {/* ... (your mobile header content) ... */}
      <div className='row'>
        <div className="col-md-4 col-sm-5 col-4">
        <img src="./assets/solvent-logo.png" className="img-hd" alt="Solvent" style={{ }}/>
        </div>
        <div className="col-md-5 col-sm-5 col-5 ">
        
</div>
<div className="col-md-3 col-sm-2 col-3 text-center">
<div>
        <button
          onClick={() => setOpen(!isOpen)}
          className={`hamburger-button ${isOpen ? "open" : "close"}`}
        />
        <div className={`panel ${isOpen ? "open" : "close"}`}>
        <ul>
  <li><a href="/" className="squeeze-animation">HOME</a></li>
  <li><a href="/about" className="squeeze-animation">ABOUT</a></li>
  <li><a href="/service" className="squeeze-animation">SERVICE</a></li>
  <li><a href="/features" className="squeeze-animation">FEATURES</a></li>
  <li><a href="/contactUs" className="squeeze-animation">CONTACT US</a></li>
  {/* <li><select>
 <option></option>
 <option>1</option>
 <option>2</option>
 <option>3</option>
 <option></option>
 <option></option>

</select></li> */}

</ul>
        </div>
      </div>
</div>

      </div>
    </div>
</>
    );
  }
  
  