import React, { useState, useEffect } from 'react';
import "./styles/OnlineSalesStyles.css";

export default function GetStarted() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const flipAngle = Math.min(scrollY / 4, 180); // Adjust the factor (4 in this example) based on your preference
  const AnimatedItem = ({ number, text }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <p className="mr-tb" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <span className={`nmb-st2 ${isHovered ? 'flipped' : ''}`}>
          <span className={`nmb-st ${isHovered ? 'flipped' : ''}`}>
            <span className="sp-num fnt-sec2-02">{number}</span><span className="fnt-sec2-02">{text}</span>
          </span>
        </span>
      </p>
    );
  };

  return (
    <div className={`bg-cl ${isFlipped ? 'flipped' : ''}`}>
      <div className="container mr-bt">
        <p className="mr-sec2 fnt-sec2">Lead Generation and Online Sales</p>
        <p className='fnt-sec3'>Tincidunt id nibh orci nibh just nulla elementum, sed vel.</p>
        <div className="row mr-sec2txt2 mr-sec2-bt dp-rw">
          <div className="col-lg-7 col-md-12 col-sm-12 text-center col-12 dp-dk">
            <div className="img-st2">
              <div className="img-st" style={{ transform: `rotateY(${flipAngle}deg)` }}>
              <img src="./assets/online-sales.webp" alt="Snow" style={{ width: '100%', height: '100%', borderRadius: '6px', transform: `rotateY(${isFlipped ? '180deg' : '0'})` }} />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-12 txt-lft rd-cl">
            <p className="fnt-1">Call to Action</p>
      {/* <div className={`nmb-st2 ${isHovered ? 'flipped' : ''}`}>
    <div className={`nmb-st ${isHovered ? 'flipped' : ''}`}>
      <span className="sp-num">01</span><span>Market Trends Analysis</span>
    </div>
    </div> */}
    <div>
      <AnimatedItem number="01" text="Market Trends Analysis" />
      <AnimatedItem number="02" text="Customer Research" />
      <AnimatedItem number="03" text="Market Sizing and Forecasting" />
      <AnimatedItem number="04" text="Competitive Analysis" />
      <AnimatedItem number="05" text="Business Plan and pitch deck" />
      <AnimatedItem number="06" text="Go to Market Strategy" />
    </div>
{/* <p className="mr-tb "><span className="nmb-st2"><span className="nmb-st">01</span><span>Market Trends Analysis</span></span></p>
<p className="mr-tb "><span className="nmb-st2"><span className="nmb-st">02</span><span>Customer Research</span></span></p>
<p className="mr-tb "><span className="nmb-st2"><span className="nmb-st">03</span><span>Market Sizing and Forecasting</span></span></p>
<p className="mr-tb "><span className="nmb-st2"><span className="nmb-st">04</span><span>Competitive Analysis</span></span></p>
<p className="mr-tb "><span className="nmb-st2"><span className="nmb-st">05</span><span>Business Plan and pitch deck</span></span></p>
<p className="mr-tb "><span className="nmb-st2"><span className="nmb-st">06</span>
<span>Go to Market Strategy</span></span></p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
