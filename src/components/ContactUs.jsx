import "../styles/ContactUs.css";

export default function ContactUs() {
  const placeHolders = [
    {
      name: "Name",
    },
    {
      name: "Mobile no",
    },
    {
      name: "Email Id",
    },
  ];
  return (
    <>
      <div className="ContactUsContainer">
        <div className="contactCard">
          <div className="contactCardBody">
            <div className="cardLeft">
              <h1 className="contactUsHeader">Contact Us</h1>
              <div className="inputContainer">
                {placeHolders.map((placeholder, index) => (
                  <InputFields key={index} placeholder={placeholder} />
                ))}
              </div>
              <button className="contactSubmit">Submit</button>
            </div>
            <div className="cardRight">
              <div className="mapSection">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.8357674642325!2d77.64658487507556!3d12.918274987392222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU1JzA1LjgiTiA3N8KwMzgnNTcuMCJF!5e0!3m2!1sen!2sin!4v1706818046411!5m2!1sen!2sin"
                  width="400"
                  height="400"
                  allowfullscreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="addressSection">
                  <h4>Company Address:</h4>
                  <p>
                    24th Main 2nd Cross, Sector 1,<br /> 
                    HSR Layout, Bengaluru,<br />
                    Karnataka 560102
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function InputFields({ placeholder }) {
  return (
    <input type="text" placeholder={placeholder.name} className="inputFields" />
  );
}
