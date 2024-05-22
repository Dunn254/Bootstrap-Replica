import React from 'react';
import imagebg from '../images/fruits-bg.png';

// Define the styles for the container div
const divStyle = {
  width: '100%',
  height: '400px',
  backgroundImage: `url(${imagebg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

// Define the LandingPage component
function LandingPage() {
  return (
    <div style={divStyle}>
      {/* First row with no gutter */}
      <div className="row g-0">
        <div className="col-sm-6 col-md-8">
          <h3>Order groceries for delivery or pickup today</h3>
          <h6>Whatever you want from local stores brought right to your door</h6>
          <input type='text' id='search' placeholder='search grocery'/>
        </div>
        <div className="col-6 col-md-4"></div>
      </div>
      
    </div>
  );
}

// Export the LandingPage component as the default export
export default LandingPage;
