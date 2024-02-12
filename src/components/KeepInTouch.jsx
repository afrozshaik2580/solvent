import React, { useState } from 'react';
import "../styles/keepInTouchStyles.css";

export default function ServicesOne() {
    return (
        <div className=" mb-3 container bg-ctus text-white fnt-fam text-center" styles={{ }}>
            <p className="mr-sec mr-first">Keep in touch and stay inspiring everyday</p>
            {/* <p className='mr-sec'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At senectus vitae hendrerit massa in.</p> */}
            <div className=" h-8 flex justify-content-center mb-4" styles={{ margin:'auto' }}>
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-ipt  text-white outline-none w-[25%] "
              style={{}}/>
              <button className="bg-btn py-0 bg-red-500 w-[25%]  h-[100%] " style={{}}>
                Submit
              </button>
            </div>
                    </div>
    );
  }
  