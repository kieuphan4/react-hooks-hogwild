import React from 'react';

function HogDetails({ hog }) {
  return (
  <div>
     <h3>About Me!</h3>
     <div>Specialty: {hog.specialty}</div>
     <div>Weight: {hog.weight}</div>
     <div>{hog.greased ? "Is greased" : "Is not greased"}</div>
     <div>Highest Medal Achieved: {hog["highest medal achieved"]}</div>
  </div>);
};

export default HogDetails;
