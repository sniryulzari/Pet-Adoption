import React from "react";

function HomePhotoGallery() {


  return (
    <div className="home-photo-gallery-container">
      <span className="photo-gallery-heading-top">Photo Gallery</span>
      <h2 className="photo-gallery-heading-bottom">
        Looking & Smelling Great!
      </h2>
      <div className="photo-gallery-image-container">
        <div className="photo-gallery-image-col-1">
          <img src="http://demo2.themelexus.com/petzen/wp-content/uploads/2020/04/home-1-15.jpg" alt="pet image" className="photo-gallery-image"/>
          <img src="http://demo2.themelexus.com/petzen/wp-content/uploads/2020/04/home-1-12-300x300.jpg" alt="pet image" className="photo-gallery-image"/>
        </div>

        <div className="photo-gallery-image-col-2">
          <img src="http://demo2.themelexus.com/petzen/wp-content/uploads/2020/04/home-1-18-300x300.jpg" alt="pet image" className="photo-gallery-image"/>
          <img src="http://demo2.themelexus.com/petzen/wp-content/uploads/2020/04/home-1-14-300x300.jpg" alt="pet image" className="photo-gallery-image"/>
        </div>

        <div className="photo-gallery-image-col-3">
          <img src="http://demo2.themelexus.com/petzen/wp-content/uploads/2020/04/home-1-17-300x300.jpg" alt="pet image" className="photo-gallery-image"/>
          <img src="http://demo2.themelexus.com/petzen/wp-content/uploads/2020/04/home-1-09-300x300.jpg" alt="pet image" className="photo-gallery-image"/>
        </div>

        <div className="photo-gallery-image-col-4">
          <img src="http://demo2.themelexus.com/petzen/wp-content/uploads/2020/04/home-1-16-300x300.jpg" alt="pet image" className="photo-gallery-image"/>
          <img src="http://demo2.themelexus.com/petzen/wp-content/uploads/2020/04/home-1-13-300x300.jpg" alt="pet image" className="photo-gallery-image"/>
        </div>

        <div className="photo-gallery-image-col-5">
          <img src="http://demo2.themelexus.com/petzen/wp-content/uploads/2020/04/home-1-11-300x300.jpg" alt="pet image" className="photo-gallery-image"/>
          <img src="http://demo2.themelexus.com/petzen/wp-content/uploads/2020/04/home-1-10-300x300.jpg" alt="pet image" className="photo-gallery-image"/>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default HomePhotoGallery;
