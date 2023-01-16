import React from "react";
import person1 from "../Images/angela.png";
import person2 from "../Images/Erica.jpeg";
import person3 from "../Images/rachel.jpeg";

function HomeClientsTestimonials() {
  return (
    <div className="clients-testimonias-container">
      <div className="clients-testimonias-header">
        <h2 className="clients-testimonias-heading">CLIENT'S TESTIMONIAS</h2>
      </div>
      <div className="clients-testimonias-content">
        <div className="clients-testimonias-person">
          <img src={person1} className="clients-testimonias-person-image"/>
          <span className="clients-testimonias-person-name">Angela Ju</span>
          <p className="clients-testimonias-person-recommendation">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
        </div>
        <div className="clients-testimonias-person">
          <img src={person2} className="clients-testimonias-person-image"/>
          <span className="clients-testimonias-person-name">Erica Norman</span>
          <p className="clients-testimonias-person-recommendation">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
        </div>
        <div className="clients-testimonias-person">
          <img src={person3} className="clients-testimonias-person-image"/>
          <span className="clients-testimonias-person-name">Rachel Muldoon</span>
          <p className="clients-testimonias-person-recommendation">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  );
}

export default HomeClientsTestimonials;
