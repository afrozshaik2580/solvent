import React, { useState, useEffect } from 'react';
import "../styles/CardsSectionStyles.css";

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

  const flipAngle = Math.min(scrollY / 2, 180); // Adjust the factor (4 in this example) based on your preference
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
      
        <div className="row mr-sec2txt2 mr-sec2-bt dp-rw">
          <div className="col-lg-3 col-md-6 col-sm-6 text-center col-6 dp-dk">
            <div className="img-st2-ab">
              <div className="img-st-ab" style={{ transform: `rotateY(${flipAngle}deg)` }}>
              <img src="./assets/card1.png" alt="Snow" style={{ width: '100%', height: '100%', borderRadius: '6px', transform: `rotateY(${isFlipped ? '180deg' : '0'})` }} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center col-6 dp-dk mr-img" style={{}}>
            <div className="img-st2-ab">
              <div className="img-st-ab" style={{ transform: `rotateY(${flipAngle}deg)` }}>
              <img src="./assets/card2.png" alt="Snow" style={{ width: '100%', height: '100%', borderRadius: '6px', transform: `rotateY(${isFlipped ? '180deg' : '0'})` }} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center col-6 dp-dk">
            <div className="img-st2-ab">
              <div className="img-st-ab" style={{ transform: `rotateY(${flipAngle}deg)` }}>
              <img src="./assets/card3.png" alt="Snow" style={{ width: '100%', height: '100%', borderRadius: '6px', transform: `rotateY(${isFlipped ? '180deg' : '0'})` }} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center col-6 dp-dk mr-img" style={{}}>
            <div className="img-st2-ab">
              <div className="img-st-ab" style={{ transform: `rotateY(${flipAngle}deg)` }}>
              <img src="./assets/card4.png" alt="Snow" style={{ width: '100%', height: '100%', borderRadius: '6px', transform: `rotateY(${isFlipped ? '180deg' : '0'})` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
